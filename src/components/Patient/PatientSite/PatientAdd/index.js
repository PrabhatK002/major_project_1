import React from "react";
import PatientNavbar from "../PatientNavbar/index.js";
import { AddItemData } from "./Data.js";


import {
  Background,
  Container,
  PatientAddWrap,
  PatientAddArea,
  PatientAddItem,
  PatientAddItemTop,
  PatientAddItemTopIcon,
  PatientAddItemTopTitle,
  PatientAddItemMid,
  PatientAddItemMidIcon,
  PatientAddItemBottom,
  PatientAddItemBottomLink,
  PatientAddItemBottomIcon,
} from "./PatientAddElements";

const PatientAdd = () => {
  return (
    <>
      <Background>
        <PatientNavbar />
        <Container>
          <PatientAddWrap>
            <PatientAddArea>
              {AddItemData &&
                AddItemData.map((item) => {
                  return (
                    <PatientAddItem id={item.id}>
                      <PatientAddItemTop>
                        <PatientAddItemTopIcon src={item.top_icon} />
                        <PatientAddItemTopTitle>
                          {item.title}
                        </PatientAddItemTopTitle>
                      </PatientAddItemTop>

                      <PatientAddItemMid>
                        <PatientAddItemMidIcon src={item.mid_icon} />
                      </PatientAddItemMid>

                      <PatientAddItemBottom>
                        <PatientAddItemBottomLink>
                          <PatientAddItemBottomIcon src={item.add_icon}></PatientAddItemBottomIcon>
                        </PatientAddItemBottomLink>
                      </PatientAddItemBottom>
                    </PatientAddItem>
                  );
                })}
            </PatientAddArea>
          </PatientAddWrap>
        </Container>
      </Background>  
    </>
  );
};

export default PatientAdd;
