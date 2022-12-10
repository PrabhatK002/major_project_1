import React from "react";
import top_icon from "../../Images/top_icon.png";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLogoText,
  NavLogoImage,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./PatientNavbarElements";

const PatientNavbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <NavLogoText>MRS</NavLogoText>
            <NavLogoImage src={top_icon} />
          </NavLogo>

          <NavMenu>
            <NavItem>
              <NavLinks
                to="/patient_profile"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Profile
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="/patient_add"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Add Items
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="/patient_view"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                View Records
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink
              to="/"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Sign Out
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default PatientNavbar;
