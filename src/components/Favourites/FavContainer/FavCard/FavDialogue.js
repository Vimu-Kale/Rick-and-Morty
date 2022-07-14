import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { RemoveFromFav, removeFromFavourite } from "../../favouriteSlice";
import Dialogue from "../../../Dialogue/Dialogue";

function FavDialogue(props) {
  const [dopen, setdOpen] = React.useState(false);
  const [DialogMessage, setDialogueMessage] = useState("");
  const [DialogTitle, setDialogTitle] = useState("");
  const dispatch = useDispatch();
  const setDialogueOpen = (title, message) => {
    setDialogTitle(title);
    setDialogueMessage(message);
    setdOpen(true);
  };
  return (
    <div>
      <Typography variant="h6" fontSize="20px" sx={{ fontFamily: "Poppins" }}>
        Are you sure you want to remove this item from Favourites?
      </Typography>
      <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
        <button
          onClick={() => props.setOpen(false)}
          style={{
            float: "left",
            width: "7rem",
            height: "2.8rem",
            hover: { backgroundColor: "Green" },
          }}
          className="generate-button green"
        >
          <span>Cancle</span>
        </button>

        <button
          onClick={() => {
            props.setIsFavourite(false);
            dispatch(RemoveFromFav(props.id))
              .unwrap()
              .then((originalPromiseResult) => {
                dispatch(removeFromFavourite(props.id));
                setDialogueOpen("Success", "Removed From Favourites!");
                props.setOpen(false);
              })
              .catch((e) => {
                setDialogueOpen(
                  "Error",
                  "Failed To Remove From Favourites. Try Sometime later!"
                );
                props.setIsFavourite(true);
                props.setOpen(false);
              });
          }}
          style={{
            float: "left",
            width: "7rem",
            height: "2.8rem",
            paddingLeft: "2.5rem",
            // marginLeft: "1rem",
          }}
          className="generate-button"
        >
          <span>Yes</span>
        </button>
      </div>
      <Dialogue
        title={DialogTitle}
        message={DialogMessage}
        open={dopen}
        setOpen={setdOpen}
      />
    </div>
  );
}

export default FavDialogue;
