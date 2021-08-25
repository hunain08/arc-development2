import React,{useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./components/Header";
import { ThemeProvider } from '@material-ui/styles'
import theme from "./components/Ui/Theme";
import Footer from "./components/Footer";
import LandingPage from "./components/LandinPage";
import Services from './components/Services'
import CustomSoftware from "./components/CustomSoftware";
import Mobileapp from "./components/MobileApp";
import Websites from "./components/websitedeve";
import Contactus from "./components/contactus";
function App() {
  const [selectedIndex, setselectedIndex] = useState(0);
  const [value, setvalue] = useState(0);
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Header value={value} setvalue={setvalue} selectedIndex={selectedIndex} setselectedIndex={setselectedIndex} />
        <Switch>
          <Route exact path="/" render={(props)=><LandingPage {...props} setvalue={setvalue} setselectedIndex={setselectedIndex}/>} />
          <Route exact path="/services" render={(props) =><Services {...props} setvalue={setvalue} setselectedIndex={setselectedIndex}/>}/>
          <Route exact path="/revolution" component={() => <div>revolution</div>} />
          <Route exact path="/about" component={() => <div>about-us</div>} />
          <Route exact path="/contact-us" component={() => <div><Contactus/></div>} />
          <Route exact path="/freeestimate" component={() => <div>free estimate</div>} />
          <Route exact path="/software-development" render={(props)=><CustomSoftware {...props} setvalue={setvalue} setselectedIndex={setselectedIndex}/>}/>
          <Route exact path="/mobile-app-development" render={(props)=><Mobileapp {...props} setvalue={setvalue} setselectedIndex={setselectedIndex}/>} />
          <Route exact path="/website-development" render={(props)=><Websites {...props} setvalue={setvalue} setselectedIndex={setselectedIndex}/>}/>

        </Switch>
        <Footer value={value} setvalue={setvalue} selectedIndex={selectedIndex} setselectedIndex={setselectedIndex} />
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
