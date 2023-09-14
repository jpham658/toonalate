import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";

const handleClick = (e) => {
    console.log("click")
}

const test = (
    <div>
        <h1>Toonalate</h1>
        <button onClick={handleClick}>Translate text</button>
    </div>
);

const container = document.createElement("div");

document.body.appendChild(container);
const root = createRoot(container);
root.render(test);