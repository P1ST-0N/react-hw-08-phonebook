import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import { getToken } from "redux/selectors";
import { useGetCurrentQuery } from "redux/userApi";
import Container from "components/Container";
import AppBar from "components/AppBar/AppBar";

import css from "./App.module.css";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));

const App = () => {
  const token = useSelector(getToken);

  const { isLoading } = useGetCurrentQuery(undefined, {
    skip: !token,
  });

  return (
    <Container>
      <AppBar />
      {isLoading ? (
        <p className={css.default}>...loading</p>
      ) : (
        <Suspense fallback={<p className={css.default}>...loading</p>}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </Suspense>
      )}
    </Container>
  );
};

export default App;
