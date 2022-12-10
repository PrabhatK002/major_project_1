import React, { useState } from "react";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
//import InfoSection from '../components/infoSection';
//import { homeObjOne,homeObjTwo,homeObjThree } from '../components/infoSection/Data';
// import { FaHome } from 'react-icons/fa'
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
