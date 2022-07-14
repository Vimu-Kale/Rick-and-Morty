import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar";
import CardContainer from "./components/CardContainer/CardContainer";
import RequireAuth from "./components/RequireAuth";
import CircularProgress from "@mui/material/CircularProgress";
const LazyLogin = React.lazy(() => import("./components/User/Login/Login"));
const LazyFavContainer = React.lazy(() =>
  import("./components/Favourites/FavContainer/FavContainer")
);
const LazyRegister = React.lazy(() =>
  import("./components/User/Register/Register")
);

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<CardContainer />} />

        <Route
          path="/login"
          element={
            <React.Suspense fallback={<CircularProgress />}>
              <LazyLogin />
            </React.Suspense>
          }
        />

        <Route
          path="/favourite"
          element={
            <RequireAuth>
              <React.Suspense fallback={<CircularProgress />}>
                <LazyFavContainer />
              </React.Suspense>
            </RequireAuth>
          }
        />

        <Route
          path="/register"
          element={
            <React.Suspense fallback={<CircularProgress />}>
              <LazyRegister />
            </React.Suspense>
          }
        />

        <Route path="*" element={<CardContainer />} />
      </Routes>
    </div>
  );
}

export default App;
