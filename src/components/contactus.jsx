import React, { useState } from "react";
import { Link } from "react-router-dom";
import background from "./logo/background.jpg";
import mobilebackground from "./logo/mobilebackground.jpg";
import ButtonArrow from "./Ui/ButtonArrow";
import {
  Grid,
  Typography,
  Button,
  TextField,
  makeStyles,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogContent,CircularProgress 
} from "@material-ui/core";
import phone2 from "./logo/phone.svg";
import email2 from "./logo/email.svg";
import airplane from "./logo/send.svg";

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
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]:{
        backgroundImage:`url(${mobilebackground})`
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]:{
        height:25,
        width:225
    }
  },
}));
export default function Contactus() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [emailHelper, setEmailHelper] = useState("")
  const [phoneHelper, setPhoneHelper] = useState("")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false)
  const onChange = event =>{
      let valid;
      switch (event.target.id) {
          case "email":
              setEmail(event.target.value)
              valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
              if(!valid){
                  setEmailHelper("Invalid Email");
              }
              else{
                  setEmailHelper("");
              }
              break;
              case "phone":
                  setPhone(event.target.value)
                  valid =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
                  if(!valid){
                    setPhoneHelper("Invalid Phone");
                }
                else{
                    setPhoneHelper("");
                }
                break;
              default:
                  break;
      }
  } 
  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        lg={3}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2">Contact Us</Typography>
              <Typography
                variant="body1"
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting
              </Typography>
            </Grid>

            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img style={{ marginRight: "0.5em" }} src={phone2} />
              </Grid>

              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue }}
                >
                  <a href="tel:5555555555" style={{textDecoration:"none",color:"inherit"}}>(555) 555-5555</a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img src={email2} style={{ marginRight: "0.5em" }} />
              </Grid>

              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1em" }}
                >
                 <a href="mailto:hunain@gmail.com" style={{textDecoration:"none",color:"inherit"}}></a> hunain@gmail.com
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" style={{maxWidth:"20em"}}>
              <Grid item style={{marginBottom:"0.5em"}}>
                <TextField
                  label="Name"
                  id="name"
                  helperText="Please Enter Text"
                  fullWidth
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Email"
                  id="email"
                  helperText={emailHelper}
                  error={emailHelper.length !== 0}
                  value={email}
                  onChange={onChange}
                  
                />
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                label="Phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                id="phone"
                value={phone}
                onChange={onChange}
                
              />
            </Grid>

            <Grid item style={{ maxWidth: "20em" }}>
              <TextField  style={{marginBottom:"2em"}}
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                rows={10}
                multiline
                value={message}
                id="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ margiTop: "2em " }}
            >
              <Button disabled={name.length === 0 || message.length === 0 || phoneHelper.length !==0
            || emailHelper.length !== 0} variant="contained" justifyContent="center" 
            className={classes.sendButton}
            onClick={()=> setOpen(true)}
            >
                Send Message
                <img src={airplane} style={{ marginLeft: "1em" }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        fullScreen={matchesXS}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS ? 0: matchesSM ? 0 : matchesMD ? "15em" : "25em",
            paddingRight: matchesXS ? 0 : matchesSM ? 0 : matchesMD ? "15em" : "25em"
          }
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                id="name"
                fullWidth
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id="email"
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Phone"
                helperText={phoneHelper}
                error={phoneHelper.length !== 0}
                id="phone"
                fullWidth
                value={phone}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
            <TextField
              InputProps={{ disableUnderline: true }}
              value={message}
              className={classes.message}
              multiline
              fullWidth
              rows={10}
              id="message"
              onChange={event => setMessage(event.target.value)}
            />
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "5em" }}
            alignItems="center"
          >
            <Grid item>
              <Button
                style={{ fontWeight: 300 }} color="primary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                variant="contained"
                className={classes.sendButton}
              >
                  Confirm Message
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        direction={matchesMD ? "column":"row"}
        className={classes.revolutionBackground}
        alignItems="center"
        justifyContent={matchesMD ? "center" :undefined}
        lg={9}
        xl={8}
      >
        <Grid
          container
          alignItems="center"
          justifyContent={matchesSM ? "center" : "space-between"}
          className={classes.background}
          direction={matchesSM ? "column" : "row"}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : "inherit",
            }}
          >
            <Grid container direction="column">
              <Grid item>
                <Typography align={matchesMD ? "center": undefined} variant="h2">
                  {" "}
                  Simple Software
                  <br />
                  Revolutionary Results.
                </Typography>
                <Typography align={matchesMD ? "center": undefined}  variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                  Take advantage of 21st century
                </Typography>
                <Grid
                  container
                  justifyContent={matchesSM ? "center" : undefined}
                  item
                >
                  <Button
                    component={Link}
                    to="/freeestimate"
                    className={classes.learnButton}
                    variant="outlined"
                  >
                    <span style={{ marginRight: 5 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    ></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button variant="contained" className={classes.estimateButton}>
              Free estimate
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
