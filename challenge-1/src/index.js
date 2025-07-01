import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return <Card />;
}

function Card() {
  return (
    <div className="card">
      <img src="assets/img/gueng.jpg" alt="gueng" className="card-img" />
      <div className="card-text">
        <h1>Siraphat Panya</h1>
        <p>Hi, I can code 👍, I just a guy who like playing video game</p>
        <div className="skills-container">
          <Skills skills="HTML💪" color="orange" />
          <Skills skills="CSS👍" color="purple" />
          <Skills skills="Python💪" color="blue" />
          <Skills skills="C👍" color="aqua" />
          <Skills skills="C#🏫" color="purple" />
        </div>
      </div>
    </div>
  );
}

function Skills(props) {
  return (
    <div className="skill-tag" style={{ backgroundColor: props.color }}>
      <p>{props.skills}</p>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
