import React, { useState } from "react";
import "./CharacterCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  addToFavourite,
  removeFromFavourite,
} from "../../Favourites/favouriteSlice";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";

const CharacterCard = ({ character }) => {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favourite);
  const { id, name, image, status, species, gender, type } = character;
  const [isFavourite, setIsFavourite] = useState(
    favourite.favouriteCharacters.some((f) => f.id === id) || false
  );

  const handleDeselect = () => {
    setIsFavourite(false);
    dispatch(removeFromFavourite(id));
  };

  const handleSelect = () => {
    setIsFavourite(true);
    dispatch(addToFavourite(character));
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
            {isFavourite ? (
              <IconButton style={{ float: "right" }} onClick={handleDeselect}>
                <FavoriteIcon color="error" />
              </IconButton>
            ) : (
              <IconButton style={{ float: "right" }} onClick={handleSelect}>
                <FavoriteBorderIcon />
              </IconButton>
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
    </div>
  );
};

export default CharacterCard;
