import React, { useState } from "react";
import { Paper, TextField, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { fetchCharacters } from "../CardContainer/characterSlice";
import { setFilter } from "../CardContainer/characterSlice";
const FilterForm = () => {
  // const character = useSelector((state) => state.character);

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");

  const dispatch = useDispatch();

  const handleFilterClear = () => {
    setName("");
    setGender("");
    setStatus("");
    setSpecies("");
    setType("");
    const filter = {
      page: 1,
      name: "",
      gender: "",
      status: "",
      species: "",
      type: "",
    };
    dispatch(setFilter(filter));
    dispatch(fetchCharacters());
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const filter = {
      name,
      gender,
      status,
      species,
      type,
    };
    dispatch(setFilter(filter));
    // console.log("clicked");
    dispatch(fetchCharacters());
    // console.log(filter);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* CARD CONTAINER */}
        <Grid
          container
          sx={{ width: "70%", justifyContent: "center", marginBottom: "4rem" }}
        >
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Paper
              elevation={24}
              style={{
                boxShadow: " 0 25px 50px rgba(0,0,0,0.55)",
                backgroundImage: `url(https://images8.alphacoders.com/794/thumb-1920-794362.jpg)`,
                // backgroundImage: `url(https://images3.alphacoders.com/606/thumb-1920-606020.jpg)`,
                backgroundSize: "cover",
              }}
              sx={{ padding: "2rem", borderRadius: "25px" }}
            >
              <h1
                variant="h6"
                style={{
                  float: "left",
                  color: "white",
                  font: `bold 2rem Poppins, Serif`,
                  textShadow: `-4px 3px 0 black`,
                }}
              >
                Filters
              </h1>
              <h1
                style={{
                  float: "right",
                  color: "#e36937",
                  font: `bold 1rem Poppins, Serif`,
                  backgroundColor: "#e9c929",
                  padding: "3px 15px 3px 15px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  hover: { boxShadow: " 0 8px 50px rgba(0,0,0,0.55)" },
                  //   boxShadow: " 0 8px 50px rgba(0,0,0,0.55)",
                }}
                onClick={handleFilterClear}
              >
                Clear Filter
              </h1>
              <br />
              <form onSubmit={handleOnSubmit}>
                {/* FORM CONTAINER */}
                <Grid container spacing="1rem" sx={{ alignItems: "center" }}>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <FormControl fullWidth variant="filled">
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Name"
                        placeholder="Search Name"
                        variant="filled"
                        inputProps={{
                          style: {
                            fontFamily: "Poppins",
                            fontWeight: "bold",
                            backgroundColor: "rgba(255,255,255,0.8)",
                          },
                        }}
                        InputLabelProps={{
                          style: { fontFamily: "Poppins", fontWeight: "bold" },
                        }}
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        //   required
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <FormControl fullWidth variant="filled">
                      <InputLabel
                        id="demo-simple-select-filled-label"
                        style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                      >
                        Gender
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-filled"
                        value={gender}
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                        fullWidth
                        label="Gender"
                        variant="filled"
                        style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
                      >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Unknown">Unknown</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <FormControl fullWidth variant="filled">
                      <InputLabel
                        id="demo-simple-select-label"
                        style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                      >
                        Status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={status}
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                        fullWidth
                        label="Status"
                        style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
                      >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="Alive">Alive</MenuItem>
                        <MenuItem value="Dead">Dead</MenuItem>
                        <MenuItem value="Unknown">Unknown</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <FormControl fullWidth variant="filled">
                      <InputLabel
                        id="demo-simple-select-label"
                        style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                      >
                        Species
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={species}
                        onChange={(e) => {
                          setSpecies(e.target.value);
                        }}
                        fullWidth
                        label="Species"
                        style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
                      >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="Human">Human</MenuItem>
                        <MenuItem value="Alien">Alien</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <FormControl fullWidth variant="filled">
                      <InputLabel
                        id="demo-simple-select-label"
                        style={{ fontFamily: "Poppins", fontWeight: "bold" }}
                      >
                        Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={type}
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                        fullWidth
                        label="Type"
                        style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
                      >
                        <MenuItem key={1} value="">
                          Choose Type
                        </MenuItem>
                        <MenuItem value="Genetic experiment">
                          Genetic experiment
                        </MenuItem>
                        <MenuItem value="Superhuman (Ghost trains summoner)">
                          Superhuman (Ghost trains summoner)
                        </MenuItem>
                        <MenuItem value="Parasite">Parasite</MenuItem>
                        <MenuItem value="Human with antennae">
                          Human with antennae
                        </MenuItem>
                        <MenuItem value="Human with ants in his eyes">
                          Human with ants in his eyes
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Button
                      type="submit"
                      //   sx={{ width: "10rem" }}
                      style={{
                        fontFamily: "Poppins",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        // backgroundColor: "#8cc13d",
                        backgroundImage: `url(https://images8.alphacoders.com/794/thumb-1920-794362.jpg)`,
                      }}
                      size="large"
                      variant="contained"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FilterForm;
