import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../User/userSlice";
import { resetNav } from "./appbarSlice";
import { resetFav } from "../Favourites/favouriteSlice";
import { resetCharacter } from "../CardContainer/characterSlice";

///////////////////////////////////////////////
export const LoginNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MenuItem
        key={1}
        onClick={() => {
          navigate("/register");
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
          Register
        </Typography>
      </MenuItem>
      <MenuItem
        key={2}
        onClick={() => {
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
          Characters
        </Typography>
      </MenuItem>
    </div>
  );
};

export const LoginNavBox = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
        <Button
          key={3}
          onClick={() => {
            navigate("/register");
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
          startIcon={<PersonAddAltRoundedIcon />}
        >
          Register
        </Button>
      </Box>
      <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
        <Button
          key={4}
          onClick={() => {
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
          startIcon={<PersonAddAltRoundedIcon />}
        >
          character
        </Button>
      </Box>
    </div>
  );
};
// //////////////////////////////////////////////////////////////////
// initial & signed in charcater nav
// ////////////////////////////////////////////////////////////////////

export const CharacterNav = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      {!user.accessToken ? (
        <MenuItem
          key={5}
          onClick={() => {
            navigate("/login");
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
            login
          </Typography>
        </MenuItem>
      ) : (
        <>
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
              Favorite
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
        </>
      )}
    </div>
  );
};

export const CharacterNavBox = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      {!user.accessToken ? (
        <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
          <Button
            key={8}
            onClick={() => {
              navigate("/login");
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
            startIcon={<PersonAddAltRoundedIcon />}
          >
            login
          </Button>
        </Box>
      ) : (
        <>
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
              startIcon={<PersonAddAltRoundedIcon />}
            >
              Favorite
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
              startIcon={<PersonAddAltRoundedIcon />}
            >
              logout
            </Button>
          </Box>
        </>
      )}
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
        key={11}
        onClick={() => {
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
          character
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
          startIcon={<PersonAddAltRoundedIcon />}
        >
          Character
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
          startIcon={<PersonAddAltRoundedIcon />}
        >
          logot
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
        key={15}
        onClick={() => {
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
          character
        </Typography>
      </MenuItem>
      <MenuItem
        key={16}
        onClick={() => {
          navigate("/login");
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
          login
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
          key={17}
          onClick={() => {
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
          startIcon={<PersonAddAltRoundedIcon />}
        >
          Character
        </Button>
      </Box>
      <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
        <Button
          key={18}
          onClick={() => {
            navigate("/login");
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
          startIcon={<PersonAddAltRoundedIcon />}
        >
          Login
        </Button>
      </Box>
    </div>
  );
};
