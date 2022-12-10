import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  z-index: 0;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-top: 32px;
  margin-left: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  align-self: flex-start;

  @media screen and (max-width: 480px) {
    margin-top: 16px;
    margin-left: 16px;
  }
`;

export const FormContent = styled.div`
  height: 60%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  @media and screen(max-width:480px) {
    padding: 10px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 30 px;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
`;

export const Form = styled.form`
  background: #010101;
  min-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 16px auto 16px;
  padding: 40px 24px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 24px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  color: #fff;
  font-size: 14px;
  justify-self: left;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;
export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 30px;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
`;

export const GenderInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
