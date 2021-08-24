import React from "react";
import {Link} from "react-router-dom"
import { makeStyles,Typography,Button,Grid, useTheme,useMediaQuery } from "@material-ui/core";
import ButtonArrow from "./Ui/ButtonArrow";
import CustomSoftware from "../components/logo/CustomSoftwareIcon.svg";
import MobileApp from "../components/logo/MobileApp.svg";
import WebsiteIcon from "../components/logo/WebsiteIcon.svg";
const useStyles = makeStyles(theme =>({
    learnButton: {
        ...theme.typography.learnButton,
        height: 45,
        width: 145,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
          marginBottom: "2em",
        },
      },
      specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange,
      },
      subtitle1: {
        marginBottom: "1em",
      },
      item: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
          marginLeft: 0,
        },
      },
      serviceContainer: {
        marginTop: "2em",
        [theme.breakpoints.down("sm")]: {
          padding: 25,
        },
      },
}))
export default function Services(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <Grid container direction="column">
            <Grid item>
            <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle1}>
              Save Energy.Save Time.Save Money
            </Typography>
            <Typography variant="subtitle1">
              Complete Digital Solution from Investigation to{" "}
              <span className={classes.specialText}>Celebration </span>
            </Typography>
            <Button
              component={Link}
              to="/software-development"
              className={classes.learnButton}
              variant="outlined"
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              ></ButtonArrow>
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.item} src={CustomSoftware} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">IOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle1}>
              Extend Functionality. Extend Access. Increase Enagagement
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />} with either mobile platform
            </Typography>
            <Button
              component={Link}
              to="/mobile-app-development"
              className={classes.learnButton}
              variant="outlined"
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              ></ButtonArrow>
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img className={classes.item} src={MobileApp} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesXS ? "center" : "inherit",
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle1}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, bult for speed.
            </Typography>
            <Button
              component={Link}
              to="/website-development"
              className={classes.learnButton}
              variant="outlined"
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              ></ButtonArrow>
            </Button>
          </Grid>
          <Grid
            item
            style={{
              textAlign: matchesXS ? "center" : "right",
              marginRight: matchesSM ? "2em" : "5em",
            }}
          >
            <img className={classes.item} src={WebsiteIcon} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    )
}