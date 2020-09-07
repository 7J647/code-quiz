// console.log("hello world");

//pseudocode
//1) welcome user and present rules
//2) click start button and timer countdown begins
//3)  question presented (multiple choice)
//4)  question answered 
//5)  event listener to see which one answered
//6)  if incorrect subtract time from clock
//7)  else present next question and repeat 4-6 above
//8)  if all questions answered or timer = 0 end game
//9)  user has option to save initials and store score

//create welcome header
var welcomeHeader = document.createElement ("h1");
//add content
welcomeHeader.textContent = "Welcome to the Quiz!";
//append and style
document.body.appendChild (welcomeHeader);
welcomeHeader.setAttribute("style", "text-align:center");

//create intro text
var introText = document.createElement ("p");
//add content
introText.textContent = "This is where all of the instructions will go";
//append and style
document.body.appendChild (introText);
introText.setAttribute("style", "text-align:center");



// //creating container for welcome screen
// var welcomeScreen = document.createElement("div");

// //adding content
// welcomeScreen.setAttribute("style", "textalign:center;");
// //append to body
// document.body.appendChild(welcomeScreen);

//     //creating h1 header
//     var welcomeText = welcomeScreen.createElement("h1");
//     //adding text content
//     welcomeText.textContent = "Welcome to the Quiz";
//     //appending to existing element
//     welcomeScreen.appendChild(welcomeText);

//     //creating text explaining quiz
//     var explainText = welcomeScreen.createElement("p");

