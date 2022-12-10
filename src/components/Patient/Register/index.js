import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  FormH1,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  GenderInput,
} from "./RegisterElements";

const PatientSignup = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/"> MRS </Icon>
        <FormContent>
          <FormH1>Sign Up Now</FormH1>
          <Form>
            <FormLabel>Full Name</FormLabel>
            <FormInput type="text" required />

            <FormLabel>Email</FormLabel>
            <FormInput type="email" required />

            <FormLabel>Mobile Number</FormLabel>
            <FormInput type="tel" required />

            <FormLabel>Password</FormLabel>
            <FormInput type="password" required />

            <FormLabel>Confirm Password</FormLabel>
            <FormInput type="password" required />

            <FormLabel>Date of Birth</FormLabel>
            <FormInput type="date" />

            <GenderInput>
              <FormInput type="radio" />
              <FormLabel>Male</FormLabel>

              <FormInput type="radio" />
              <FormLabel>Female</FormLabel>

              <FormInput type="radio" />
              <FormLabel>Other</FormLabel>
            </GenderInput>

            <FormButton type="submit">Submit</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default PatientSignup;
