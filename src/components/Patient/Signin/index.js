import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormButton,
  FormContent,
  Form,
  FormInput,
  FormLabel,
  FormH1,
  Text,
} from "./SigninElements";

const PatientSignin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">MRS</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit" to="/patient_add">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default PatientSignin;
