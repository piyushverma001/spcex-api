import React , { useState, useEffect } from 'react'
import Navabar from './Navabar'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import LazyLoad from 'react-lazy-load'
// import Image from 'material-ui-image'
// 
import {
Box,
Typography,
Button,
Grid,
Card,
CardActions,
CardActionArea,
CardContent,
CircularProgress,
Dialog,
DialogTitle,
DialogContent,
DialogContentText,
DialogActions,
CardMedia
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

    mainContainer:{
        marginTop: theme.spacing(10),
        height:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    container:{
        
    },
    cardContainer: {
        maxWidth: 310,
        background:"",
        margin: "5rem auto auto auto"
    },
    cardActionarea:{
        maxHeight:300,
    },
    loading:{
        marginTop:"1rem",
        color:"#F2881B"
    },
    dialogContainer:{
        height:"100vh"
    },
    cardContent:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    cardActions:{
        margin:"auto"
    },
    cardActionsContainer:{
        background:"#F2F0E9"
    },
    media:{
        opacity:0.85
    }
}))

const Launches = () => {
    const classes = useStyles();
    const [Data, setData] = useState('');
    const [length, setlength] = useState(12);
    const [hasmore, sethasmore] = useState(true);
    const [DialogOpen, setDialogOpen] = useState(false);
    const [isError, setisError] = useState(false);
    const [DialogData, setDialogData ] = useState('');

    const [showImg, setshowImg] = useState(false);
    const [ImgData, setImgData] = useState('');

    async function getLaunches(){  
        
        setlength(length+12);
        // console.log(length)
        if(length>110){
            sethasmore(false)
        }
        // setLoading(true)
        try{
            await axios.get(`https://api.spacexdata.com/v3/launches?limit=${length}`)
            .then((res) =>{
                // console.log(res.data);
                setData(res.data);
                setisError(false);
            });
            // setLoading(false)
        }
        catch(err){
            setisError(true);
            console.log(err)
            // setLoading(false)
        }
        
    }

    useEffect(() => {
        getLaunches();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
    const handleClose =() => {

        setDialogOpen(false);
    }
    
    const handleOpen = (item) => {
        setDialogData(item)
        setDialogOpen(true);
        
    }

    const getDate = (date) => {
        let d = new Date(date);
        return(d.toString())
    }

    const handleImgOpen = (data) => {
        setImgData(data);
        setshowImg(true);
    }

    const handleImgClose = () => {
        setshowImg(false);
    }

    return (
        <>
          <Navabar/>
            <Box className={classes.mainContainer}>
            <Typography variant="h4" style={{color:"white"}}>
                    <strong>Launches</strong>
                    
             </Typography>

             

                    <InfiniteScroll
                    dataLength={[...Data].length}
                    next={getLaunches}
                    hasMore={hasmore}
                    loader=""
                    >
                        <Grid container className={classes.container} alignItems="center">

                        {/* {console.log([...Data])} */}
                        {[...Data].map((item,id)=> (
                       <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
                       <Card className={classes.cardContainer}>
                               <CardActionArea className={classes.cardActionarea}>
                                   {/* {console.log(item.links.mission_patch)} */}
                               <CardMedia
                                component="img"
                                height="200"
                                className={classes.media}
                                image={item.links.mission_patch_small}
                                title={item.mission_name}
                                />
                                   <CardContent className={classes.cardContent}>
                                       <Typography gutterBottom variant="h5">
                                           {item.mission_name}
                                       </Typography>

                                       {/* <Typography gutterBottom variant="body2">
                                           Launch Date: {item.launch_date_local}
                                       </Typography> */}

                                   </CardContent>
                               </CardActionArea>
                                   <CardActions className={classes.cardActionsContainer}>

                                       <div className={classes.cardActions}>
   
                                       <Button onClick={() => handleOpen(item)}>
                                           More
                                       </Button>

                                       {(item.links.video_link) && 
                                       <Button href={item.links.video_link} target="_blank">
                                           Youtube
                                       </Button>}
                                        
                                    
                                        {
                                            (item.links.wikipedia) && 
                                            <Button href={item.links.wikipedia} target="_blank">
                                                wiki
                                            </Button>
                                        }

                                        {
                                            (item.links.flickr_images.length !== 0) &&
                                            <Button onClick={() => handleImgOpen(item.links.flickr_images)}>
                                                Images
                                            </Button>
                                        }



                                       </div>
   
                                   </CardActions>
                           </Card>
                    </Grid>
                    ))}
                    </Grid>
                    </InfiniteScroll>
                    { isError &&
                        <Typography variant="subtitle1" style={{color:"red"}}>
                            Error Loading... Check Your Internet Connection or Try to Refresh the page.
                        </Typography>}
                    {hasmore && <CircularProgress style={{marginTop:"20px", color:"#F2881B"}} />}

               
            </Box>

            <Dialog open={DialogOpen} onClose={handleClose} className={classes.dialogContainer} scroll="paper">
                     <DialogTitle disableTypography>
                         <Typography variant="h3">
                            {DialogData.mission_name}
                        </Typography>
                     </DialogTitle>

                        <DialogContent dividers={true}>
                            <DialogContentText >

                                <strong>Launch Date : </strong>  {getDate(DialogData.launch_date_utc)}
                            </DialogContentText>

                            <DialogContentText>
                                <strong>Launch Site : </strong>{(DialogData.launch_site) ? DialogData.launch_site.site_name_long : false}
                            </DialogContentText>

                            <DialogContentText>
                                <strong>Launch Succes : </strong>{(DialogData.launch_success) ? <span style={{color:"green"}}>Successfull</span> : <span style={{color:"red"}}>Failed</span>}
                            </DialogContentText>

                            {(!DialogData.launch_success) && 

                            <DialogContentText>
                                <strong> Failure Reason : </strong> {(DialogData.launch_failure_details) ? DialogData.launch_failure_details.reason : false }
                            </DialogContentText>}

                            {(DialogData.launch_success) && (DialogData.details) &&
                            <DialogContentText>
                                <strong>Details : </strong> {DialogData.details}
                            </DialogContentText>}

                             
                            
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>
                                Close
                            </Button>
                        </DialogActions>
                 </Dialog>


                 <Dialog
                 open={showImg}
                 scroll="paper"
                 style={{width:"100vw"}}
                 onClose={handleImgClose}
                 >
                     <DialogTitle disableTypography>
                        <Typography variant="h3">
                             Images  
                        </Typography>
                     </DialogTitle>

                     <DialogContent dividers={true}>
                           
                            { showImg &&
                               ImgData.map((item,id) => 
                               <Card key={id} style={{marginTop:"1rem", width:"100%"}}>
                                   <CardMedia>
                                   <LazyLoad placeholder="LOADING...">
                                        <img style={{width:"100%"}} alt="spaceX" src={item}/>
                                   </LazyLoad>
                                    </CardMedia>
                               </Card>
                                
                               )
                            }
                            
                     </DialogContent>
                     <DialogActions>
                         <Button onClick={handleImgClose}>
                             Close
                         </Button>
                     </DialogActions>
                    
                 </Dialog>
        </>
    )
}

export default Launches
