//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const name = "soovik ";
const title = "kundu";

const d = new Date();
let year = d.getFullYear();//const d = new Date("July 21, 1983 01:15:00");
                           //let year = d.getFullYear();

ReactDOM.render(
  <div>
    <h1>The paragraphs should say:</h1>
    <p>Created by {name + " " + title}</p>
    <p>Copyright {year}</p>
  </div>,

  document.getElementById("root")
);
