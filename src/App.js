import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import Home from "./Components/StartingPage/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TicTacToe" element={<TicTacToe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
