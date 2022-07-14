import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavCard from "./FavCard/FavCard";
import { Grid } from "@mui/material";
import { changeNavUser } from "../../ResponsiveAppBar/appbarSlice";
import { FetchFav } from "../favouriteSlice";
import Dialogue from "../../Dialogue/Dialogue";

const FavContainer = () => {
  const [open, setOpen] = React.useState(false);

  const [DialogMessage, setDialogueMessage] = useState("");
  const [DialogTitle, setDialogTitle] = useState("");

  const setDialogueOpen = (title, message) => {
    setDialogTitle(title);
    setDialogueMessage(message);
    setOpen(true);
  };

  const user = useSelector((state) => state.user);

  const favouriteCharacter = useSelector(
    (state) => state.favourite.favouriteCharacters
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeNavUser("favourite"));
  }, [favouriteCharacter, dispatch]);

  useEffect(() => {
    dispatch(FetchFav(user.user._id))
      .unwrap()
      .then((originalPromiseResult) => {
        //
      })
      .catch((e) => {
        setDialogueOpen("User Favourites", e.message);
      });
  }, [user, dispatch]);
  // console.log(favouriteCharacter);

  return (
    <div
      style={{
        paddingTop: "5rem",
        // backgroundImage: `url(https://images8.alphacoders.com/909/thumb-1920-909638.png)`,
        // backgroundSize: "cover",
      }}
    >
      {favouriteCharacter?.length ? (
        <div style={{ margin: "2rem" }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {favouriteCharacter.map((character) => (
              <Grid
                item
                key={character.id}
                xs={12}
                md={6}
                lg={3}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <FavCard key={character.id} character={character} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <div>
          <h1>You Don't Have Any Favourites Yet!</h1>
          <div
            style={{
              display: "flex",
              height: "18rem",
              justifyContent: "center",
              width: "auto",
            }}
          >
            <img
              src="https://cdn.dribbble.com/users/458522/screenshots/7157588/media/737705cec64886f7cc13a6d768b9b36a.jpg"
              alt="No Favourites Found"
              style={{
                height: "100%",
                width: "24rem",
              }}
            ></img>
          </div>
        </div>
      )}
      <Dialogue
        title={DialogTitle}
        message={DialogMessage}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default FavContainer;
