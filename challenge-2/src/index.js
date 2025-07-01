import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML",
    color: "orange",
    level: "beginner",
  },
  {
    skill: "CSS",
    color: "purple",
    level: "intermediate",
  },
  {
    skill: "Python",
    color: "blue",
    level: "advance",
  },
  {
    skill: "C",
    color: "aqua",
    level: "beginner",
  },
  {
    skill: "C#",
    color: "green",
    level: "intermediate",
  },
  {
    skill: "JavaScript",
    color: "yellow",
    level: "advance",
  },
  {
    skill: "React",
    color: "deepskyblue",
    level: "intermediate",
  },
];

function App() {
  return <Card />;
}

function Card() {
  const skillsData = skills;

  return (
    <div className="card">
      <img src="assets/img/gueng.jpg" alt="gueng" className="card-img" />
      <div className="card-text">
        <h1>Siraphat Panya</h1>
        <p>Hi, I can code 👍, I just a guy who like playing video game</p>
        <div className="skills-container">
          {skillsData ? (
            skillsData.map((skill) => <Skills skillsObj={skill} />)
          ) : (
            <p>This bitch has no skills</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Skills({ skillsObj }) {
  return (
    <div className="skill-tag" style={{ backgroundColor: skillsObj.color }}>
      <p>
        {skillsObj.skill}{" "}
        {skillsObj.level === "advance"
          ? "💪"
          : skillsObj.level === "intermediate"
          ? "👍"
          : "🏫"}
      </p>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
