import React from "react";
import Navbar from "./Nav/Navbar";

const Home = ({ isLoggedIn }) => {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
    </>
  );
};

export default Home;
