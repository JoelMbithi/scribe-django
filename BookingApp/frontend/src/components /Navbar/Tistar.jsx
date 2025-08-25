import React, { useState } from "react";
import { TiStar } from "react-icons/ti";

export default function RatingStars() {
  return (
    <div className="flex text-amber-600 text-xl">
      {[...Array(5)].map((_, index) => (
        <TiStar key={index} />
      ))}
    </div>
  );
}
