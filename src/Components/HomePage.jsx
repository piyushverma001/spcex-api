import React, { useState, useEffect } from 'react'
import Navbar from './Navabar'
import Carousel from 'react-material-ui-carousel';
import spacex from '../images/background.png'
import spacex2 from '../images/background2.jpg'
import axios from 'axios'
import {
Card,
CardMedia,
Box
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    mainContainer:{
        marginTop: theme.spacing(10),
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    carouselContainer:{
        width:"40vw",
        height:"40vh",
        [theme.breakpoints.between("sm","md")]:{
            width:"50vw",
            height:"40vh"
        },
        [theme.breakpoints.down("sm")]:{
            width:"80vw",
            height:"40vh"
        }
    },
    carouselCard:{
        // width:"100%",
        // height:"100%"
    }
}))

const HomePage = () => {
    const classes = useStyles();

    const [Data, setData] = useState('')

    

    useEffect(() => {

        

        async function getData(){  
        
            try{
                await axios.get(`https://www.flickr.com/photos/spacex/`,{
                    headers:{
                        "Access-Control-Allow-Origin": "http://localhost:3000",
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'

                    },
                    
                })
                .then((res) =>{
                     console.log(res.data);
                     setData(res.data);
                    //  console.log(Data)
                    
                    //  getImages();
                    // setisError(false);
                });
                // setLoading(false)
            }
            catch(err){
                // setisError(true);
                console.log(err)
                // setLoading(false)
            }
            
        }

        

        getData();
        // getImages();

    },[])

    return (
        <div>
            <Navbar />

            <Box className={classes.mainContainer}>
                <Box component="div" className={classes.carouselContainer}>

                    <Carousel
                        interval="1000"
                    >
                        <Card className={classes.carouselCard}>
                            <CardMedia 
                            component="img"
                            image={spacex} />
                        </Card>
                        <Card className={classes.carouselCard}>
                            <CardMedia 
                            component="img"
                            image={spacex2} />
                        </Card>
                    </Carousel> 

                </Box>

            </Box>
        </div>
    )
}

export default HomePage
