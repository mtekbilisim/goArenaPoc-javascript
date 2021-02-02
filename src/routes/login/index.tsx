import { Row, Col, Grid } from "antd";
import * as React from "react";
import LoginForm from "./form";
import "./login.less";

interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  return (
    <Row justify='center' align='middle' className='login-page'>
      <Col xs={6} sm={8} md={12}></Col>
      <Col xs={18} sm={16} md={12}>
        <Row justify='center' align='middle' className='login-page-form'>
          <Col span={22} flex='0 0 420px' className='login-page-form-inside'>
            <LoginForm />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LoginPage;
