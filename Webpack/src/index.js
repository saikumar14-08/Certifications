import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const Greeting = () => (
  <>
    <h1> Hello, Sai</h1>
    <div id="image"></div>
  </>
);

const root = createRoot(document.getElementById("target"));
root.render(<Greeting />);
