import React from "react";
import { makeStyles } from "@material-ui/core";
const UseStyles = makeStyles({
  rootMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
});

const SideMenu = () => {
  const classes = UseStyles();
  console.log(classes);
  return <div className={classes.rootMenu}></div>;
};

export default SideMenu;
