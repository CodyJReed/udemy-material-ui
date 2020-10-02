import React from "react";
import { AppBar, Toolbar, useScrollTrigger, Slide } from "@material-ui/core";

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

export default function Header(props) {
  return (
    <HideOnScroll>
      <AppBar position="fixed">
        <Toolbar>Arc Development</Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
