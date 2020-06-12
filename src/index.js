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

function InfoCard() {
  return (
    <div className="info_card">
      <h2>{info_primary}</h2>
      <h3>{info_secondary}</h3>
      <p>{info_description}</p>
    </div>
  );
}

ReactDOM.render(
  React.createElement(<MyNav />),
  React.createElement(<InfoCard />),
  document.getElementById("root")
);
