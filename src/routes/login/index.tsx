import { Row, Col, Grid, Typography } from "antd";
import { Login as LoginModel } from "models/user";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { useStoreActions, useStoreState } from "store";
import LoginForm from "./form";
import "./login.less";

interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  const { login } = useStoreActions((store) => store.Auth);

  const handleLogin = async (form: LoginModel) => {
    try {
      await login(form);
    } catch (error) {
      console.error("Error on login..", error);
    }
  };

  return (
    <>
      <LoginForm onSubmit={handleLogin} />
    </>
  );
};

export default LoginPage;
