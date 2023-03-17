import React from "react";
import CardBootstrap from "./CardBootstrap";
import "./Cards.css";
import "./HaruSection.css";

function RicePaperRollCards() {
  return (
    <>
      <div className="container text-center bg-light-subtle pt-5">
        <h1 className="page-title text-center">Rice Paper Roll</h1>
        <h5 className="cards--sub">
          Indulge in the delicious and healthy goodness of our rice paper rolls
        </h5>
        <h5 className="cards--sub">
          Perfect for a quick and satisfying snack or meal!
        </h5>
        <div className="row">
          <CardBootstrap
            src="./images/rice_paper_roll_1.jpg"
            title="IDR 45k"
            subtitle="SALMON RICE PAPER ROLL"
            text="Cooked salmon, lettuce, cucumber, carrot, pickled red cabbage, red paprika, avocado w/ roasted sesame dressing"
            width="18rem"
          ></CardBootstrap>
          <CardBootstrap
            src="./images/rice_paper_roll_2.jpg"
            title="IDR 42k"
            subtitle="CHICKEN MAYO RICE PAPER ROLL"
            text="Cooked chiken mayo, lettuce, cucumber, carrot, pickled red cabbage, avocado w/ sweet sour chilli dressing"
            width="18rem"
          ></CardBootstrap>
          <CardBootstrap
            src="./images/rice_paper_roll_3.jpg"
            title="IDR 40k"
            subtitle="TUNA RICE PAPER ROLL"
            text="Cooked tuna, lettuce, cucumber, carrot, pickled red cabbage, avocado w/ roasted sesame dressing"
            width="18rem"
          ></CardBootstrap>
        </div>
      </div>
    </>
  );
}

export default RicePaperRollCards;
