import React, { useEffect, useState } from "react";
import { Paper, Typography, TextField, Grid } from "@mui/material";
import * as validator from "../../../utils/validator";
import { useDispatch, useSelector } from "react-redux";
import { changeNavUser } from "../../ResponsiveAppBar/appbarSlice";
import Dialogue from "../../Dialogue/Dialogue";
import { RegisterUser } from "../userSlice";
import LoadingButton from "@mui/lab/LoadingButton";
import InputAdornment from "@mui/material/InputAdornment";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import BadgeIcon from "@mui/icons-material/Badge";

const Register = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [open, setOpen] = React.useState(false);

  const [DialogMessage, setDialogueMessage] = useState("");
  const [DialogTitle, setDialogTitle] = useState("");

  const setDialogueOpen = (title, message) => {
    setDialogTitle(title);
    setDialogueMessage(message);
    setOpen(true);
  };

  const clearform = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    // console.log(manager);
    dispatch(changeNavUser("register"));
  }, [dispatch]);

  const validate = () => {
    let validateArray = {};
    validateArray.email = validator.isValidEmail(email);
    validateArray.password = validator.isValidActualPassword(password);
    validateArray.firstName = validator.isValidName(firstName);
    validateArray.lastName = validator.isValidName(lastName);

    setErrors({
      ...validateArray,
    });
    //RETURNS TRUE IF NO ERRORS
    return Object.values(validateArray).every((x) => x === "");
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      try {
        const result = await dispatch(RegisterUser(userDetails)).unwrap();
        setDialogueOpen(
          "Success",
          "Registration Successfull Navigate to Login Tab"
        );
        clearform();
      } catch (e) {
        setDialogueOpen("Error", "Failed To Register!");
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* CARD CONTAINER */}
      <Grid
        container
        sx={{ width: "70%", justifyContent: "center", marginTop: "4rem" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper elevation={24} sx={{ padding: "2rem", borderRadius: "25px" }}>
            <Typography
              variant="h6"
              fontSize="50px"
              // color="primary"
              sx={{
                fontFamily: "Poppins",
                float: "left",
                fontWeight: "bolder",
              }}
            >
              Register
            </Typography>

            <br />
            <form>
              {/* FORM CONTAINER */}
              <Grid container spacing="1rem" sx={{ alignItems: "center" }}>
                {/* FIRSTNAME FIELD */}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <div className="input-hover">
                    <TextField
                      fullWidth
                      id="outlined-basic1"
                      label="First Name"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <BadgeIcon />
                          </InputAdornment>
                        ),
                      }}
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      helperText=" "
                      {...(errors.firstName && {
                        error: true,
                        helperText: errors.firstName,
                      })}
                    />
                  </div>
                </Grid>
                {/* LASTNAME FIELD */}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <div className="input-hover">
                    <TextField
                      helperText=" "
                      fullWidth
                      id="outlined-basic2"
                      label="Last Name"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <BadgeIcon />
                          </InputAdornment>
                        ),
                      }}
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      {...(errors.lastName && {
                        error: true,
                        helperText: errors.lastName,
                      })}
                    />
                  </div>
                </Grid>

                {/* EMAIL FIELD */}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <div className="input-hover">
                    <TextField
                      helperText=" "
                      fullWidth
                      id="outlined-basic3"
                      label="Email"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailOutlineRoundedIcon />
                          </InputAdornment>
                        ),
                      }}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      {...(errors.email && {
                        error: true,
                        helperText: errors.email,
                      })}
                    />
                  </div>
                </Grid>

                {/* PASSWORD FIELD */}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <div className="input-hover">
                    <TextField
                      helperText=" "
                      fullWidth
                      // multiline
                      id="outlined-basic4"
                      label="Password"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PasswordRoundedIcon />
                          </InputAdornment>
                        ),
                      }}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="password"
                      // required
                      {...(errors.password && {
                        error: true,
                        helperText: errors.password,
                      })}
                    />
                  </div>
                </Grid>
              </Grid>
              <div>
                <LoadingButton
                  loading={user.registerloading}
                  loadingPosition="start"
                  variant="contained"
                  onClick={handleOnSubmit}
                  color="success"
                  style={{
                    marginTop: "1rem",
                    width: "50%",
                    // backgroundColor: "black",
                    textTransform: "none",
                    fontSize: "large",
                  }}
                >
                  Submit
                </LoadingButton>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Dialogue
        title={DialogTitle}
        message={DialogMessage}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default Register;
