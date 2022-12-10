import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";
import {
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/patient_signin">How it works</FooterLink>
              <FooterLink to="/patient_signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/patient_signin">Investors</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>videos</FooterLinkTitle>
              <FooterLink to="/patient_signin">Submit videos</FooterLink>
              <FooterLink to="/patient_signin">Ambassador</FooterLink>
              <FooterLink to="/patient_signin">Agency</FooterLink>
              <FooterLink to="/patient_signin">Influencer</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact us</FooterLinkTitle>
              <FooterLink to="/patient_signin">Contact</FooterLink>
              <FooterLink to="/patient_signin">Support</FooterLink>
              <FooterLink to="/patient_signin">Destinatons</FooterLink>
              <FooterLink to="/patient_signin">Sponsorships</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/patient_signin">Instagram</FooterLink>
              <FooterLink to="/patient_signin">Facebook</FooterLink>
              <FooterLink to="/patient_signin">Youtube</FooterLink>
              <FooterLink to="/patient_signin">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}></SocialLogo>
            <WebsiteRights>
            © MRS{" " + new Date().getFullYear() + " "}All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink  href="/"targets="_blank" aria-label="Facebook">
              
                <FaFacebook />
              </SocialIconLink>
              
              <SocialIconLink href="/"targets="_blank" aria-label="Instagram">
              
                
                <FaInstagram />
              </SocialIconLink>
              
              <SocialIconLink href="/"targets="_blank" aria-label="Youtube">
              
                 <FaYoutube />
              </SocialIconLink>
              
              <SocialIconLink href="/"targets="_blank" aria-label="Twitter">
              
                 <FaTwitter />
              </SocialIconLink>
              
              <SocialIconLink href="/"targets="_blank" aria-label="Linkedin">
              
                 <FaLinkedin />
              </SocialIconLink>
              
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
