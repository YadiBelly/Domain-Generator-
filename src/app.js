/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var pronouns = ["the", "our", "my"];
  var adjs = ["great", "big"];
  var nouns = ["jogger", "racoon"];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        document.querySelector("#page").innerHTML += `<li>${pronoun +
          adj +
          noun}.com</li>`;
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
