import React from "react";
import { GoHeartFill } from "react-icons/go";
import { FcLike } from "react-icons/fc";
import { MdPlaylistAdd } from "react-icons/md";
import { MdPlaylistAddCheck } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import StarRating from "../Components/StarRating";

const Card = ({ item }) => {
  return (
    <div className="card-section">
      <div className="card-container">
        <div className="card-top">
          <div className="card-img">
            <img
              src={`src/assets/data/Images/${item.images[0]}`}
              className="img-fluid"
              alt="loading..."
            />
          </div>
          <div className="card-activity">
            <div className="activity-btn">
              <span>
                <GoHeartFill />
              </span>
              <span>
                <FcLike />
              </span>
            </div>
            <div className="activity-btn">
              <span>
                <MdPlaylistAdd />
              </span>
              <span>
                <MdPlaylistAddCheck />
              </span>
            </div>
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-rating">
            <StarRating rating={item.ratings} />
            <span>{item.reviewers}</span>
          </div>
          <div className="card-title">
            <p>{item.title}</p>
          </div>
          <div className="card-details">
            <p className="trancate">{item.details}</p>
          </div>
          <div className="card-price">
            <p>
              <BiRupee />
              {item.price} /person
            </p>
          </div>
          <div className="card-btn">
            <button type="button" className="lab-btn">
              More...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
