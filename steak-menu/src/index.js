import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const steakData = [
  {
    name: "Classic Ribeye",
    ingredients: "Ribeye steak, salt, pepper, garlic butter",
    price: 32,
    photoName: "assets/img/ribeye.png",
    soldOut: false,
  },
  {
    name: "Filet Mignon",
    ingredients: "Filet mignon, rosemary, olive oil, sea salt",
    price: 38,
    photoName: "filet-mignon.jpg",
    soldOut: false,
  },
  {
    name: "T-Bone Steak",
    ingredients: "T-bone steak, cracked pepper, herb butter",
    price: 35,
    photoName: "tbone.jpg",
    soldOut: true,
  },
  {
    name: "Sirloin Special",
    ingredients: "Sirloin steak, house marinade, grilled onions",
    price: 28,
    photoName: "sirloin.jpg",
    soldOut: false,
  },
  {
    name: "Porterhouse Feast",
    ingredients: "Porterhouse steak, smoked salt, thyme",
    price: 42,
    photoName: "assets/img/porterhouse.png",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Steak or Die</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2 className="our-menu">OUR MENU</h2>
      <div className="menu-container">
        <Steak
          name="Porterhouse Feast"
          ingredients="Porterhouse steak, smoked salt, thyme"
          price={42}
          photoName="assets/img/porterhouse.png"
        />
        <Steak
          name="Classic Ribeye"
          ingredients="Ribeye steak, salt, pepper, garlic butter"
          price={32}
          photoName="assets/img/ribeye.png"
        />
      </div>
    </div>
  );
}

function Steak(props) {
  return (
    <div className="steak-card">
      <img src={props.photoName} alt={props.name} className="steak-img" />
      <div className="steak-card-text">
        <h2>{props.name}</h2>
        <h3>{props.ingredients}</h3>
        <h3>{props.price}</h3>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      It's {hour} O'clock.{" "}
      {isOpen ? "We're currently Open" : "Sorry, We're closed"}
    </footer>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
