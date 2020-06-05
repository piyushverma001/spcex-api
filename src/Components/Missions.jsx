import React ,{ useState, useEffect } from 'react'
import Navabar from './Navabar'
// import {getMissions} from './Api'
import {
Typography,
Grid,
Card,
CardContent,
CardActionArea,
CircularProgress,
Button,
Box,
CardActions,
Dialog,
DialogTitle,
DialogContent,
DialogActions,
DialogContentText
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    title:{
        marginTop:theme.spacing(8),
        color:"#829FD9"
    },
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
        maxWidth: 300,
        background:"",
        margin: "5rem auto auto auto"
    },
    cardActionarea:{
        height:200,
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
        margin:"auto auto"
    }
    
}))

const Missions = () => {
    const classes = useStyles();
    const [Missions, setMissions] = useState('');
    const [Loading,setLoading] = useState(false);
    const [DialogOpen, setDialogOpen] = useState(false);

    const [DialogData, setDialogData ] = useState('');

    useEffect(() => {
        async function getMissions(){
            setLoading(true)
            try{
                await axios.get("https://api.spacexdata.com/v3/missions")
                .then((res) =>{
                    console.log(res.data);
                    setMissions(res.data)
                })
                setLoading(false)
            }
            catch(err){
                console.log(err)
                setLoading(false)
            }
        }
        getMissions();
        
    }, [])

    const handleClose =() => {

        setDialogOpen(false);
    }
    
    const handleOpen = (item) => {
        setDialogData(item)
        setDialogOpen(true);
        
    }

    

    // const openDialog = (data) => {
    //     console.log(data)
    // }
                // <Dialog open={true} >
                //     <DialogTitle>
                //         Hello World
                //     </DialogTitle>
                // </Dialog>
       
   
       
    const listItems = [...Missions].map((item,id) => 
        <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.cardContainer}>
                            <CardActionArea className={classes.cardActionarea}>

                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        {item.mission_name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Manufacturer: <strong>{item.manufacturers}</strong>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                                <CardActions >
                                    <div className={classes.cardActions}>

                                    <Button onClick={() => handleOpen(item)}>
                                        Details
                                    </Button>

                                    <Button href={item.wikipedia} target="_blank">
                                        Wiki
                                    </Button>

                                    <Button href={item.website} target="_blank">
                                        Website 
                                    </Button>
                                    </div>

                                </CardActions>
                        </Card>
                 </Grid>
                 
                 
    )

    

    return (
        <>
            <Navabar/>
             {/* <Typography className={classes.title} variant="h3" align="center">
             </Typography> */}
            <Box  className={classes.mainContainer}>
                <Typography variant="h4" style={{color:"white"}}>
                    <strong>Missions</strong>
                </Typography>
               {Loading && <CircularProgress className={classes.loading}/> }
             <Grid container className={classes.container} alignItems="center">
                
                {listItems}
                 
                 
             </Grid>
             </Box>
             
                <Dialog open={DialogOpen} onClose={handleClose} className={classes.dialogContainer} scroll="paper">
                     <DialogTitle disableTypography>
                         <Typography variant="h3">
                            {DialogData.mission_name}
                        </Typography>
                     </DialogTitle>

                        <DialogContent dividers={true}>
                            <DialogContentText >

                                <Typography>
                                    <strong>Manufacturer(s) : </strong>  {DialogData.manufacturers}
                                </Typography>

                                <Typography>
                                    <strong>Description : </strong>{DialogData.description}
                                </Typography>
                                    
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>
                                Close
                            </Button>
                        </DialogActions>
                 </Dialog>
        </>
    )
}

export default Missions
