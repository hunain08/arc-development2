import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { Grid, makeStyles, useTheme, Typography } from "@material-ui/core";
import animationData from "./animation/landinganimation/data";
import { Button, Card, CardContent } from "@material-ui/core";
import ButtonArrow from "./Ui/ButtonArrow";
import CustomSoftware from "../components/logo/CustomSoftwareIcon.svg";
import MobileApp from "../components/logo/MobileApp.svg";
import WebsiteIcon from "../components/logo/WebsiteIcon.svg";
import RepeatingBackground from "../components/logo/repeatingBackground.svg";
import infoBackground from "../components/logo/infoBackground.svg";
import { useMediaQuery } from "@material-ui/core";
import CallToAction from "./Ui/CalltoAction";
const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
  },
  estimateButtton: {
    ...theme.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    ButtonContainer: {
      marginTop: "1em",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    height: 45,
    width: 145,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  HeroText: {
    minWidth: "21.5em",
    marginLeft: "1em",

    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
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
  revolutionBackground: {
    backgroundImage: `url(${RepeatingBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolution: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: "1.3em",
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0 8em 0",
      borderRadius: 0,
      width: "100%",
    },
  },
  InfoBack: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));
export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    redererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <Grid
          justifyContent="flex-end"
          alignItems="center"
          container
          direction="row"
        >
          <Grid item className={classes.HeroText}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br />
              To the MidWest
            </Typography>
            <Grid alignItems="center" container>
              <Grid
                alignItems="center"
                item
                className={classes.ButtonContainer}
                justifyContent="center"
              >
                <Button
                  component={Link}
                  to="/freeestimate"
                  className={classes.estimateButtton}
                  variant="contained"
                  onClick={() => props.setvalue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButton}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  ></ButtonArrow>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie
              options={defaultOptions}
              height={"100%"}
              width={"100%"}
            ></Lottie>
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
      <Grid item>
        <Grid
          style={{ height: "100em", marginTop: "15em" }}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Card className={classes.revolution}>
            <CardContent>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h3">The Revolution</Typography>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Visionary Insights coupled with cutting-edge technolgy is
                      a recipe for revolution.
                    </Typography>
                    <Button
                      component={Link}
                      to="/revolution"
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
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          style={{ height: "80em" }}
          alignItems="center"
          direction="row"
        >
          <Grid
            item
            container
            style={{ position: "absolute" }}
            direction={matchesXS ? "column" : "row"}
          >
            <Grid item sm style={{ marginLeft: matchesSM ? "2em" : "5em" }}>
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get Personel.</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/about"
                    className={classes.learnButton}
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill="white"
                    ></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? "2em" : "5em",
                textAlign: "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">Say hello! </Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/contact-us"
                    className={classes.learnButton}
                    variant="outlined"
                    style={{ color: "white", borderColor: "white" }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill="white"
                    ></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.InfoBack} />
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
}