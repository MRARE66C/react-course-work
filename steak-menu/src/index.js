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
    photoName: "assets/img/filet-mignon.png",
    soldOut: false,
  },
  {
    name: "T-Bone Steak",
    ingredients: "T-bone steak, cracked pepper, herb butter",
    price: 35,
    photoName: "assets/img/tbone.png",
    soldOut: true,
  },
  {
    name: "Sirloin Special",
    ingredients: "Sirloin steak, house marinade, grilled onions",
    price: 28,
    photoName: "assets/img/sirloin.png",
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
  const steaks = steakData;

  return (
    <div className="menu">
      <h2 className="our-menu">OUR MENU</h2>
      <p>We declaring a war to vegan with our meat!!!!</p>
      {steaks ? (
        <div className="menu-container">
          {steaks.map((steak) => (
            <Steak steakObj={steak} key={steak.name} />
          ))}
        </div>
      ) : (
        <p>Work in progress</p>
      )}
    </div>
  );
}

function Steak({ steakObj }) {
  return (
    <div className={`steak-card ${steakObj.soldOut ? "sold-out" : ""}`}>
      <img src={steakObj.photoName} alt={steakObj.name} className="steak-img" />
      <div className="steak-card-text">
        <h2>{steakObj.name}</h2>
        <h3>{steakObj.ingredients}</h3>
        <h3>{steakObj.soldOut ? "SOLD OUT" : steakObj.price}</h3>
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
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>Why are you craving steak in this hour?</p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div>
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
