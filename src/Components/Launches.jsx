import React , { useState, useEffect } from 'react'
import Navabar from './Navabar'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';

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
    },
    cardActionsContainer:{
        background:"#F2F0E9"
    }
}))

const Launches = () => {
    const classes = useStyles();
    const [Data, setData] = useState('');
    const [length, setlength] = useState(12);

    async function getLaunches(){  
        
        setlength(length+12);
        // console.log(length)
        // setLoading(true)
        try{
            await axios.get(`https://api.spacexdata.com/v3/launches?limit=${length}`)
            .then((res) =>{
                console.log(res.data);
                setData(res.data);
            });
            // setLoading(false)
        }
        catch(err){
            console.log(err)
            // setLoading(false)
        }
        
    }

    useEffect(() => {
        
        getLaunches();

    },[])
    // getLaunches();
  

    return (
        <>
          <Navabar/>
            <Box className={classes.mainContainer}>
            <Typography variant="h4" style={{color:"white"}}>
                    <strong>Launches</strong>
                    {/* <Button onClick={getLaunches}>
                        load
                    </Button>
                    {[...Data].map((item,id)=> (
                        <h6 key={id}>{item.mission_name}</h6>
                    ))} */}
             </Typography>
                
                    <InfiniteScroll
                    dataLength={[...Data].length}
                    next={getLaunches}
                    hasMore={true}
                    loader=""
                    >
                        <Grid container className={classes.container} alignItems="center">


                        {[...Data].map((item,id)=> (
                       <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
                       <Card className={classes.cardContainer}>
                               <CardActionArea className={classes.cardActionarea}>
   
                                   <CardContent className={classes.cardContent}>
                                       <Typography gutterBottom variant="h5">
                                           {item.mission_name}
                                       </Typography>
                                       {/* <Typography variant="body2" color="textSecondary" component="p">
                                           Manufacturer: <strong>{item.manufacturers}</strong>
                                       </Typography> */}
                                   </CardContent>
                               </CardActionArea>
                                   <CardActions className={classes.cardActionsContainer}>
                                       <div className={classes.cardActions}>
   
                                       <Button >
                                           Details
                                       </Button>
{/*    
                                       <Button href={item.wikipedia} target="_blank">
                                           Wiki
                                       </Button>
   
                                       <Button href={item.website} target="_blank">
                                           Website 
                                       </Button> */}
                                       </div>
   
                                   </CardActions>
                           </Card>
                    </Grid>
                    ))}
                    </Grid>
                    </InfiniteScroll>
                    <CircularProgress style={{marginTop:"20px"}} />

               
            </Box>
        </>
    )
}

export default Launches
