import * as React from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Box,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import image from "../../assets/ram-logo.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import FavoriteIcon from "@mui/icons-material/Favorite";

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const isFavourite = useSelector((state) => state.favourite.isFavourite);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleUserList = () => {
    navigate("/favourites");
    handleCloseNavMenu();
  };

  const handleCharacterList = () => {
    navigate("/");
    handleCloseNavMenu();
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
              {isFavourite ? (
                <MenuItem
                  key={1}
                  onClick={() => {
                    handleUserList();
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
                    Favorites
                  </Typography>
                  <FavoriteIcon color="error" />
                </MenuItem>
              ) : (
                <MenuItem
                  key={1}
                  onClick={() => {
                    handleCharacterList();
                  }}
                >
                  <AccountBoxIcon style={{ color: "#bfde42" }} />
                  <Typography
                    textAlign="center"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      cursor: "pointer",
                      color: "#black",
                    }}
                  >
                    Characters
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>

          {isFavourite ? (
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Typography
                key={1}
                onClick={handleUserList}
                sx={{ color: "black" }}
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  cursor: "pointer",
                  color: "black",
                  paddingRight: "0.5rem",
                }}
              >
                Favourites
              </Typography>
              <FavoriteIcon color="error" />
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <AccountBoxIcon style={{ color: "#8cc13d" }} />
              <Typography
                key={1}
                onClick={handleCharacterList}
                sx={{ color: "black" }}
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                Characters
              </Typography>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
