import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Link to="/TicTacToe">
        <button className="btn">Play Tic Tac Toe</button>
      </Link>
    </div>
  );
}

export default Home;
