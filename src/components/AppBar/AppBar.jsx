import { useSelector } from "react-redux";

import UserMenu from "components/UserMenu";
import AuthNav from "components/AuthNav";
import Navigation from "components/Navigation";
import { getIsLoggedIn } from "redux/selectors";

import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={css.header__wrapper}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
