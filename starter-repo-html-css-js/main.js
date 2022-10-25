/* first JS file! */
/**  DOM MANIPULATION  **/


// 1 - A SIMPLE MESSAGE BUTTON 

// First we need to find/get/grab the related piece in HTML
// declare a const variable to "grab" the html element 
// name it something intuitive in camelCase
// use the methods beginning in document.getElementBy... 



// write a function - something that will happen onClick 
// pay careful attention to syntax/punctuation here 


  // show a message when user clicks 

const myClickMsg = document.getElementById("message-btn");
function myClick(){
  window.alert("Hi! Thanks for clicking me 😄")
}


// 2 - CHANGE THE HTML ON SCREEN USING JS!

// declare and intialize a const variable to grab your HTML button
// declare and initialize a const variable to grab the HTML class/element/id you want to impact
// write a function to change text color
// THEN update HTML to have name of your function on click
// could create another button to undo this or create a radio button selection

// const myColorText = document.getElementById("color-text");

function myColorChange1() { 
  document.getElementById("color-text").style.color = "magenta";
}
function myColorChange2() {
  document.getElementById("color-text").style.color = "blue";
}


// 3 - MORE COMPLEXITY - 3 PIECES WORKING TOGETHER

// Now add 3 things to work together 
// add 3 CONST variables to hold interactive contennt

const label = document.getElementById("name-label");
const input = document.getElementById("name-input");
const button = document.getElementById("name-submit");

let userName;

function updateName(){
  userName = input.value
  window.alert(`Wow! Love that name, ${userName}!`)
  label.innerText=`Your pet name is ${userName}. Change it here:`
  button.innerText="Change"
}

const label = document.getElementById("type-label");
const input = document.getElementById("type-input");
const button = document.getElementById("type-submit");

let userType;

function updateType(){
  userType = input.value
  window.alert(`Wow! Love that name, ${userType}!`)
  label.innerText=`Your pet name is ${userType}. Change it here:`
  button.innerText="Change"
}

   // update the name using the value of the input element



   // use the user's name in a window alert using templating
   // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals


