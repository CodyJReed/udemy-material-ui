import React from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  Tabs,
  Tab,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {Link} from 'react-router-dom'
import logo from "../../assets/logo.svg";

function HideOnScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// API Hook for custom 'inline' style use
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    margin: "0 25px 0 50px",
    height: "45px",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (e, value) => setValue(value);

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img src={logo} className={classes.logo} />
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab className={classes.tab} component={Link} to="/" label="Home" />
              <Tab className={classes.tab} component={Link} to="/services" label="Services" />
              <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
              <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
              <Tab className={classes.tab} component={Link} to="contact" label="Contact Us" />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
