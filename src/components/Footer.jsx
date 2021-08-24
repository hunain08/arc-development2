import React from 'react'
import {Link} from "react-router-dom";
import { Hidden, makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import footer from '../components/logo/Footer.svg'
import facebook from '../components/logo/facebook.svg'
import instagram from '../components/logo/instagram.svg'
import twitter from '../components/logo/twitter.svg'
import { height } from '@material-ui/system';

const useStyles = makeStyles(theme =>({
    footer:{
        backgroundColor: theme.palette.common.blue,
        width:"100%",
        zIndex:1302,
        position:"relative"
    },
    adorment:{
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]:{
            width:"21em"
        },
        [theme.breakpoints.down("xs")]:{
            width:"15em"
        }
    },
    mainContainer:
    {
        position:"absolute"
    },
    link:{
        color:"white",
        fontFamily:"Arial",
        fontSize:"0.75rem",
        fontWeight:"bold",
        textDecoration:"none"
    },
    gridItem:{
        margin: "3em",
    },
    icon:{
        height:"4em",
        width:"4em",
        [theme.breakpoints.down("xs")]:{
        height:"2.5em",
        width:"2.5em"
    }
    },socialContainer:
    {
        position:"absolute",
        marginTop:"-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]:{
            right:"0.6em"
        }
        
    }
}));
export default function Footer({setvalue,setselectedIndex}) {
    const classes = useStyles();
    return(
    
    <footer className={classes.footer}>
       <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
           <Grid item className={classes.gridItem}> 
            <Grid container direction="column"  spacing={2}>
                <Grid item component={Link} onClick={() => setvalue(0)} to="/"  className={classes.link}>
                    Home
                </Grid>
            </Grid>
           </Grid>
           <Grid item className={classes.gridItem}> 
            <Grid container direction="column"  spacing={2}>
                <Grid item component={Link} onClick={() => {setvalue(1);setselectedIndex(0)}} to="/services"  className={classes.link}>Services</Grid>
                <Grid item component={Link} onClick={() => {setvalue(1);setselectedIndex(1)}} to="/software-development"  className={classes.link}>Custome Software Development</Grid>
                <Grid item component={Link} onClick={() => {setvalue(1);setselectedIndex(2)}} to="/mobile-app-development"  className={classes.link}>Mobile App Developmet</Grid>
                <Grid item component={Link} onClick={() => {setvalue(1);setselectedIndex(3)}} to="/website-development"  className={classes.link}>Website Development</Grid>
            </Grid>
           </Grid>
        <Grid item className={classes.gridItem}>
            <Grid container direction="column"  spacing={2}>
                <Grid item component={Link} onClick={() => setvalue(2)} to="/revolution"  className={classes.link}>
                    The Revolution
                </Grid>
                <Grid item  component={Link} onClick={() => setvalue(2)} to="/revolution" className={classes.link}>
                    Vision
                </Grid>
                <Grid item  component={Link} onClick={() => setvalue(2)} to="/revolution" className={classes.link}>
                    Technology
                </Grid>
                <Grid item component={Link} onClick={() => setvalue(2)} to="/revolution" className={classes.link}>
                    Process
                </Grid>
            </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
            <Grid container direction="column"  spacing={2}>
                <Grid item component={Link} onClick={() => setvalue(3)} to="/about"  className={classes.link}>
                    About Us
                </Grid>
                <Grid item component={Link} onClick={() => setvalue(3)} to="/about" className={classes.link}>
                    History
                </Grid>
                <Grid item component={Link} onClick={() => setvalue(3)} to="/about" className={classes.link}>
                    Team
                </Grid>
            </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
                <Grid item component={Link} onClick={() => setvalue(4)} to="/contact-us"  className={classes.link}>
                    Contact Us
                </Grid>
            </Grid>
        </Grid>
        </Grid>
        </Hidden>
        
        <img src={footer} className={classes.adorment} 
        alt="Black Logo"/>
        <Grid container spacing={2} justify="flex-end" className={classes.socialContainer}>
            <Grid item component={"a"} href="http://www.facebook.com" rel="nooperner noreferrer" target="_blank">
                <img alt="facebook logo" src={facebook} className={classes.icon}></img>
            </Grid>
            <Grid item component={"a"} href="http://www.instagram.com" rel="nooperner noreferrer" target="_blank">
                <img alt="Instagram logo" src={instagram} className={classes.icon}></img>
            </Grid>
            <Grid item component={"a"} href="http://www.twitter.com" rel="nooperner noreferrer" target="_blank">
                <img alt="twitter logo" src={twitter} className={classes.icon}></img>
            </Grid>
        </Grid>
        </footer>
    );
}