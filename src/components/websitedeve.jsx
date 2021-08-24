import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  useTheme,
  Grid,
  Hidden,
  IconButton,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import backArrow from "./logo/backArrow.svg";
import forwardArrow from "./logo/forwardArrow.svg";
import analytics from "./logo/analytics.svg";
import seo from "./logo/seo.svg";
import outreach from "./logo/outreach.svg";
import ecommerce from "./logo/ecommerce.svg";
const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  ArrowButton: {
    marginTop: "0.5em",
  },
  paragraph:{
      maxWidth:"30em"
  }
}));
export default function Websites(props) {
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
              to="/mobile-app-development"
              style={{ backgroundColor: "transparent" }}
              onClick={() => props.setselectedIndex(2)}
            >
              <img src={backArrow} alt="servicepage" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              {" "}
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Image result for website development Web development is the work
              involved in developing a Web site for the Internet (World Wide
              Web) or an intranet (a private network)
            </Typography>
            <Typography variant="body1" paragraph>
              Custom software development is the process of designing, creating,
              deploying and maintaining software for a specific set of users,
              functions or organization.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.ArrowButton}>
            <IconButton
              component={Link}
              to="/services"
              style={{ backgroundColor: "transparent" }}
              onClick={() => props.setselectedIndex(0)}
            >
              <img src={forwardArrow} alt="servicepage" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid item container alignItems="center" direction="row">
        <Grid item>
          <Grid item container direction="column">
              <Grid item>
                  <Typography variant="h4" style={{marginLeft:"5em"}} className={classes.heading} gutterBottom >Analytics</Typography>
              </Grid>
              <Grid item>
                  <img style={{marginLeft:"5em"}} src={analytics}/>
              </Grid>
          </Grid>
        </Grid>
        <Grid item>
            <Typography variant="body1" className={classes.paragraph}  paragraph>
            knowledge itself is power", he most likely wanted to transmit the idea that having and sharing knowledge is the cornerstone of reputation and influence, 
            and therefore power; all achievements emanate from this.
            </Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center" justifyContent="flex-end" direction="row">
        <Grid item>
          <Grid item container direction="column">
              <Grid item>
                  <Typography variant="h4" style={{marginLeft:"5em"}} 
                  className={classes.heading} gutterBottom >E-commerce</Typography>
              </Grid>
              <Grid item>
                  <img style={{marginLeft:"5em"}} src={ecommerce}/>
              </Grid>
          </Grid>
        </Grid>
        <Grid item style={{marginLeft:"1em"}}>
            <Typography variant="body1" className={classes.paragraph}  paragraph>
            
E-commerce is the buying and selling of good or services via the internet, and the transfer of money and data to complete the sales. 
It's also known as electronic commerce or internet commerce
            </Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center" direction="row">
        <Grid item>
          <Grid item container direction="column">
              <Grid item>
                  <Typography variant="h4" style={{marginLeft:"5em"}} className={classes.heading} gutterBottom >Outreach</Typography>
              </Grid>
              <Grid item>
                  <img style={{marginLeft:"5em"}} src={outreach}/>
              </Grid>
          </Grid>
        </Grid>
        <Grid item style={{marginLeft:"1em"}}>
            <Typography variant="body1" className={classes.paragraph}  paragraph>
            A web design proposal is a document that will help you sell yourself and your work to clients. ... A proposal is a common request from companies and individuals looking for website design services. A web design proposal isn't just a breakdown of costs 
            or estimate of work (although some of that information is included).
            </Typography>
        </Grid>
      </Grid>
      <Grid item container justifyContent="flex-end" alignItems="center" direction="row">
        <Grid item>
          <Grid item container direction="column">
              <Grid item>
                  <Typography variant="h4" style={{marginLeft:"5em"}} className={classes.heading} gutterBottom >Search Engine <br/> Optimization</Typography>
              </Grid>
              <Grid item>
                  <img style={{marginLeft:"5em"}} src={seo}/>
              </Grid>
          </Grid>
        </Grid>
        <Grid item style={{marginRight:"1em"}}>
            <Typography variant="body1" className={classes.paragraph}  paragraph>
            A web design proposal is a document that will help you sell yourself and your work to clients.A proposal is a common request from companies and individuals looking for website design services. A web design proposal isn't just a breakdown of costs 
            or estimate of work (although some of that information is included).
            </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
