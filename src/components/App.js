import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./ui/Header";
import Footer from "./ui/Footer";
import theme from "./ui/Theme";
import LandingPage from "./LandingPage";

function App() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [value, setValue] = React.useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <LandingPage
                value={value}
                setValue={setValue}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route path="/services" component={() => <div>services </div>} />
          <Route
            path="/customsoftware"
            component={() => <div>customsoftware</div>}
          />
          <Route path="/mobileapps" component={() => <div>mobileapps</div>} />
          <Route path="/websites" component={() => <div>websites</div>} />
          <Route path="/revolution" component={() => <div>revolution</div>} />
          <Route path="/about" component={() => <div>about</div>} />
          <Route path="/contact" component={() => <div>contact</div>} />
          <Route path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
