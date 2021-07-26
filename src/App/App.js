import { CssBaseline } from "@material-ui/core";
import React from "react";
import Menu from "../components/Menu";
import SideMenu from "../components/SideMenu";
import { makeStyles } from "@material-ui/core";
import Employees from "../Employees/Employees";

const UseStyles = makeStyles({
  divv: {
    paddingLeft: "320px",
    width: "100%",
  },
});
function App() {
  const classes = UseStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.divv}>
        <Menu />
        <Employees />
      </div>

      <CssBaseline />
    </>
  );
}

export default App;
