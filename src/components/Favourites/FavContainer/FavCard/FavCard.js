import React, { useEffect, useState } from "react";
import "./FavCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FavDialogue from "./FavDialogue";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  margin: "auto",
  transform: "translate(-50%, -50%)",
  // width: 400,
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid transparent",
  borderRadius: "25px",
  boxShadow: 24,
  p: 4,
};

const FavCard = ({ character }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const openDilog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const favourite = useSelector((state) => state.favourite);
  const { id } = character;
  const [CharacterData, setCharacterData] = useState({});
  const [isFavourite, setIsFavourite] = useState(
    favourite.favouriteCharacters.some((f) => f.id === id) || false
  );

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${character.id}`)
      .then((response) => {
        // console.log("favcharacter", response);
        setCharacterData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleDeselect = () => {
    openDilog();
  };

  // const handleSelect = () => {
  //   setIsFavourite(true);
  //   dispatch(addToFavourite(character));
  // };

  const handleOnImageClick = () => {
    navigate("/individual", { state: { character: CharacterData } });
  };

  return (
    <div>
      <div className="card">
        {CharacterData.status === "Alive" ? (
          <span className="status-green">{CharacterData.status}</span>
        ) : CharacterData.status === "Dead" ? (
          <span className="status-red">{CharacterData.status}</span>
        ) : (
          <span className="status-grey">{CharacterData.status}</span>
        )}
        <img
          src={CharacterData.image}
          alt="Rick and Morty Character"
          className="img-image"
          onClick={handleOnImageClick}
        ></img>
        <div className="card-info">
          <p className="text-title">
            {CharacterData.name}
            {isFavourite ? (
              <IconButton style={{ float: "right" }} onClick={handleDeselect}>
                <FavoriteIcon color="error" />
              </IconButton>
            ) : (
              <IconButton style={{ float: "right" }}>
                <FavoriteBorderIcon />
              </IconButton>
            )}
          </p>
          <p className="text-body">
            {CharacterData.species}
            <br />
            {CharacterData.gender}
            <br />
            {CharacterData.type}
          </p>
        </div>
        {/* <div className="card-footer"></div> */}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <FavDialogue
              handleClose={handleClose}
              setOpen={setOpen}
              open={open}
              id={id}
              setIsFavourite={setIsFavourite}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default FavCard;
