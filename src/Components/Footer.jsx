import React from 'react'
import {
Typography,
Paper
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root:{
        position:"absolute",
        height:"200px",
        padding:"0",
        width:"100vw",
        background:"black",
        marginTop:"auto",
        bottom:"0"
    }
}))



const Footer = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root} elevation={0}>
            <Typography>
                FOOTER SECTION
            </Typography>
        </Paper>
    )
}

export default Footer
