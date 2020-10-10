import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import Header from "./ui/Header";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={() => (<div>Home</div>)}/>
        <Route  path="/services" component={() => (<div>services </div>)}/>
        <Route  path="/customsoftware" component={() => (<div>customsoftware</div>)}/>
        <Route  path="/mobileapps" component={() => (<div>mobileapps</div>)}/>
        <Route  path="/websites" component={() => (<div>websites</div>)}/>
        <Route  path="/revolution" component={() => (<div>revolution</div>)}/>
        <Route  path="/about" component={() => (<div>about</div>)}/>
        <Route  path="/contact" component={() => (<div>contact</div>)}/>
        <Route  path="/estimate" component={() => (<div>estimate</div>)}/>
      </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
