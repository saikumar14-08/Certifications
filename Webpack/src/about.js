import React from "react";
import { createRoot } from "react-dom/client";

const About = () => (
  <>
    <h1> This is About page</h1>
  </>
);

const root = createRoot(document.getElementById("target"));
root.render(<About />);
