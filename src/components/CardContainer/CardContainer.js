import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CharacterCard from "./CharacterCard/CharacterCard";
import { fetchCharacters } from "./characterSlice";
import { Grid } from "@mui/material";
import { changeRoute } from "../Favourites/favouriteSlice";
import FilterForm from "../FilterForm/FilterForm";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import CardSkeleton from "../CardSkeleton/CardSkeleton";

const CardContainer = () => {
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeRoute(true));
    // console.log(character);
    dispatch(fetchCharacters());
  }, [dispatch]);
  // console.log(character);
  return (
    <div style={{ marginTop: "5rem" }}>
      <FilterForm />
      <PaginationComponent />
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
    </div>
  );
};

export default CardContainer;
