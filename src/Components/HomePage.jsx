import React from 'react'
import Navbar from './Navabar'
import Carousel from 'react-material-ui-carousel';
import spacex1 from '../images/homeImages/spacex1.jpg'
import spacex2 from '../images/homeImages/spacex2.jpg'
import spacex3 from '../images/homeImages/spacex3.jpg'

import spacex4 from '../images/homeImages/spacex4.jpg'
import spacex5 from '../images/homeImages/spacex5.jpg'
import spacex6 from '../images/homeImages/spacex6.jpg'
import spacex7 from '../images/homeImages/spacex7.jpg'
import WebIcon from '@material-ui/icons/Web';
// import axios from 'axios'
import {
Card,
CardMedia,
Box,
Typography,
IconButton
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    mainContainer:{
        marginTop: theme.spacing(10),
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    carouselContainer:{
        width:"40vw",
        [theme.breakpoints.between("sm","md")]:{
            width:"50vw",
        },
        [theme.breakpoints.down("sm")]:{
            width:"80vw",
        }
    },
    title:{
        position:"relative",
        color:"white",
        marginTop:"2rem",
        width:"60%",
        [theme.breakpoints.down("sm")]:{
            marginTop:"10px",
            width:"90%"
        }
    },
    info:{
        marginTop:"2rem",
        color:"white",
        marginLeft:"1.5rem"
    },
    links:{
        display:"flex",
        flexDirection:"row",
        height:"3rem",
        marginTop:"3rem",
        width:"200px",
        marginLeft:"auto",
        marginRight:"auto"

    },
    icon:{
        color:"white",
        textDecoration:"none",
        marginTop:"auto",
        marginLeft:"1rem",
        marginRight:"1rem",
        transition:"transform 0.2s",
        '&:hover':{
            transform:"scale(1.5)",
            color:"#F2881B"
        }
    }
}))

const HomePage = () => {
    const classes = useStyles();  



    return (
        <div>
            <Navbar />

            <Box className={classes.mainContainer}>
                <Box component="div" className={classes.carouselContainer}>

                    <Carousel
                        interval="3000"
                        animation="fade"
                        navButtonsAlwaysVisible
                        timeout={{
                            appear: 500,
                            enter: 500,
                            exit: 0   // <-- Set this to 0
                        }}
                    >
                        <Card className={classes.carouselCard}>
                            <CardMedia 
                            component="img"
                            image={spacex1} />
                        </Card>
                        <Card className={classes.carouselCard}>
                            <CardMedia 
                            component="img"
                            image={spacex2} />
                        </Card>
                        <Card className={classes.carouselCard}>
                            <CardMedia 
                            component="img"
                            image={spacex3} />
                        </Card>
                        <Card className={classes.carouselCard}>
                            <CardMedia 
                            component="img"
                            image={spacex4} />
                        </Card>
                        <Card className={classes.carouselCard}>
                            <CardMedia 
                            component="img"
                            image={spacex5} />
                        </Card>
                        <Card className={classes.carouselCard}>
                            <CardMedia 
                            component="img"
                            image={spacex6} />
                        </Card>
                        <Card className={classes.carouselCard}>
                            <CardMedia 
                            component="img"
                            image={spacex7} />
                        </Card>
                        
                    </Carousel> 
                    </Box>
                    <Box component="div" className={classes.title}>
                        <Typography variant="h3" align="center">
                            SpaceX
                        </Typography>
                            <br/>
                        <Typography variant="subtitle1" align="center">
                        SpaceX designs, manufactures and launches advanced rockets and spacecraft.
                         The company was founded in 2002 to revolutionize space technology, 
                         with the ultimate goal of enabling people to live on other planets.
                        </Typography>
                    </Box>

                    <Box component="div" className={classes.info}>
                        <Typography>
                            CEO : <strong>ELON MUSK</strong>
                        </Typography>
                        <Typography>
                            CTO : <strong>ELON MUSK</strong>
                        </Typography>
                        <Typography>
                            COO : <strong>Gwynne Shotwell</strong>
                        </Typography>
                        <Typography>
                            Company Valuation : <strong>27.5B $</strong>
                        </Typography>

                        <Typography>
                            Headquarters : <strong>Rocket Road, Hawthorne, California.</strong>
                        </Typography>
                    </Box>

            </Box>
                        <Box component="div" className={classes.links} >
                            <IconButton title="spacex.com" href="https://www.spacex.com/" target="_blank">
                                <WebIcon className={classes.icon} fontSize="large"/>
                            </IconButton>
                    
                            <IconButton title="spacex Twitter" href="https://twitter.com/SpaceX" target="_blank">
                                <TwitterIcon className={classes.icon} fontSize="large"  />
                            </IconButton>

                            <IconButton title="Elon Twitter" href="https://twitter.com/elonmusk" target="_blank">
                                <TwitterIcon className={classes.icon} fontSize="large" />
                            </IconButton>

                        </Box>
        </div>
    )
}

export default HomePage
