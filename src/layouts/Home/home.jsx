import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./home.css";
import Tabss from "../../components/tabs/tabs";
import Downbar from "../../components/downbar/downbar";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="inner-home">
          <div className="home-top">
            <Navbar />
          </div>
          <div className="home-bot">
            <Tabss />
          </div>
        </div>
        <Downbar />
      </div>
    </>
  );
}
