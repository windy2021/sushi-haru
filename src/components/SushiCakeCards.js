import React from "react";
import CardBootstrap from "./CardBootstrap";
import "./Cards.css";
import "./HaruSection.css";

function SushiCakeCards() {
  return (
    <>
      {/* <video src="/videos/cherry-blossom-84874.mp4" autoPlay loop muted></video> */}
      <div className="container text-center bg-light-subtle pt-5">
        <h1 className="page-title text-center">Sushi Cake</h1>
        <h5 className="cards--sub">
          Make a wish and take a bite into our stunning sushi birthday cake!
        </h5>
        <h5 className="cards--sub">
          A deliciously playful take on sushi that's perfect for any
          celebration!
        </h5>
        <div className="row">
          <CardBootstrap
            src="./images/sushi_cake_5_1.jpg"
            title="IDR 200k"
            subtitle="5 SUSHI ROLLS | D 20CM (40 pcs)"
            text="Tuna avo roll | Cheesy chicken katsu | Ebi salmon roll | Dragon roll | Chiken katsu floss"
            width="18rem"
          ></CardBootstrap>
          <CardBootstrap
            src="./images/sushi_cake_5_2.jpg"
            title="IDR 252k"
            subtitle="5 SUSHI ROLLS | D 20CM (40pcs)"
            text="Tuna avo roll | Ebi salmon roll | Salmon mentai roll | 2 Crispy mentai roll"
            width="18rem"
          ></CardBootstrap>
          <CardBootstrap
            src="./images/sushi_cake_5_3.jpg"
            title="IDR 240k"
            subtitle="5 SUSHI ROLLS | D 20CM (40pcs)"
            text="Salmon mentai roll | Flamed salmon | Ebi salmon roll | Dragon roll | Smoked salmon roll"
            width="18rem"
          ></CardBootstrap>
        </div>
        <div className="row">
          <CardBootstrap
            src="./images/sushi_cake_6_1.jpg"
            title="IDR 215k"
            subtitle="6 SUSHI ROLLS | D 22CM (48pcs)"
            text="Spicy ebi tempura | Flamed salmon roll | Tuna cucumber | Ebi tempura roll | Dragon roll | Chicken katsu floss"
            width="24rem"
          ></CardBootstrap>
          <CardBootstrap
            src="./images/sushi_cake_6_2.jpg"
            title="IDR 291k"
            subtitle="6 SUSHI ROLLS | D 22CM (48pcs) & INARI (2pcs)"
            text="Salmon mentai roll | Dragon roll | Flamed salmon roll | Chiken katsu floss | Cheesy chiken katsu | Double cheese roll | Seaweed inari"
            width="24rem"
          ></CardBootstrap>
        </div>
        <div className="row">
          <CardBootstrap
            src="./images/sushi_cake_6_3.jpg"
            title="IDR 232k"
            subtitle="6 SUSHI ROLLS | D 22CM (48 pcs)"
            text="Salmon mentai roll | Spicy ebi tempura | Cheesy chiken katsu | 2 Spicy chicken katsu | Dragon roll"
            width="24rem"
          ></CardBootstrap>
          <CardBootstrap
            src="./images/sushi_cake_6_4.jpg"
            title="IDR 260k"
            subtitle="6 SUSHI ROLL | D 22CM (48 pcs) & INARI (2pcs)"
            text="Ebi salmon roll | Tuna avo roll | Cheesy chiken katsu | Spicy chiken katsu |Chiken katsu floss | Dragon roll | Seaweed inari"
            width="24rem"
          ></CardBootstrap>
        </div>
        <div className="row">
          <CardBootstrap
            src="./images/sushi_cake_8_1.jpg"
            title="IDR 291k"
            subtitle="8 SUSHI ROLL | d 25CM (64pcs)"
            text="2 Spicy ebi tempura | Special california roll | Spicy chiken katsu | Tuna cucumber | Dragon roll | Salmon mentai roll | Chiken katsu floss"
            width="18rem"
          ></CardBootstrap>
          <CardBootstrap
            src="./images/sushi_cake_8_2.jpg"
            title="IDR 327k"
            subtitle="8 SUSHI ROLLS | D 25CM (64pcs)"
            text="Spicy ebi tempura | Salmon mentai roll | Cheesy chiken katsu | 2 Ebi salmon roll | Dragon roll | Chiken katsu floss | CTuna avo roll"
            width="18rem"
          ></CardBootstrap>
          <CardBootstrap
            src="./images/sushi_cake_8_3.jpg"
            title="IDR 327k"
            subtitle="8 SUSHI ROLLS | D 25CM (64pcs)"
            text="Spicy ebi tempura | Salmon mentai roll | Cheesy chiken katsu | 2 Ebi salmon roll | Dragon roll | Chiken katsu floss | Tuna avo roll"
            width="18rem"
          ></CardBootstrap>
        </div>
      </div>
    </>
  );
}

export default SushiCakeCards;
