import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("there is an error");
  }
  return (
    <div>
      <h4>{heroName}</h4>
    </div>
  );
}

export default Hero;
