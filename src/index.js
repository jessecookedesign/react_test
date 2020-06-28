import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  return (
    <div id="app_container">
      <div id="area_nav" />
      <div id="cards_container" />
      <div id="footer" />
    </div>
  );
}

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
    address: "702 E 3rd St, Duluth, MN 55805",
    addresslink: "http://maps.google.com/?q=702 e 3rd st duluth mn 55805",
    website: "example.com",
    websitelink: "https://www.google.com",
    phone: "218-555-1234",
    phonelink: "tel: 1-218-555-5555",
    tag1: "freelancer",
    tag2: "creative"
  },
  {
    id: "2",
    imgsrc: "https://i.ibb.co/fqs783v/dspclogo.png",
    imgalt: "Duluth Screen Printing Co logo",
    name: "Duluth Screen Printing Co.",
    category: "printing",
    address: "702 E 3rd St, Duluth, MN 55805",
    addresslink: "http://maps.google.com/?q=702 e 3rd st duluth mn 55805",
    website: "example.com",
    websitelink: "https://www.google.com",
    phone: "218-555-1234",
    phonelink: "tel: 1-218-555-5555",
    tag1: "affordable",
    tag2: "eco-friendly"
  },
  {
    id: "3",
    imgsrc: "https://i.ibb.co/SDg1gcW/yourlogohere.jpg",
    imgalt: "Your logo here",
    name: "Business Name",
    category: "category here",
    address: "702 E 3rd St, Duluth, MN 55805",
    addresslink: "http://maps.google.com/?q=702 e 3rd st duluth mn 55805",
    website: "example.com",
    websitelink: "https://www.google.com",
    phone: "218-555-1234",
    phonelink: "tel: 1-218-555-5555",
    tag1: "tag one",
    tag2: "tag two"
  },
  {
    id: "4",
    name: "Business Name",
    category: "category here",
    address: "702 E 3rd St, Duluth, MN 55805",
    addresslink: "http://maps.google.com/?q=702 e 3rd st duluth mn 55805",
    website: "example.com",
    websitelink: "https://www.google.com",
    phone: "218-555-1234",
    phonelink: "tel: 1-218-555-5555"
  }
];

function InfoCard({ dataRender }) {
  return (
    <div id="main_card_container">
      {dataRender.map(data => (
        <div key={data.id} className="business_card_container">
          <div>
            <img src={data.imgsrc} alt={data.imgalt} border="0" />
            <h2>{data.name}</h2>
            <p className="business_card_category">{data.category}</p>
            <ul className="business_card_info">
              <li>
                <a href={data.addresslink} target="_blank">
                  <p>{data.address}</p>
                </a>
              </li>
              <li>
                <a href={data.websitelink} target="_blank">
                  <p>{data.website}</p>
                </a>
              </li>
              <li>
                <a href={data.phonelink} target="_blank">
                  <p>{data.phone}</p>
                </a>
              </li>
            </ul>
            <ul className="business_card_tags">
              <li>
                <p>{data.tag1}</p>
              </li>
              <li>
                <p>{data.tag2}</p>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function FooterText() {
  return <p className="footer_text">This site is built with ReactJS</p>;
}

{
  /* Render App */
}
ReactDOM.render(<App />, document.getElementById("root"));

{
  /* Render components into App */
}
ReactDOM.render(<MyNav />, document.getElementById("area_nav"));
ReactDOM.render(
  <InfoCard dataRender={cardData} />,
  document.getElementById("cards_container")
);
ReactDOM.render(<FooterText />, document.getElementById("footer"));
