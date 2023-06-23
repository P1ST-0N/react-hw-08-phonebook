import RegisterForm from "components/RegisterForm";

import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={css.wrapper}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
