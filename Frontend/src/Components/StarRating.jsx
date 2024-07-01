import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const [Glow, setGlow] = useState({
    first: "",
    second: "",
    third: "",
    forth: "",
    fifth: "",
  });

  useEffect(() => {
    if (rating > 0 && rating < 1) {
      setGlow({
        first: "glowHalf",
        second: "",
        third: "",
        forth: "",
        fifth: "",
      });
    } else if (rating === 1) {
      setGlow({
        first: "glow",
        second: "",
        third: "",
        forth: "",
        fifth: "",
      });
    } else if (rating > 1 && rating < 2) {
      setGlow({
        first: "glow",
        second: "glowHalf",
        third: "",
        forth: "",
        fifth: "",
      });
    } else if (rating === 2) {
      setGlow({
        first: "glow",
        second: "glow",
        third: "",
        forth: "",
        fifth: "",
      });
    } else if (rating > 2 && rating < 3) {
      setGlow({
        first: "glow",
        second: "glow",
        third: "glowHalf",
        forth: "",
        fifth: "",
      });
    } else if (rating === 3) {
      setGlow({
        first: "glow",
        second: "glow",
        third: "glow",
        forth: "",
        fifth: "",
      });
    } else if (rating > 3 && rating < 4) {
      setGlow({
        first: "glow",
        second: "glow",
        third: "glow",
        forth: "glowHalf",
        fifth: "",
      });
    } else if (rating === 4) {
      setGlow({
        first: "glow",
        second: "glow",
        third: "glow",
        forth: "glow",
        fifth: "",
      });
    } else if (rating > 4 && rating < 5) {
      setGlow({
        first: "glow",
        second: "glow",
        third: "glow",
        forth: "glow",
        fifth: "glowHalf",
      });
    } else if (rating === 5) {
      setGlow({
        first: "glow",
        second: "glow",
        third: "glow",
        forth: "glow",
        fifth: "glow",
      });
    } else {
      setGlow({
        first: "",
        second: "",
        third: "",
        forth: "",
        fifth: "",
      });
    }
  },[rating]);

  return (
    <div className="rating-section">
      <span className="tooltiptext">{rating}</span>
      <div className={`star ${Glow.first}`}>
        {Glow.first==="glowHalf" ? (
            <FaStarHalf/>
        ):(
            <FaStar />
        )}
      </div>
      <div className={`star ${Glow.second}`}>
        {Glow.second==="glowHalf" ? (
            <FaStarHalf/>
        ):(
            <FaStar />
        )}
      </div>
      <div className={`star ${Glow.third}`}>
        {Glow.third==="glowHalf" ? (
            <FaStarHalf/>
        ):(
            <FaStar />
        )}
      </div>
      <div className={`star ${Glow.forth}`}>
        {Glow.forth==="glowHalf" ? (
            <FaStarHalf/>
        ):(
            <FaStar />
        )}
      </div>
      <div className={`star ${Glow.fifth}`}>
        {Glow.fifth==="glowHalf" ? (
            <FaStarHalf/>
        ):(
            <FaStar />
        )}
      </div>
    </div>
  );
};

export default StarRating;
