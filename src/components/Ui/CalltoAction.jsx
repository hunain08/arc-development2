import React from "react";
import { Link } from "react-router-dom"
import { Grid, makeStyles, useTheme, Typography,Button,useMediaQuery } from "@material-ui/core";
import ButtonArrow from "./ButtonArrow";
import background from '../logo/background.jpg'
import mobilebackground from '../logo/mobilebackground.jpg'
const useStyles = makeStyles((theme) => ({
    learnButton: {
        ...theme.typography.learnButton,
        height: 45,
        width: 145,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
          marginBottom: "2em",
        },
      },
    
    background:{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            height: "60em",
            width: "100%",
            [theme.breakpoints.down("md")]:{
                backgroundImage: `url(${mobilebackground})`,
                backgroundAttachment: "inherit",

            }
    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius:50,
        height:  80,
        width: 205 ,
        backgroundColor:theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        [theme.breakpoints.down("sm")]:{
            marginLeft:0,
            marginRight:0
        }
    },
    
}));
export default function CallToAction() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Grid container  alignItems="center" justifyContent={matchesSM ? "center": "space-between"}
    className={classes.background} direction={matchesSM ? "column" : "row"}
    >
      <Grid item style={{marginLeft:"5em"}}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              {" "}
              Simple Software
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2"style={{fontSize:"1.5rem"}}>
              Take advantage of 21st century
            </Typography>
            <Grid container justifyContent={matchesSM ? "center" : undefined}  item>
            <Button component={Link} to="/freeestimate"
              className={classes.learnButton}
              variant="outlined"
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
            </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item> 
       <Button variant="contained" className={classes.estimateButton}>Free estimate</Button>
    </Grid>
    </Grid>
  );
}
