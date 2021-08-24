import React from "react";
import Lottie from "react-lottie";
import documentsAnimation from "./animation/integrationAnimation/data";
import scaleAnimation from "./animation/scaleAnimation/data";
import AutomationAnimation from "./animation/automationAnimation/data";
import UxAnimation from "./animation/uxAnimation/data";
import backArrow from "./logo/backArrow.svg";
import forwardArrow from "./logo/forwardArrow.svg";
import swissKnife from "./logo/swissKnife.svg";
import access from "./logo/extendAccess.svg";
import engagement from "./logo/increaseEngagement.svg";

import { Link } from "react-router-dom";
import {
  makeStyles,
  Grid,
  IconButton,
  Typography,
  Hidden,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  ArrowButton: {
    marginTop: "0.5em",
  },
}));
const documentsOptions = {
  loop: true,
  autoplay: true,
  animationData: documentsAnimation,
  redererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Mobileapp(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justifyContent={matchesMD ? "center" : undefined}
      >
        <Hidden mdDown>
          <Grid item className={classes.ArrowButton}>
            <IconButton
              component={Link}
              to="/software-development"
              style={{ backgroundColor: "transparent" }}
              onClick={() => props.setselectedIndex(1)}
            >
              <img src={backArrow} alt="servicepage" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              {" "}
              IOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              ost mobile app developers find an iOS app is easier to create than
              the Android one.
            </Typography>
            <Typography variant="body1" paragraph>
              For now, iOS remains the winner in the Android vs. iOS app
              development contest in terms of development time and the required
              budget
            </Typography>
            <Typography variant="body1" paragraph></Typography>
            <Typography variant="body1" paragraph>
              Xamarin is a cross-platform technology that makes it possible to
              build native applications for Android and iOS using a single,
              shared codebase. Like other technologies such as React Native and
              NativeScript, it allows development teams to spend less time
              writing code for both platforms.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.ArrowButton}>
            <IconButton
              component={Link}
              to="/website-development"
              style={{ backgroundColor: "transparent" }}
              onClick={() => props.setselectedIndex(3)}
            >
              <img src={forwardArrow} alt="servicepage" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid style={{ marginLeft: "2em" }} item container direction="row">
        <Grid className={classes.heading} item container direction="column" md>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Integration
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              The performance of the swift and python vary, swift tends to be
              swift and is faster than python. When a developer is choosing the
              programming language to start with, they should also consider the
              job market and salaries.
            </Typography>
          
            <Typography align="center" variant="body1" paragraph>
              Comparing all this you can choose the best programming language.
            </Typography>
          </Grid>
          <Grid item md>
            <Lottie options={documentsOptions} />
          </Grid>
        </Grid>
        <Grid item container direction="column" md>
          
            
        </Grid>
      </Grid>
      <Grid item container direction={matchesSm ? "row" : "column"} >
          <Grid item container alignItems="center" direction="column" md>
            <Grid item>
                <Typography align="center" variant="h4" gutterBottom >
                   Extend Functionality
                </Typography>
            </Grid>
            <Grid item>
                <img src={swissKnife}/>
            </Grid>
          </Grid>
          <Grid item container alignItems="center" direction="column" md>
            <Grid item>
                <Typography align="center" variant="h4" gutterBottom >
                   Extend Access
                </Typography>
            </Grid>
            <Grid item>
                <img src={access} style={{maxWidth:"28em"}}/>
            </Grid>
          </Grid>
          <Grid item container alignItems="center" direction="column" md>
            <Grid item>
                <Typography align="center" variant="h4" gutterBottom >
                   Increase Engagement
                </Typography>
            </Grid>
            <Grid item>
                <img src={engagement}/>
            </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}
