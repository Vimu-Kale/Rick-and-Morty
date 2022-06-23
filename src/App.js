import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardContainer from "./components/CardContainer/CardContainer";
import FavContainer from "./components/Favourites/FavContainer/FavContainer";
import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/favourites" element={<FavContainer />} />
        <Route path="*" element={<CardContainer />} />
      </Routes>
      {/* <CardContainer /> */}
    </div>
  );
}

export default App;
