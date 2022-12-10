import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 100px;
  ${"" /* margin-top: -80px; */}
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 5;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    height: 80px;
  }

  @media screen and (max-width: 480px) {
    height: 70px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  z-index: 2;
  width: 100%;
  padding: 0 24px;
  ${'' /* max-width: 1100px; */}
  background: #009e60;
`;

export const NavLogo = styled.div`
  justify-self: flex-start;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
`;

export const NavLogoText = styled.text`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    transition: all 0.6s ease-in-out;
    color: #ffb6c1;
  }
`;
export const NavLogoImage = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  ${'' /* cursor: pointer; */}
  transition: all 0.2s ease-in-out;

&: hover {
  transform: scale(1.2);
}
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 50px;
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 90%;
  cursor: pointer;

  :hover {
    cursor: pointer;
    height: 100%;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: #7ed957;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.6s ease-in-out;
    background: #f88379;
    color: #fff;
  }
`;