import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function MyNav() {
  return (
    <nav className="myNav">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
}

const cardData = [
  {
    id: "1",
    imgsrc: "https://i.ibb.co/Lx9PLPx/ph-logo-mark-white-space.jpg",
    imgalt: "Pixl Haus logo",
    name: "Pixl Haus",
    category: "web design",
    tag1: "freelancer",
    tag2: "creative"
  }
];

function InfoCard({ dataRender }) {
  return (
    <div className="business_card_container">
      {dataRender.map(data => (
        <div>
          <img src={data.imgsrc} alt={data.imgalt} border="0" />
          <h2>{data.name}</h2>
          <p className="business_card_category">{data.category}</p>
          <ul className="business_card_tags">
            <li>
              <p>{data.tag1}</p>
            </li>
            <li>
              <p>{data.tag2}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

function FooterText() {
  return <p className="footer_text">This site is built with ReactJS</p>;
}

ReactDOM.render(<MyNav />, document.getElementById("area_nav"));
ReactDOM.render(
  <InfoCard dataRender={cardData} />,
  document.getElementById("cards_container")
);
ReactDOM.render(<FooterText />, document.getElementById("footer"));
