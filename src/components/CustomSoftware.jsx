import React from "react";
import Lottie from "react-lottie";
import documentsAnimation from "./animation/documentsAnimation/data";
import scaleAnimation from "./animation/scaleAnimation/data";
import AutomationAnimation from "./animation/automationAnimation/data";
import UxAnimation from "./animation/uxAnimation/data";

import { Link } from "react-router-dom";
import {
  makeStyles,
  Grid,
  IconButton,
  Typography,
  Hidden,
  useMediaQuery,
} from "@material-ui/core";
import backArrow from "./logo/backArrow.svg";
import forwardArrow from "./logo/forwardArrow.svg";
import bulb from "./logo/bulb.svg";
import cash from "./logo/cash.svg";
import roots from "./logo/root.svg";
import stopwatch from "./logo/stopwatch.svg";
import { useTheme } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  ArrowButton: {
    marginTop: "0.5em",
  },
  background: {
    backgroundColor: "transparent",
  },
  mainContainer: {
    padding: "2em 5em 10em 5em",
  },
  itemContainer: {
    maxWidth: "40em",
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
const automationOptions = {
  loop: true,
  autoplay: true,
  animationData: AutomationAnimation,
  redererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const uxAnimation = {
  loop: true,
  autoplay: true,
  animationData: UxAnimation,
  redererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const scaleOptions = {
  loop: true,
  autoplay: true,
  animationData: scaleAnimation,
  redererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function CustomSoftware(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container className={classes.mainContainer} direction="column">
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
              to="/services"
              style={{ backgroundColor: "transparent" }}
              onClick={() => props.setselectedIndex(0)}
            >
              <img src={backArrow} alt="servicepage" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              {" "}
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Whether we are creating old software with new solution Arc
              development is here to here your business tackle technology
            </Typography>
            <Typography variant="body1" paragraph>
              Custom software development is the process of designing, creating,
              deploying and maintaining software for a specific set of users,
              functions or organizations. ... Custom software, on the other
              hand, is designed for a specific set of needs, such as: a field
              service equipment maintenance program for a manufacturer or.
            </Typography>
            <Typography variant="body1" paragraph>
              Customised software (also known as bespoke software or tailor-made
              software) is software that is specially developed for some
              specific organization or other user.
            </Typography>
            <Typography variant="body1" paragraph>
              System software is software designed to provide a platform for
              other software. Examples of system software include operating
              systems like macOS, Linux, Android and Microsoft Windows,
              computational science software, game engines, search engines,
              industrial automation, and software as a service applications.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.ArrowButton}>
            <IconButton
              component={Link}
              to="/mobile-app-development"
              style={{ backgroundColor: "transparent" }}
              onClick={() => props.setselectedIndex(2)}
            >
              <img src={forwardArrow} alt="servicepage" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ margin: "15em" }}
      >
        <Grid item container direction="column" md style={{ maxWidth: "48em" }}>
          <Grid item>
            <Typography variant="h4">SaveEnergy</Typography>
          </Grid>
          <Grid item>
            <img src={bulb} />
          </Grid>
        </Grid>

        <Grid
          item
          container
          style={{ maxWidth: "40em", margin: matchesMD ? "10em 0 10em 0" : 0 }}
          md
          direction="column"
          md
          style={{ maxWidth: "48em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} />
          </Grid>
        </Grid>
        <Grid item container direction="column" md style={{ maxWidth: "48em" }}>
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justifyContent="space-around"
      >
        <Grid item container className={classes.itemContainer}>
          <Grid
            item
            container
            direction="column"
            style={{ marginBottom: matchesMD ? "15em" : 0 }}
            md
          >
            <Grid item>
              <Typography align={matchesSm ? "center" : undefined} variant="h4">Digital Document and Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSm ? "center" : undefined}>
                Reduce Error ,code and Waste
              </Typography>
              <Typography variant="body1" paragraph align={matchesSm ? "center" : undefined}>
                A digital document is a readable document that is paperless in
                its original form. An example of this is an invoice that is
                received as a PDF via email. As either the sender or the
                receiver, you can easily interpret the data included in the
                document
              </Typography>
              <Typography variant="body1" paragraph align={matchesSm ? "center" : undefined}>
                A digital copy is a commercially distributed computer file
                containing a media product such as a film or music album. ...
                "Digital copy" is also commonly referred to as "Digital HD"
                (where it is referencing a high-definition or UHD digital copy).
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 325, maxWidth: 275, minHeight: 275 }}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer}>
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 325, maxWidth: 275, minHeight: 275 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesSm ? "center" : "right" }variant="h4">
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography  align={matchesSm ? "center" : "right" } variant="body1" paragraph>
                A digital document is a readable document that is paperless in
                its original form. An example of this is an invoice that is
                received as a PDF via email. As either the sender or the
                receiver, you can easily interpret the data included in the
                document
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row" style={{ margin: "20em 0 20em 0" }}>
        <Grid item container direction="column" alignItems="center">
          <img src={roots} height="450em" width="450em" />
        </Grid>
        <Grid item>
          <Typography variant="h4" gutterBottom align="center" gutterBottom>
            Root-Cause Analysis
          </Typography>
          <Typography  align={matchesSm ? "center" : "center" } paragraph variant="body1">
            Looking beyond superficial cause and effect, RCA can show where
            processes or systems failed or caused an issue in the first place.
          </Typography>
          <Typography align="center" paragraph variant="body1">
            Looking beyond superficial cause and effect, RCA can show where
            processes or systems failed or caused an issue in the first
            place.where processes or systems failed or caused an issue in the
            first place.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent="space-around"
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Automation</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Reduce Error ,code and Waste
              </Typography>
              <Typography variant="body1" paragraph>
                A digital document is a readable document that is paperless in
                its original form. An example of this is an invoice that is
                received as a PDF via email. As either the sender or the
                receiver, you can easily interpret the data included in the
                document
              </Typography>
              <Typography variant="body1" paragraph>
                A digital copy is a commercially distributed computer file
                containing a media product such as a film or music album. ...
                "Digital copy" is also commonly referred to as "Digital HD"
                (where it is referencing a high-definition or UHD digital copy).
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 325, maxWidth: 275, minHeight: 275 }}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer}>
          <Grid item md>
            <Lottie
              options={uxAnimation}
              style={{ maxHeight: 325, maxWidth: 275, minHeight: 275 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align="right" variant="h4">
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="right" variant="body1" paragraph>
                A digital document is a readable document that is paperless in
                its original form. An example of this is an invoice that is
                received as a PDF via email. As either the sender or the
                receiver, you can easily interpret the data included in the
                document
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
