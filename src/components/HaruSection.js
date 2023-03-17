import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HaruSection.css";

function HaruSection() {
  return (
    <div className="hero-container" style={{background: "url('./images/img-20.jpg') center center/cover no-repeat"}}>
      {/* <video src="/videos/cherry-blossom-84874.mp4" autoPlay loop muted></video> */}
      <h1>
        HARU <i className="fa-solid fa-bowl-rice fa-bowl-rice-haru"></i> SUSHI
      </h1>
      <p className="second--line">HOMEMADE</p>
      <p className="second--line">SUSHI AND GYOZA</p>
      <p>By Fransisca Carolina</p>
      
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline2_s"
          buttonSize="btn--large_s"
          linkTo="/menu"
        >
          SEE OUR MENU
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary_s"
          buttonSize="btn--large_s"
          linkTo="/story"
        >
          READ OUR STORY
          <i className="far fa-play-circle"></i>
        </Button>
      </div>
      <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
        Website by FeLcia{" "}
      </p>
      <p style={{ fontFamily: "sans-serif", fontSize: "15px" }}>
        Built with React and Bootstrap
      </p>
    </div>
  );
}

export default HaruSection;
