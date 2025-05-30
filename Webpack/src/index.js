
import React from 'react';
import { createRoot } from 'react-dom/client';

const Greeting = () => <h1> Hello, Sai</h1>

const root = createRoot(document.getElementById("target"));
root.render(<Greeting />)