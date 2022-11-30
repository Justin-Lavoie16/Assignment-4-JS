if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Assignment-4-JS/sw.js", {
    scope: "/Assignment-4-JS/",
  })
}

"use strict"

function myButtonClicked() {
 
  const age = document.getElementById("age").value;
  const day = document.getElementById("day").value;
  
 if((age == "small") && (day == "no")) {
     document.getElementById("answers").innerHTML =
      ("You are buying a small poutine with no cheese");
    
} else if((age == "small") && (day == "yes")) {
    document.getElementById("answers").innerHTML =
      ("You are buying a small poutine with cheese");

 } else if((age == "medium") && (day == "no")) {
    document.getElementById("answers").innerHTML =
      ("You are buying a medium poutine with no cheese.");

 } else if((age == "medium") && (day == "yes")) {
    document.getElementById("answers").innerHTML =
      ("You are buying a medium poutine with cheese");

 } else if((age == "big") && (day == "no")) {
    document.getElementById("answers").innerHTML =
      ("You are buying a large poutine with no cheese");

 } else if((age == "big") && (day == "yes")) {
    document.getElementById("answers").innerHTML =
      ("You are buying a large poutine with cheese");

 } else {
    document.getElementById("answers").innerHTML =
      ("Uh, are you going to get something??");
}
}