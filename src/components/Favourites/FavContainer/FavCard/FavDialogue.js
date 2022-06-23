import React from "react";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { removeFromFavourite } from "../../favouriteSlice";
function FavDialogue(props) {
  const dispatch = useDispatch();
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
          onClick={() => dispatch(removeFromFavourite(props.id))}
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
    </div>
  );
}

export default FavDialogue;
