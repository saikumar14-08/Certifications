import React from "react";
import { createRoot } from "react-dom/client";

const Contact = () => (
  <>
    <h1> This is Contact page</h1>
  </>
);

const root = createRoot(document.getElementById("target"));
root.render(<Contact />);
