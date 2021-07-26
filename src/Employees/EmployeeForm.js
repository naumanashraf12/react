import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

const UseStyles = makeStyles((theme) => ({
  rootMenu: {
    "& .MuiFormControl-root ": {
      width: "90%",
      margin: theme.spacing(1),
    },
  },
}));
const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

function EmployeeForm() {
  const formFill = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values.fullName);
  };
  const [values, setValues] = useState(initialValues);

  const classes = UseStyles();
  return (
    <form className={classes.rootMenu}>
      <Grid container>
        <Grid className={classes.rootMenu} item sm={6}>
          <TextField
            size="small"
            variant="outlined"
            label="Full name"
            name="fullName"
            value={values.fullName}
            onChange={formFill}
          />
          <TextField
            size="small"
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={formFill}
          />
        </Grid>
        <Grid item sm={6}>
          <FormControl color="secondary" autocomplete="off">
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={values.gender}
              onChange={formFill}
            >
              <FormControlLabel value="male" control={<Radio />} label="male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="female"
              />
              <FormControlLabel
                value="others"
                control={<Radio />}
                label="others"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
}

export default EmployeeForm;
