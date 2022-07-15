import * as React from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Box,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import image from "../../assets/ram-logo.jpg";
import { useSelector } from "react-redux";
import {
  CharacterNav,
  CharacterNavBox,
  FavouriteNav,
  FavouriteNavBox,
  RegisterNav,
  RegisterNavBox,
} from "./Menus";
// import FavoriteIcon from "@mui/icons-material/Favorite";

const ResponsiveAppBar = () => {
  const navuser = useSelector((state) => state.appbar.navuser);
  React.useEffect(() => {}, [navuser]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: "#fff",
        // backgroundImage: `url(https://images8.alphacoders.com/794/thumb-1920-794362.jpg)`,

        color: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={image}
            alt="rick and morty svg logo"
            style={{ height: "40px", width: "50px" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 25, display: { xs: "none", md: "flex" } }}
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: "1.5rem",
              // backgroundImage: `url(https://images8.alphacoders.com/794/thumb-1920-794362.jpg)`,
              // backgroundSize: "cover",
              // backgroundClip: "text",
              // WebkitBackgroundClip: "text",
              // color: "transparent",
              color: "#8cc13d",
            }}
          >
            Rick & Morty
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: "1.5rem",
              // backgroundImage: `url(https://images8.alphacoders.com/794/thumb-1920-794362.jpg)`,
              // backgroundSize: "cover",
              // backgroundClip: "text",
              // WebkitBackgroundClip: "text",
              // color: "transparent",
              color: "#8cc13d",
            }}
          >
            R&M
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navuser === "character" ? <CharacterNav /> : null}
              {navuser === "login" ? "" : null}
              {navuser === "individual" ? "" : null}
              {navuser === "register" ? <RegisterNav /> : null}
              {navuser === "favourite" ? <FavouriteNav /> : null}
            </Menu>
          </Box>
          {navuser === "character" ? <CharacterNavBox /> : null}
          {navuser === "login" ? "" : null}
          {navuser === "individual" ? "" : null}
          {navuser === "register" ? <RegisterNavBox /> : null}
          {navuser === "favourite" ? <FavouriteNavBox /> : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
