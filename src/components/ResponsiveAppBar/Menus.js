import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import { useDispatch } from "react-redux";
import { resetUser } from "../User/userSlice";
import { resetNav } from "./appbarSlice";
import { resetFav } from "../Favourites/favouriteSlice";
import { resetCharacter } from "../CardContainer/characterSlice";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";

// //////////////////////////////////////////////////////////////////
// initial & signed in charcater nav
// ////////////////////////////////////////////////////////////////////

export const CharacterNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <MenuItem
        key={77}
        onClick={() => {
          navigate("/characters");
        }}
      >
        <Typography
          textAlign="center"
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            color: "black",
          }}
        >
          Characters
        </Typography>
      </MenuItem>
      <MenuItem
        key={6}
        onClick={() => {
          navigate("/favourite");
        }}
      >
        <Typography
          textAlign="center"
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            color: "black",
          }}
        >
          Favourites
        </Typography>
      </MenuItem>
      <MenuItem
        key={7}
        onClick={() => {
          dispatch(resetUser());
          dispatch(resetNav());
          dispatch(resetFav());
          dispatch(resetCharacter());
          navigate("/");
        }}
      >
        <Typography
          textAlign="center"
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            color: "black",
          }}
        >
          Logout
        </Typography>
      </MenuItem>
    </div>
  );
};

export const CharacterNavBox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
        <Button
          key={9}
          onClick={() => {
            navigate("/characters");
          }}
          sx={{ color: "black" }}
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            color: "#8cc13d",
            paddingRight: "0.5rem",
            textTransform: "none",
          }}
          startIcon={<PeopleAltIcon />}
        >
          Characters
        </Button>
      </Box>
      <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
        <Button
          key={9}
          onClick={() => {
            navigate("/favourite");
          }}
          sx={{ color: "black" }}
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            color: "black",
            paddingRight: "0.5rem",
            textTransform: "none",
          }}
          startIcon={<FavoriteIcon />}
        >
          Favourites
        </Button>
      </Box>
      <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
        <Button
          key={10}
          onClick={() => {
            dispatch(resetUser());
            dispatch(resetNav());
            dispatch(resetFav());
            dispatch(resetCharacter());
            navigate("/");
          }}
          sx={{ color: "black" }}
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            color: "black",
            paddingRight: "0.5rem",
            textTransform: "none",
          }}
          startIcon={<LogoutIcon />}
        >
          Logout
        </Button>
      </Box>
    </div>
  );
};

// //////////////////////////////////////////////////////////////////
// signed in and favourite nav
// ////////////////////////////////////////////////////////////////////

export const FavouriteNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <MenuItem
        key={88}
        onClick={() => {
          navigate("/characters");
        }}
      >
        <Typography
          textAlign="center"
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            color: "black",
          }}
        >
          Characters
        </Typography>
      </MenuItem>
      <MenuItem
        key={12}
        onClick={() => {
          dispatch(resetUser());
          dispatch(resetNav());
          dispatch(resetFav());
          dispatch(resetCharacter());
          navigate("/");
        }}
      >
        <Typography
          textAlign="center"
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            color: "black",
          }}
        >
          Logout
        </Typography>
      </MenuItem>
    </div>
  );
};

export const FavouriteNavBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex" }}>
      <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
        <Button
          key={13}
          onClick={() => {
            navigate("/characters");
          }}
          sx={{ color: "black" }}
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            color: "black",
            paddingRight: "0.5rem",
            textTransform: "none",
          }}
          startIcon={<PeopleAltIcon />}
        >
          Characters
        </Button>
      </Box>
      <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
        <Button
          key={13}
          onClick={() => {
            navigate("/favourites");
          }}
          sx={{ color: "black" }}
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            color: "#8cc13d",
            paddingRight: "0.5rem",
            textTransform: "none",
          }}
          startIcon={<FavoriteIcon />}
        >
          Favourites
        </Button>
      </Box>
      <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
        <Button
          key={14}
          onClick={() => {
            dispatch(resetUser());
            dispatch(resetNav());
            dispatch(resetFav());
            dispatch(resetCharacter());
            navigate("/");
          }}
          sx={{ color: "black" }}
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            color: "black",
            paddingRight: "0.5rem",
            textTransform: "none",
          }}
          startIcon={<LogoutIcon />}
        >
          Logout
        </Button>
      </Box>
    </div>
  );
};

//=======================================================================
//  REGISTER PAGE NAV
//=======================================================================

export const RegisterNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MenuItem
        key={16}
        onClick={() => {
          navigate("/");
        }}
      >
        <Typography
          textAlign="center"
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "large",
            cursor: "pointer",
            color: "black",
          }}
        >
          Login
        </Typography>
      </MenuItem>
    </div>
  );
};

export const RegisterNavBox = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
        <Button
          key={18}
          onClick={() => {
            navigate("/");
          }}
          sx={{ color: "black" }}
          style={{
            fontFamily: "Poppins",
            fontWeight: "bolder",
            fontSize: "large",
            cursor: "pointer",
            color: "black",
            paddingRight: "0.5rem",
            textTransform: "none",
          }}
          startIcon={<LoginIcon />}
        >
          Login
        </Button>
      </Box>
    </div>
  );
};
