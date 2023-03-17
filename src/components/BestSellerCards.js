import React from "react";
import BestSellerCard from "./BestSellerCard";
import "./BestSellerCards.css";

function BestSellerCards() {
  return (
    <div className="container text-center bg-light-subtle p-5 mb-5 rounded">
      <h1 className="page-title text-center">Our Best Sellers</h1>

      <BestSellerCard
        width="35rem"
        src="./images/sushi_haru/sushi_cake_5_1.jpg"
        title="IDR 200k"
        subtitle="SUSHI CAKE | D 20CM"
        text="Perfect for any occasion, our Sushi Cake is sure to be the star of your next party or special event. Whether you're hosting a birthday party, a wedding reception, or just a casual get-together with friends, our Sushi Cake is the perfect addition to any menu."
      ></BestSellerCard>

      <BestSellerCard
        width="35rem"
        src="./images/sushi_haru/rice_paper_roll_2.jpg"
        title="IDR 42k"
        subtitle="CHICKEN MAYO RICE PAPER ROLL"
        text="Perfect for on-the-go snacking or as a stunning appetizer for your next party, our Rice Paper Rolls are sure to impress. So why wait? Order now and discover the taste sensation that has made our Rice Paper Rolls a best-seller!"
      ></BestSellerCard>
    </div>
  );
}

export default BestSellerCards;
