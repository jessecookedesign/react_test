import react, { Component } from "react";

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

export default cardData;
