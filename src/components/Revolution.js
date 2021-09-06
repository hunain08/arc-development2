import React from "react";
import {
  makeStyles,
  useTheme,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import vision from "./logo/vision.svg";
import consulation from "./logo/consultationIcon.svg";
import mockup from "./logo/mockupIcon.svg";
import review from "./logo/reviewIcon.svg";
import design from "./logo/designIcon.svg";
import build from "./logo/buildIcon.svg";
import launch from "./logo/launchIcon.svg";
import maintain from "./logo/maintainIcon.svg";
import iterate from "./logo/iterateIcon.svg";
import technologyAnimation from "./animation/technologyAnimation/data.json";
import Lottie from "react-lottie";
const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));
export default function Revolution() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesmd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    redererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          align={matchesmd ? "center" : undefined}
          variant="h2"
          style={{ fontFamily: "Pacifico" }}
        >
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesmd ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: matchesmd ? 0 : "5em" }}
      >
        <Grid item lg>
          <img
            src={vision}
            style={{
              maxWidth: matchesSM ? 400 : "40em",
              marginRight: matchesmd ? 0 : "5em",
              marginBottom: matchesmd ? "5em" : 0,
            }}
          />
        </Grid>
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              align={matchesmd ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesmd ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Computer vision, however, is more than machine learning applied.
              It involves tasks as 3D scene modeling, multi-view camera
              geometry, structure-from-motion, stereo correspondence, point
              cloud processing, motion estimation and more
            </Typography>
            <Typography
              align={matchesmd ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Computer vision, however, is more than machine learning applied.
              It involves tasks as 3D scene modeling, multi-view camera
              geometry, structure-from-motion, stereo correspondence, point
              cloud processing, motion estimation and more
            </Typography>
            <Typography
              align={matchesmd ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Computer vision, however, is more than machine learning applied.
              It involves tasks as 3D scene modeling, multi-view camera
              geometry, structure-from-motion, stereo correspondence, point
              cloud processing, motion estimation and more
            </Typography>
            <Typography
              align={matchesmd ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Computer vision, however, is more than machine learning applied.
              It involves tasks as 3D scene modeling, multi-view camera
              geometry, structure-from-motion, stereo correspondence, point
              cloud processing, motion estimation and more
            </Typography>
            <Typography
              align={matchesmd ? "center" : "right"}
              variant="body1"
              paragraph
            >
              Computer vision, however, is more than machine learning applied.
              It involves tasks as 3D scene modeling, multi-view camera
              geometry, structure-from-motion, stereo correspondence, point
              cloud processing, motion estimation and more
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesmd ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              align={matchesmd ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesmd ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Computer vision, however, is more than machine learning applied.
              It involves tasks as 3D scene modeling, multi-view camera
              geometry, structure-from-motion, stereo correspondence, point
              cloud processing, motion estimation and more
            </Typography>
            <Typography
              align={matchesmd ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Computer vision, however, is more than machine learning applied.
              It involves tasks as 3D scene modeling, multi-view camera
              geometry, structure-from-motion, stereo correspondence, point
              cloud processing, motion estimation and more
            </Typography>
            <Typography
              align={matchesmd ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Computer vision, however, is more than machine learning applied.
              It involves tasks as 3D scene modeling, multi-view camera
              geometry, structure-from-motion, stereo correspondence, point
              cloud processing, motion estimation and more
            </Typography>
            <Typography
              align={matchesmd ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Computer vision, however, is more than machine learning applied.
              It involves tasks as 3D scene modeling, multi-view camera
              geometry, structure-from-motion, stereo correspondence, point
              cloud processing, motion estimation and more
            </Typography>
            <Typography
              align={matchesmd ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Computer vision, however, is more than machine learning applied.
              It involves tasks as 3D scene modeling, multi-view camera
              geometry, structure-from-motion, stereo correspondence, point
              cloud processing, motion estimation and more
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={matchesmd ? "center" : "flex-end"}
          item
          lg
        >
          <Lottie options={defaultOptions} style={{ maxWidth: "40em" }} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction="row"
        justifyContent="center"
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesmd ? "column" : "row"}
        style={{ backgroundColor: "#B3B3B3", height: "90em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          alignItems={matchesmd ? "center" : undefined}
          direction="column"
          lg
        >
          <Grid item>
            <Typography
              align={matchesmd ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              consultation{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesmd ? "center" : undefined}
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              A consulting firm provides feedback and actionable strategies to
              companies to improve their efficiency or effectiveness in a
              specific area, such as advertising and technology. Company
              executives are often the ones who hire consultants to give
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesmd ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              irst-year consultants with a Bachelor's degree at most major firms
              (often referred to as "associate consultants") can typically
              expect to earn between $60,000 and $90,000
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesmd ? "center" : undefined}
              paragraph
            >
              A consulting firm provides feedback and actionable strategies to
              companies to improve their efficiency or effectiveness in a
              specific area, such as advertising and technology. Company
              executives are often the ones who hire consultants to give
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          alignItems={matchesmd ? "center" : undefined}
          lg
          style={{ alignSelf: "center" }}
        >
          <img src={consulation} style={{ maxWidth: matchesmd ? 700 : 1000 }} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesmd ? "column" : "row"}
        style={{ backgroundColor: "#FF7373", height: "90em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              align={matchesmd ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Mock up{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesmd ? "center" : undefined}
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              A consulting firm provides feedback and actionable strategies to
              companies to improve their efficiency or effectiveness in a
              specific area, such as advertising and technology. Company
              executives are often the ones who hire consultants to give
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesmd ? "center" : undefined}
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              irst-year consultants with a Bachelor's degree at most major firms
              (often referred to as "associate consultants") can typically
              expect to earn between $60,000 and $90,000
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesmd ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              A consulting firm provides feedback and actionable strategies to
              companies to improve their efficiency or effectiveness in a
              specific area, such as advertising and technology. Company
              executives are often the ones who hire consultants to give
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          alignItems={matchesmd ? "center" : undefined}
          lg
          style={{ alignSelf: "center" }}
        >
          <img src={mockup} style={{ maxWidth: matchesmd ? 700 : 1000 }} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesmd ? "column" : "row"}
        style={{ backgroundColor: "#39B54A", height: "90em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              align={matchesmd ? "center" : undefined}
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Review{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesmd ? "center" : undefined}
              paragraph
            >
              A consulting firm provides feedback and actionable strategies to
              companies to improve their efficiency or effectiveness in a
              specific area, such as advertising and technology. Company
              executives are often the ones who hire consultants to give
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesmd ? "center" : undefined}
              paragraph
            >
              irst-year consultants with a Bachelor's degree at most major firms
              (often referred to as "associate consultants") can typically
              expect to earn between $60,000 and $90,000
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesmd ? "center" : undefined}
              paragraph
            >
              A consulting firm provides feedback and actionable strategies to
              companies to improve their efficiency or effectiveness in a
              specific area, such as advertising and technology. Company
              executives are often the ones who hire consultants to give
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          lg
          style={{ alignSelf: "center" }}
          alignItems={matchesmd ? "center" : undefined}
        >
          <img src={review} style={{ maxWidth: matchesmd ? 700 : 1000 }} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesmd ? "column" : "row"}
        style={{ backgroundColor: "#A67C52", height: "90em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              align={matchesmd ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Design{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesmd ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              A consulting firm provides feedback and actionable strategies to
              companies to improve their efficiency or effectiveness in a
              specific area, such as advertising and technology. Company
              executives are often the ones who hire consultants to give
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesmd ? "center" : undefined}
              paragraph
            >
              irst-year consultants with a Bachelor's degree at most major firms
              (often referred to as "associate consultants") can typically
              expect to earn between $60,000 and $90,000
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesmd ? "center" : undefined}
              paragraph
            >
              A consulting firm provides feedback and actionable strategies to
              companies to improve their efficiency or effectiveness in a
              specific area, such as advertising and technology. Company
              executives are often the ones who hire consultants to give
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          lg
          style={{ alignSelf: "center" }}
          alignItems={matchesmd ? "center" : undefined}
        >
          <img src={design} style={{ maxWidth: matchesmd ? 700 : 1000 }} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesmd ? "column" : "row"}
        style={{ backgroundColor: "#39B54A", height: "90em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              align={matchesmd ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Review{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesmd ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              A consulting firm provides feedback and actionable strategies to
              companies to improve their efficiency or effectiveness in a
              specific area, such as advertising and technology. Company
              executives are often the ones who hire consultants to give
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesmd ? "center" : undefined}
              paragraph
            >
              irst-year consultants with a Bachelor's degree at most major firms
              (often referred to as "associate consultants") can typically
              expect to earn between $60,000 and $90,000
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesmd ? "center" : undefined}
              paragraph
            >
              A consulting firm provides feedback and actionable strategies to
              companies to improve their efficiency or effectiveness in a
              specific area, such as advertising and technology. Company
              executives are often the ones who hire consultants to give
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          lg
          style={{ alignSelf: "center" }}
          alignItems={matchesmd ? "center" : undefined}
        >
          <img src={review} style={{ maxWidth: matchesmd ? 700 : 1000 }} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesmd ? "column" : "row"}
        style={{ backgroundColor: "#FBB03B", height: "90em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesmd ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesmd ? "center" : undefined}
              style={{ color: "#000", marginTop: "5em" }}
            >
              Build{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesmd ? "center" : undefined}
              paragraph
            >
              A consulting firm provides feedback and actionable strategies to
              companies to improve their efficiency or effectiveness in a
              specific area, such as advertising and technology. Company
              executives are often the ones who hire consultants to give
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesmd ? "center" : undefined}
              paragraph
            >
              irst-year consultants with a Bachelor's degree at most major firms
              (often referred to as "associate consultants") can typically
              expect to earn between $60,000 and $90,000
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesmd ? "center" : undefined}
              paragraph
            >
              A consulting firm provides feedback and actionable strategies to
              companies to improve their efficiency or effectiveness in a
              specific area, such as advertising and technology. Company
              executives are often the ones who hire consultants to give
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          lg
          style={{ alignSelf: "center" }}
          alignItems={matchesmd ? "center" : undefined}
        >
          <img src={build} style={{ maxWidth: matchesmd ? 700 : 1000 }} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesmd ? "column" : "row"}
        style={{ backgroundColor: "#C1272D", height: "90em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesmd ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesmd ? "center" : undefined}
              style={{ color: "#000", marginTop: "5em" }}
            >
              Launch{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesmd ? "center" : undefined}
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              A consulting firm provides feedback and actionable strategies to
              companies to improve their efficiency or effectiveness in a
              specific area, such as advertising and technology. Company
              executives are often the ones who hire consultants to give
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesmd ? "center" : undefined}
              paragraph
            >
              irst-year consultants with a Bachelor's degree at most major firms
              (often referred to as "associate consultants") can typically
              expect to earn between $60,000 and $90,000
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesmd ? "center" : undefined}
              paragraph
            >
              A consulting firm provides feedback and actionable strategies to
              companies to improve their efficiency or effectiveness in a
              specific area, such as advertising and technology. Company
              executives are often the ones who hire consultants to give
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          lg
          style={{ alignSelf: "center" }}
          alignItems={matchesmd ? "center" : undefined}
        >
          <img src={launch} style={{ maxWidth: matchesmd ? 700 : 1000 }} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesmd ? "column" : "row"}
        style={{ backgroundColor: "#8E45CE", height: "90em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesmd ? "center" : undefined}
              style={{ color: "#000", marginTop: "5em" }}
            >
              Maintain{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesmd ? "center" : undefined}
              paragraph
            >
              A consulting firm provides feedback and actionable strategies to
              companies to improve their efficiency or effectiveness in a
              specific area, such as advertising and technology. Company
              executives are often the ones who hire consultants to give
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesmd ? "center" : undefined}
              paragraph
            >
              irst-year consultants with a Bachelor's degree at most major firms
              (often referred to as "associate consultants") can typically
              expect to earn between $60,000 and $90,000
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesmd ? "center" : undefined}
              paragraph
            >
              A consulting firm provides feedback and actionable strategies to
              companies to improve their efficiency or effectiveness in a
              specific area, such as advertising and technology. Company
              executives are often the ones who hire consultants to give
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          lg
          style={{ alignSelf: "center" }}
          alignItems={matchesmd ? "center" : undefined}
        >
          <img src={maintain} style={{ maxWidth: matchesmd ? 700 : 1000 }} />
        </Grid>
      </Grid>
    </Grid>
  );
}
