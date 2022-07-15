import { Button, Grid, Paper } from "@mui/material";
import React, { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import "./Character.css";
import { changeNavUser } from "../ResponsiveAppBar/appbarSlice";
import { useDispatch } from "react-redux";
const Character = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { state } = useLocation();

  const { image, name, status, species, gender, origin, type } =
    state.character;
  useEffect(() => {
    dispatch(changeNavUser("individual"));
    if (!state) {
      Navigate("/characters");
    }
  });
  return (
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        style={{
          fontFamily: "Poppins",
          fontSize: "large",
          fontWeight: "bolder",
        }}
      >
        Back
      </Button>

      <Grid
        container
        sx={{ width: "80%", justifyContent: "center", marginTop: "2rem" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper
            elevation={24}
            sx={{
              padding: "2rem",
              borderRadius: "25px",
              backgroundColor: "#8cc13d",
            }}
          >
            <Grid container spacing="1rem" sx={{ alignItems: "center" }}>
              {/* FIRST HALF */}
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                style={{
                  //   backgroundColor: "#e6e0c0",
                  borderRadius: "25px",
                }}
              >
                <img
                  src={image}
                  alt="Rick and Morty Character"
                  className="img-indiviual"
                  style={{ marginTop: ".5rem" }}
                ></img>
              </Grid>
              {/* SECOND HALF */}
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <div style={{ textAlign: "left" }}>
                  <h3>Name.: {name}</h3>
                  <h3>Status.:{status}</h3>
                  <h3>Species.: {species}</h3>
                  <h3>Type.: {type.length ? type : "Unknown"}</h3>
                  <h3>Gender.: {gender}</h3>
                  <h3>Origin.: {origin.name}</h3>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Character;
