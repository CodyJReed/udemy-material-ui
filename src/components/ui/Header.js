import React from "react";
import { AppBar, Toolbar, useScrollTrigger, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img src={logo} className={classes.logo} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
