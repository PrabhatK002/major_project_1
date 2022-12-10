import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${"" /* justify-content: center; */}
  height: 100%;
  width: 100%;
  margin: 0;
`;

export const PatientAddWrap = styled.div`
  display: flex;
  flex-direction: column;
  ${"" /* justify-content: center; */}
  height: 100%;
  width: 100%;
`;

export const PatientAddArea = styled.div`
  display: grid;
  ${"" /* gap: 50px 100px; */}
  width: auto;
  grid-template-columns: 300px 300px 300px 300px;
  row-gap: 25px;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 20px;
  padding-left: 40px;

  @media only screen and(max-width: 480px) {
    grid-template-columns: 300px;
  }
`;

export const PatientAddItem = styled.div`
  padding: 5px;
  width: 200px;
  height: 250px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  background: #c0c0c0;
  // border: #ff4433 2px solid;
  background-image: url(${(props) => props.img});
  box-shadow: 2.5px 5px 4px 5px #888888;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
  }
`;

export const PatientAddItemTop = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 50px;
  padding: 5px;

  align-items: center;
  justify-content: flex-start;
`;

export const PatientAddItemTopIcon = styled.img`
  width: 35px;
  height: 35px;
`;

export const PatientAddItemTopTitle = styled.text`
  width: 100%;
  height: 30px;
  color: #fff;
  margin-left: 20px;
  text-align: left;
  font-weight: bold;
  transition: all 0.6s ease-in-out;

  &:hover {
    transition: all 0.6s ease-in-out;
    transform: scale(1.1);
  }
`;
export const PatientAddItemMid = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PatientAddItemMidIcon = styled.img`
  width: 60%;
  height: 70%;
  transition: all 0.6s ease-in-out;

  &:hover {
    transition: all 0.6s ease-in-out;
    transform: scale(1.1);
  }
`;

export const PatientAddItemBottom = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 20px;

  display: flex;
  justify-content: flex-end;
`;

export const PatientAddItemBottomLink = styled(Link)`
  align-items: center;
  width: 35px;
  height: 35px;

  margin-bottom: 5px;
  margin-right: 5px;
  align-self: flex-end;
`;

export const PatientAddItemBottomIcon = styled.img`
  width: 100%;
  height: 100%;

  transition: all 0.6s ease-in-out;
  

  &:hover {
    transition: all 0.6s ease-in-out;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
