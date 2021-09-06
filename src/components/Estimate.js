import React, { useState } from "react";
import Lottie from "react-lottie";
import { clone, cloneDeep, defaults } from "lodash";
import {
  makeStyles,
  useTheme,
  Grid,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  TextField,
  useMediaQuery,
} from "@material-ui/core";
import software from "./logo/software.svg";
import send from "./logo/send.svg";
import check from "./logo/check.svg";
import mobile from "./logo/mobile.svg";
import website from "./logo/website.svg";
import backArrow from "./logo/backArrow.svg";
import forwardArrow from "./logo/forwardArrow.svg";
import backArrowDisabled from "./logo/backArrowDisabled.svg";
import forwardArrowDisabled from "./logo/forwardArrowDisabled.svg";
import camera from "./logo/camera.svg";
import upload from "./logo/upload.svg";
import person from "./logo/person.svg";
import persons from "./logo/persons.svg";
import people from "./logo/people.svg";
import info from "./logo/info.svg";
import bell from "./logo/bell.svg";
import users from "./logo/users.svg";
import iphone from "./logo/iphone.svg";
import gps from "./logo/gps.svg";
import customized from "./logo/customized.svg";
import data from "./logo/data.svg";
import android from "./logo/android.svg";
import globe from "./logo/globe.svg";
import biometrics from "./logo/biometrics.svg";
import estimateAnimation from "./animation/estimateAnimation/data.json";
const useStyles = makeStyles((theme) => ({
  icon: {
    width: "10em",
    height: "18em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.orange,
    height: 50,
    width: 225,
    fontSize: "1.25rem",
    marginTop: "5em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  SpecialText:{
      fontFamily:"Raleway",
      fontWeight:700,
      fontSize:"1.5em",
      color:theme.palette.common.orange,
  }
}));
const defaultQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "iOS/Android App Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "outlines of phones and tablets",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 0,
      },
    ],
  },
];
const softwareQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    active: false,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "iOS/Android App Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "outlines of phones and tablets",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 0,
      },
    ],
  },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 1000,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: iphone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 1000,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 1000,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 250,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 250,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 250,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 250,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 250,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 250,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 250,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 500,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 1000,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.125,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.25,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    active: false,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "iOS/Android App Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "outlines of phones and tablets",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 0,
      },
    ],
  },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 1000,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 2000,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 2500,
      },
    ],
    active: true,
  },
];
//   const newQuestion = cloneDeep(defaultQuestions);
//   newQuestion[0].options[0].selected = true;
//   console.log(defaultQuestions[0].options[0]);
export default function Estimate() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [questions, setQuestions] = useState(softwareQuestions);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [emailHelper, setEmailHelper] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [total, setTotal] = useState(0);
  const [service, setService] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState("");
  const [category, setCategory] = useState("");
  const [users, setUsers] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    redererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };
  const getTotal = () =>{
      let cost = 0
      const selections = questions.map(question =>question.options.filter(option=>option.selected)
      ).filter(question => question.length>0);
      selections.map(options=> options.map(option => cost += option.cost))
      if(questions.length > 2) {
          const userCost = questions
          .filter(question => question.title ==="How many users do you expects?")
          .map(question=>question.options.filter(option=>option.selected))[0][0].cost;
     cost -=userCost;
     cost *=userCost;

        }
      setTotal(cost);
   //   console.log(selections)
  };
  const getPlatforms = () =>{
      let newPlatforms = []
      if(questions.length > 2 ) {
          questions.filter(question => question.title === "Which Platform do you supported"
          ).map(question => question.options.filter(option => option.selected))
      }
  }
  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };
  const navigationDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === 1) {
      return true;
    } else {
      return false;
    }
  };
  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const newSelected = newQuestions[activeIndex].options[id - 1];
    const previousSelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );
    switch (currentlyActive[0].subtitle) {
      case "Select one":
        if (previousSelected[0]) {
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }
    switch (newSelected.title[0]) {
      case "Custom Software Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title)
        break;
      case "IOS/Android App Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title)

        break;
      case "Website Development":
        setQuestions(websiteQuestions);
        setService(newSelected.title)

        break;
      default:
        setQuestions(newQuestions);
    }
  };
  const navigationDisablednext = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      return true;
    } else {
      return false;
    }
  };
  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid Phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };
  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg>
        <Grid item style={{ marginTop: "2em", marginLeft: "5em" }}>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid
          item
          style={{
            marginRight: "10em",
            maxWidth: "50em",
            marginBottom: "7.5em",
          }}
        >
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        lg
        alignItems="center"
        style={{ marginRight: "2em", marginBottom: "25em" }}
      >
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <React.Fragment>
              <Grid item>
                <Typography
                  variant="h2"
                  align="center"
                  style={{
                    fontWeight: 500,
                    marginTop: "5em",
                    fonstSize: "2.25em",
                    lineHeight: 1.25,
                  }}
                  gutterBottom
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: "2.5em" }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container>
                {question.options.map((option) => (
                  <Grid
                    item
                    container
                    direction="column"
                    md
                    component={Button}
                    onClick={() => handleSelect(option.id)}
                    style={{
                      display: "grid",
                      textTransform: "none",
                      backgroundColor: option.selected
                        ? theme.palette.common.orange
                        : null,
                      borderRadius: 0,
                    }}
                  >
                    <Grid item style={{ maxWidth: "14em" }}>
                      <Typography
                        variant="h6"
                        align="center"
                        style={{ marginBottom: "1em" }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img src={option.icon} className={classes.icon} />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}

        <Grid
          item
          container
          justifyContent="space-between"
          style={{ width: "15em", marginTop: "3em" }}
        >
          <Grid item>
            <IconButton
              disabled={navigationDisabled()}
              onClick={previousQuestion}
            >
              <img src={navigationDisabled() ? backArrowDisabled : backArrow} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              disabled={navigationDisablednext()}
              onClick={nextQuestion}
            >
              <img
                src={
                  navigationDisablednext() ? forwardArrowDisabled : forwardArrow
                }
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            onClick={() => {setDialogOpen(true); getTotal(1.5)}}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="h2" align="center">
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid container>
            <Grid item container direction="column">
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
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
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                We can create this digital solution for an estimate<span 
                className={classes.SpecialText}>${total}</span>
              </Typography>
              <Typography variant="body1" paragraph>
                Fill out your name, phone and email , place your request, and
                we'll get to you with details moving forward and a final price
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction="column">
              <Grid item>
                  <Grid container direction="column">
                      <Grid item container alignItems="center">
                          <Grid item>
                              <img src={check}/>
                          </Grid>
                          <Grid><Typography variant="body1">You want {service}</Typography></Grid>
                          </Grid>
                          <Grid item container alignItems="center">
                          <Grid item>
                              <img src={check}/>
                          </Grid>
                          <Grid><Typography variant="body1">Second options check</Typography></Grid>
                          </Grid>
                          <Grid item container alignItems="center">
                          <Grid item>
                              <img src={check}/>
                          </Grid>
                          <Grid><Typography variant="body1">Third options check</Typography></Grid>
                          </Grid>
                      </Grid>
                      <Grid item>
                          <Button variant="contained" className={classes.estimateButton}>
                            Place Request
                            <img src={send} style={{marginLeft:"0.5em"}}/>
                              </Button>
                              </Grid>
                  </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
