import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function MyNav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
  );
}

function InfoCard({ name, location, age, description }) {
  return (
    <div className="info_card">
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h4>{age}</h4>
      <p>{description}</p>
    </div>
  );
}

ReactDOM.render(
  React.createElement(<MyNav />),
  React.createElement(
    <InfoCard
      name="Jesse"
      location="Duluth"
      age={25}
      description="Email and Web Developer"
    />
  ),
  document.getElementById("root")
);