import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterCard from "./CharacterCard/CharacterCard";
import { fetchCharacters } from "./characterSlice";
import { Grid } from "@mui/material";
import FilterForm from "../FilterForm/FilterForm";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import { changeNavUser } from "../ResponsiveAppBar/appbarSlice";
import { FetchFav } from "../Favourites/favouriteSlice";
import Dialogue from "../Dialogue/Dialogue";

const CardContainer = () => {
  const [open, setOpen] = React.useState(false);

  const [DialogMessage, setDialogueMessage] = useState("");
  const [DialogTitle, setDialogTitle] = useState("");

  const setDialogueOpen = (title, message) => {
    setDialogTitle(title);
    setDialogueMessage(message);
    setOpen(true);
  };

  const character = useSelector((state) => state.character);
  const user = useSelector((state) => state.user);
  // console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(character);
    dispatch(changeNavUser("character"));
    if (user?.user?._id) {
      dispatch(FetchFav(user.user._id))
        .unwrap()
        .then((originalPromiseResult) => {
          // handle result here
          dispatch(fetchCharacters());
        })
        .catch((e) => {
          dispatch(fetchCharacters());
          setDialogueOpen("User Favourites", e.message);
        });
    } else {
      dispatch(fetchCharacters());
    }
  }, [user, dispatch]);
  // console.log(character);
  return (
    <div style={{ marginTop: "5rem" }}>
      <FilterForm />

      {character.loading && (
        <div>
          <div> Loading..</div>
          <CardSkeleton />
        </div>
      )}
      {!character.loading && character.error ? (
        <div>
          <h1>{character.error}</h1>
        </div>
      ) : null}
      {!character.loading && character?.characters?.results?.length ? (
        <div style={{ margin: "2rem" }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {character.characters.results.map((character) => (
              <Grid
                item
                key={character.id}
                xs={12}
                md={6}
                lg={3}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <CharacterCard key={character.id} character={character} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : null}
      <PaginationComponent />
      <Dialogue
        title={DialogTitle}
        message={DialogMessage}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default CardContainer;
