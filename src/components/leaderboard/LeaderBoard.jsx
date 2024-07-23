import React from "react";
import { useSelector } from "react-redux";
import "./leaderboard.css";
import { FaTrophy } from "react-icons/fa";
import { BiSolidTimer } from "react-icons/bi";
import Carousel from "../carousel/Carousel";

const Leaderboard = () => {
  const scores = useSelector((state) => state.scores);
  const images = useSelector((state) => state.images);

  const rewards = ["₹50,000", "₹5,000", "₹500"];

  const sortedScores = [...scores].sort((a, b) => {
    const [aMin, aSec, aMs] = a.score.split(':').map(Number);
    const [bMin, bSec, bMs] = b.score.split(':').map(Number);
    return (aMin * 60000 + aSec * 1000 + aMs) - (bMin * 60000 + bSec * 1000 + bMs);
  });

  return (
    <div className="main-container">
      <div className="leaderboard">
        <div className="header">
          <div className="sub-header">
            <FaTrophy size={"1.5em"} />
            <h2>NAME</h2>
          </div>
          <div className="sub-header">
            <BiSolidTimer size={"2em"} />
            <h2>TIME</h2>
          </div>
        </div>
        <ul>
          {sortedScores.map((score, index) => (
            <li key={index} className={`li-${index + 1}`}>
              <div className="rank">{index + 1}</div>
              <div className="lead">
                <div>{score.username}</div>
                {index < 3 && <div className="reward">{rewards[index]}</div>}
                <div className="score">{score.score}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Carousel images={images} />
    </div>
  );
};

export default Leaderboard;
