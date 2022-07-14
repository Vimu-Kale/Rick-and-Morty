import React, { useState } from "react";
import "./CharacterCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  AddToFav,
  RemoveFromFav,
  removeFromFavourite,
} from "../../Favourites/favouriteSlice";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Dialogue from "../../Dialogue/Dialogue";

const CharacterCard = ({ character }) => {
  const [open, setOpen] = React.useState(false);
  const [DialogMessage, setDialogueMessage] = useState("");
  const [DialogTitle, setDialogTitle] = useState("");

  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favourite);
  const user = useSelector((state) => state.user);
  const { id, name, image, status, species, gender, type } = character;
  const [isFavourite, setIsFavourite] = useState(
    favourite.favouriteCharacters.some((f) => f.id === id) || false
  );

  const setDialogueOpen = (title, message) => {
    setDialogTitle(title);
    setDialogueMessage(message);
    setOpen(true);
  };

  //HANDLE FAVOURITING FEATURE WHEN USER NOT LOGGED IN
  const handleNotLogin = () => {
    setDialogueOpen(
      "Help",
      "Register or Login To Make Characters Your favourites"
    );
  };

  //HANDLE FAVOURITE OF SELECT
  const handleSelect = () => {
    setIsFavourite(true);
    dispatch(AddToFav(id))
      .unwrap()
      .then((originalPromiseResult) => {
        setDialogueOpen("Success", "Added To Favourites!");
      })
      .catch((e) => {
        setDialogueOpen(
          "Error",
          "Failed To Add To Favourites. Try Sometime later!"
        );
        setIsFavourite(false);
      });
  };

  //HANDLE FAVOURITE ON DESELECT
  const handleDeselect = () => {
    setIsFavourite(false);
    dispatch(RemoveFromFav(id))
      .unwrap()
      .then((originalPromiseResult) => {
        setDialogueOpen("Success", "Removed From Favourites!");
      })
      .catch((e) => {
        setDialogueOpen(
          "Error",
          "Failed To Remove From Favourites. Try Sometime later!"
        );
        setIsFavourite(true);
      });
  };

  return (
    <div>
      <div className="card">
        {status === "Alive" ? (
          <span className="status-green">{status}</span>
        ) : status === "Dead" ? (
          <span className="status-red">{status}</span>
        ) : (
          <span className="status-grey">{status}</span>
        )}
        <img
          src={image}
          alt="Rick and Morty Character"
          className="img-image"
        ></img>
        <div className="card-info">
          <p className="text-title">
            {name}
            {!user.accessToken ? (
              <>
                <IconButton style={{ float: "right" }} onClick={handleNotLogin}>
                  <FavoriteBorderIcon />
                </IconButton>
              </>
            ) : (
              <>
                {isFavourite ? (
                  <IconButton
                    style={{ float: "right" }}
                    onClick={handleDeselect}
                  >
                    <FavoriteIcon color="error" />
                  </IconButton>
                ) : (
                  <IconButton style={{ float: "right" }} onClick={handleSelect}>
                    <FavoriteBorderIcon />
                  </IconButton>
                )}
              </>
            )}
          </p>
          <p className="text-body">
            {species}
            <br />
            {gender}
            <br />
            {type}
          </p>
        </div>
        {/* <div className="card-footer"></div> */}
      </div>
      <Dialogue
        title={DialogTitle}
        message={DialogMessage}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default CharacterCard;
