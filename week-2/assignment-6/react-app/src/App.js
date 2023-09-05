// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import "./flexbox.css";

// set nav item component
function NavItem({ value }) {
  // passing data through props
  return (
    <li>
      <a href="#" className="NavItem">
        Item{value}
      </a>
    </li>
  );
}

// set banner component
function Banner() {
  // headerText: stores the text
  // setHeaderText is a function that can be used to change the text
  // useState hook is used as the initial text of headerText
  const [headerText, setHeaderText] = useState("Welcom Msssage");

  function handleClick() {
    setHeaderText("Have a Good Time!");
  }

  return (
    // set onClick prop, every time when banner is clicked, the handleClick() is invoked
    <div className="banner" onClick={handleClick}>
      <h1>{headerText}</h1>
    </div>
  );
}

function Container({ num, visible }) {
  return (
    <div className="container">
      <div className="row">
        <div class={`item ${visible}`}>Content Box{num}</div>
        <div class={`item ${visible}`}>Content Box{+num + 1}</div>
      </div>
      <div className="row">
        <div class={`item ${visible}`}>Content Box{+num + 2}</div>
        <div class={`item ${visible}`}>Content Box{+num + 3}</div>
      </div>
    </div>
  );
}

function Button() {
  const [visible, setVisible] = useState("hide");
  function handleClick() {
    setVisible("");
  }

  return (
    <>
      <div class="button" onClick={handleClick}>
        Call to Action
      </div>
      <Container num="5" visible={visible} />
    </>
  );
}

export default function App() {
  return (
    <>
      <header className="main-header">
        <div class="title">
          <img class="logo" src="logo.svg" alt="logo" />
          <h1 class="name">Website title</h1>
        </div>
        <ul class="main-nav">
          <NavItem value="1" />
          <NavItem value="2" />
          <NavItem value="3" />
          <NavItem value="4" />
        </ul>
      </header>
      <Banner />
      <section className="main-section">
        <h2>Section Title</h2>
        <Container num="1" visible="" />
        <Button />
      </section>
    </>
  );
}
