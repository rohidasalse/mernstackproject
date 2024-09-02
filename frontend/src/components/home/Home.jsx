import React from "react";
import Navbar from "../Navbar";
import Banner from "../Banner";
import Freebook from "../Freebook.jsx";
import Footer from "../Footer";
function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Freebook />
        <Footer />
      </div>
    </>
  );
}

export default Home;
