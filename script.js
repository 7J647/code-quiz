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
//add content with instructions
introText.textContent = "This is where all of the instructions will go";
//append and style
document.body.appendChild (introText);
introText.setAttribute("style", "text-align:center");

//create container to center button
var buttonContainer = document.createElement("div");

//add content
buttonContainer.setAttribute("style", "text-align:center");

        //creating get started button
        var startButton = document.createElement ("button");

        //add content
        startButton.textContent = "Start Quiz";
        startButton.setAttribute("class","btn-primary")
        startButton.setAttribute("style","background-color:purple; border-color:purple;");
        
        //append to container
         buttonContainer.appendChild(startButton);

//append container to body
document.body.appendChild(buttonContainer);

//add event listener
startButton.addEventListener("click", function() {
    //remove welcome headline, instructions, and button
    welcomeHeader.textContent = "";
    introText.textContent = "";
    startButton.setAttribute("style", "visibility:hidden")
})


//create function to start quiz

// function getStarted() {
//     //remove welcome headline and instructions
//     welcomeHeader.textContent = "";
//     introText.textContent = "";
    
//     //create first question
//     var firstQuestion = document.createElement("h1");
    
//     //add content
//     firstQuestion.textContent = "Commonly used data types do NOT include"
//     firstQuestion.setAttribute ("style, margin-left: 33.3%")

// }
