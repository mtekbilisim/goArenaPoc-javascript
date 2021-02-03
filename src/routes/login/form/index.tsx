import { Button, Col, Input, Row } from "antd";
import * as React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Login as LoginModel } from "models/user";

const LoginFormValidation = Yup.object().shape({
  email: Yup.string().trim().required().min(3),
  password: Yup.string().required().min(4),
});

interface ILoginFormProps {
  onSubmit: (form: LoginModel) => Promise<void>;
}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
  const { control, handleSubmit, formState } = useForm<LoginModel>({ resolver: yupResolver(LoginFormValidation) });

  const onLoginFormSubmit: SubmitHandler<LoginModel> = async (form) => await props.onSubmit(form);

  return (
    <form onSubmit={handleSubmit(onLoginFormSubmit)}>
      <Row justify='end' gutter={[12, 12]}>
        <Col span={24}>
          <Controller control={control} name='email' as={<Input type='email' placeholder='Email' />} />
        </Col>
        <Col span={24}>
          <Controller control={control} name='password' as={<Input.Password placeholder='Şifre' />} />
        </Col>
        <Col lg={8} xs={12} sm={10}>
          <Button loading={formState.isSubmitting} htmlType='submit' block type='primary'>
            Giriş
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default LoginForm;
