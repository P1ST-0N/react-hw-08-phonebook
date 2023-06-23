import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { userApi } from "redux/userApi";

import { getToken } from "redux/selectors";
import { useGetCurrentQuery } from "redux/userApi";

import css from "./App.module.css";

const App = () => {
  const token = useSelector(getToken);

  const { isLoading } = useGetCurrentQuery(undefined, {
    skip: !token,
  });

  return <div className="App">dsfs</div>;
};

export default App;
