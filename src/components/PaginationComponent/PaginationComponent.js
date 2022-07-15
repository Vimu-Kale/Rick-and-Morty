import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../CardContainer/characterSlice";
import { setPage } from "../CardContainer/characterSlice";

export default function PaginationComponent() {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character);
  // console.log("characterState", character);
  const handleChange = (event, value) => {
    dispatch(setPage({ page: value }));
    dispatch(fetchCharacters());
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <Typography
        style={{
          fontFamily: "Poppins",
          fontWeight: "bolder",
        }}
      >
        {/* Page: {character.filterObj.page} */}
      </Typography>
      <Pagination
        count={character?.characters?.info?.pages}
        page={character.filterObj.page}
        onChange={handleChange}
        color="success"
      />
    </div>
  );
}
