import { Button, Col, Input, Row } from "antd";
import * as React from "react";

interface ILoginFormProps {}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
  return (
    <Row justify='end' gutter={[12, 12]}>
      <Col span={24}>
        <Input />
      </Col>
      <Col span={24}>
        <Input.Password />
      </Col>
      <Col lg={8} xs={12} sm={10}>
        <Button block type='primary'>
          Giriş
        </Button>
      </Col>
    </Row>
  );
};

export default LoginForm;
