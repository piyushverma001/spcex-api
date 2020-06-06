import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
   
    List,
    ListItem,
    Drawer,
    IconButton,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import spacex from '../images/space.png'

import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
    root:{
        zIndex:1
    },
    logo:{
        height:"2rem",
        bottom:"30px",
        width:"7rem",
        marginLeft:"1rem",
        transition:"transform 0.2s",
        transform:"scale(1)",
        [theme.breakpoints.down("sm")]:{
            height:"3rem"
        },
        '&:hover':{
            transform: "scale(1.2)"
        }
    },
    appbar:{
        // background:"#000540",
        backgroundImage: "linear-gradient(to right, #0D0D0D ,  #71716E)",
        // zIndex: theme.zIndex.drawer + 1
    },
    listcontainer:{
        display:"flex",
        flexDirection:"row",
        padding:"0px",
        marginLeft:"auto",
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }
    },
    listitem:{
        transition:"transform 0.2s",
        color:"white",
        '&:hover , &:focus':{
            color:"#F2881B",
            transform: "scale(1.5)"
        }
    },
   menuicon:{
       transition:"transform 0.2s",
       color:"#FFFAFA",
       marginLeft:"auto",
       '&:hover':{
           transform:"scale(1.5)"
       },
       [theme.breakpoints.up("sm")]:{
           display:"none"
       }
   },
   drawer:{
    width: drawerWidth,
    flexShrink:0,
    overflow:"auto"
    
    
   },
   drawerPaper: {
    width: "inherit",
    backgroundImage:"linear-gradient(to bottom,  #0D0D0D , #71716E)",
    top: theme.spacing(7),
    color:"white"
  },
  listitemmob:{
    color:"white",
    marginTop:"1rem",
    fontSize:"1.25rem",
    '&:hover , &:focus':{
        color:"white",
    }
  }
}))

const Navabar = () => {
    const classes = useStyles();
    const [Open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!Open)
    }

    return (
        <div className={classes.root}>
        <AppBar className={classes.appbar}>
            <Toolbar>
                <img src={spacex} className={classes.logo} alt="spacex logo"/>

                <List className={classes.listcontainer}>
                    <ListItem component={Link} className={classes.listitem}>
                        About
                    </ListItem>
                    
                    <ListItem component={Link} to="/missions" className={classes.listitem}>
                        Missions
                    </ListItem>

                    <ListItem component={Link} to="/launches"  className={classes.listitem}>
                        Launches
                    </ListItem>

                    <ListItem component={Link} className={classes.listitem}>
                        Rockets
                    </ListItem>

                    <ListItem component={Link} className={classes.listitem}>
                        Payloads
                    </ListItem>

                    <ListItem component={Link} className={classes.listitem}>
                        Ships
                    </ListItem>

                    <ListItem component={Link} className={classes.listitem}>
                        Cores
                    </ListItem>

                    <ListItem component={Link} className={classes.listitem}>
                        Launch Pads
                    </ListItem>

                </List>
                
                <IconButton className={classes.menuicon} onClick={toggle}>
                    <MenuIcon />
                </IconButton>

                
            </Toolbar>
            
        </AppBar>

        <Drawer
        open={Open}
        anchor="right"
        variant="temporary"
        className={classes.drawer}
        classes={{
            paper: classes.drawerPaper,
          }}
        onClose={toggle}
        
         >
            <List>
                    <ListItem component={Link} className={classes.listitemmob}>
                        About
                    </ListItem>
                    
                    <ListItem component={Link} to="/missions" className={classes.listitemmob}>
                        Missions
                    </ListItem>

                    <ListItem component={Link} to="/launches" className={classes.listitemmob}>
                        Launches
                    </ListItem>

                    <ListItem component={Link} to="/rockets" className={classes.listitemmob}>
                        Rockets
                    </ListItem>

                    <ListItem component={Link} to="/payloads" className={classes.listitemmob}>
                        Payloads
                    </ListItem>

                    <ListItem component={Link} to="/ships" className={classes.listitemmob}>
                        Ships
                    </ListItem>

                    <ListItem component={Link} to="/cores" className={classes.listitemmob}>
                        Cores
                    </ListItem>

                    <ListItem component={Link} to="/launchpads" className={classes.listitemmob}>
                        Launch Pads
                    </ListItem>

                </List>
        </Drawer>


        </div>
    )
}

export default Navabar
