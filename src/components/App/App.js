import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import { getToken } from "redux/selectors";
import { useGetCurrentQuery } from "redux/userApi";
import Container from "components/Container";
import AppBar from "components/AppBar";
import { RestrictedRoute } from "components/RestrictedRoute";
import { PrivatRoute } from "components/PrivatRoute";

import css from "./App.module.css";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));

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
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={RegisterPage}
                  redirectTo="/contacts"
                />
              }
            ></Route>
            <Route
              path="/login"
              element={
                <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
              }
            ></Route>
            <Route
              path="/contacts"
              element={<PrivatRoute component={ContactsPage} redirectTo="/" />}
            ></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Suspense>
      )}
    </Container>
  );
};

export default App;
