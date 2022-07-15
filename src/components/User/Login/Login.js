import React, { useEffect, useState } from "react";
import { Paper, Typography, TextField, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as validator from "../../../utils/validator";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import Dialogue from "../../Dialogue/Dialogue";
import InputAdornment from "@mui/material/InputAdornment";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

import { changeNavUser } from "../../ResponsiveAppBar/appbarSlice";
import { LoginUser } from "../userSlice";
import LoadingButton from "@mui/lab/LoadingButton";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

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

  useEffect(() => {
    dispatch(changeNavUser("login"));
  }, [user, dispatch, navigate]);

  const validate = () => {
    let validateArray = {};
    validateArray.email = validator.isValidEmail(email);
    validateArray.password = validator.isValidPassword(password);

    setErrors({
      ...validateArray,
    });
    //RETURNS TRUE IF NO ERRORS
    return Object.values(validateArray).every((x) => x === "");
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const loginDetails = {
        email: email,
        password: password,
      };
      try {
        const originalPromiseResult = await dispatch(
          LoginUser(loginDetails)
        ).unwrap();
        // console.log("originalPromiseResult", originalPromiseResult);
        setDialogueOpen("Success", "Login Successfull");
        navigate("/characters", { replace: true });
      } catch (rejectedValueOrSerializedError) {
        // console.log("Error", rejectedValueOrSerializedError);
        setDialogueOpen("Error", rejectedValueOrSerializedError.message);
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
        sx={{ width: "24rem", justifyContent: "center", marginTop: "10rem" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper elevation={24} sx={{ padding: "2rem", borderRadius: "25px" }}>
            <Typography
              variant="h6"
              fontSize="50px"
              color="success"
              sx={{
                fontFamily: "Poppins",
                float: "left",
                fontWeight: "bolder",
              }}
            >
              Login
            </Typography>

            <br />
            <form onSubmit={handleOnSubmit}>
              {/* FORM CONTAINER */}
              <Grid container spacing="1rem" sx={{ alignItems: "center" }}>
                {/* EMAIL FIELD */}
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <div className="input-hover">
                    <TextField
                      fullWidth
                      id="outlined-basic1"
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
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <div className="input-hover">
                    <TextField
                      fullWidth
                      // multiline
                      id="outlined-basic2"
                      label="Password"
                      variant="outlined"
                      value={password}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PasswordRoundedIcon />
                          </InputAdornment>
                        ),
                      }}
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
                  loading={user.loading}
                  loadingPosition="start"
                  variant="contained"
                  onClick={handleOnSubmit}
                  // color="success"
                  style={{
                    marginTop: "1rem",
                    width: "100%",
                    backgroundColor: "#0F9D58",
                    textTransform: "none",
                    fontSize: "large",
                    fontWeight: "bolder",
                  }}
                >
                  Submit
                </LoadingButton>
              </div>
              <div>
                <Typography
                  style={{
                    marginTop: ".5rem",
                    fontFamily: "Poppins",
                    fontWeight: "bolder",
                  }}
                >
                  Don't have an Account?
                  <span
                    style={{ color: "#4285F4", cursor: "pointer" }}
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Create Account
                  </span>
                </Typography>
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

export default Login;
