import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/routes/Home.css";

function Home() {
  return (
    <>
      <Header />
      <main>
        <img src="/images/1.jpeg" />
        <h3>무슨일이 일어난겨</h3>
      </main>
      <Footer />
    </>
  );
}

export default Home;
