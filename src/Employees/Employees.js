import React from "react";
import PageHeader from "../components/PageHeader";
import EmployeeForm from "./EmployeeForm";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { makeStyles, Paper } from "@material-ui/core";
const UseStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(4),
    padding: theme.spacing(2),
  },
}));

function Employees() {
  const classes = UseStyles();
  return (
    <>
      <PageHeader
        title="FORM INFORMATION"
        subtitle="FORM DESIGN"
        icon={<AssignmentIndIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
}

export default Employees;
