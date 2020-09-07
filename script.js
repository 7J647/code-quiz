// console.log("hello world");

//pseudocode
//1) welcome user and present rules, show timer clock
//2) click start button and timer countdown begins
//3)  question presented (multiple choice)
//4)  question answered 
//5)  event listener to see which one answered
//6)  if incorrect subtract time from clock
//7)  else present next question and repeat 4-6 above
//8)  if all questions answered or timer = 0 end game
//9)  user has option to save initials and store score

//create the high score link and timer container
var scoreTimer = document.createElement ("div");
    
    //add highscore content
    var highScore = document.createElement ("div");
    highScore.textContent = "View High Scores";
    highScore.setAttribute("style", "font-size:medium; text-align:left; margin-left:20px; float:left;")
    //append to container
    scoreTimer.appendChild(highScore);

    //add the timer
    var timer = document.createElement ("div");
    //add content
    timer.textContent = "Time Remaining = 60 seconds";
    timer.setAttribute("style", "font-size:medium; text-align:right; margin-right:20px; float:right;")
    //append to container
    scoreTimer.appendChild(timer);

//append to body
document.body.appendChild(scoreTimer);


// // //create questions/intro text container
var questionsIntro = document.createElement ("div");
//add padding to gap it down from the high score and timer
questionsIntro.setAttribute("style", "padding:50px;");

    //create welcome header/questions text
    var question = document.createElement ("h1");
    //add content and style
    question.textContent = "Coding Quiz Challenge";
    question.setAttribute("style", "text-align:center; font-weight:bold; padding:20px;");

    //append to questions/intro text container
    questionsIntro.appendChild (question);


    //create intro text
    var introText = document.createElement ("p");
    //add content with instructions and style
    introText.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    introText.setAttribute("style", "text-align:center; margin:auto; width:50%;");
    //append and style
    questionsIntro.appendChild (introText);

//append to body
document.body.appendChild(questionsIntro);

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
    question.textContent = "";
    introText.textContent = "";
    startButton.setAttribute("style", "visibility:hidden")
    setTime()
    questionOne()
})

//create function to start timer countdown
var secondsLeft = 60

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Time Remaining = " + secondsLeft + " seconds";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

  //create function to start questions

  function questionOne() {
      question.textContent = "Commonly used data types DO NOT include:";
      question.setAttribute("style", "margin-left: 300px; text-align:left; margin-top:20px; font-weight:bold; width:50%"); 
  }

  


// //create a container to hold the first question
// var questionContainer = document.createElement ("div");

// //add content

//     var questionOne = document.createElement ("h1");




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

//create function to start timer countdown

var secondsLeft = 60

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Time Remaining = " + secondsLeft + " seconds";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }



    // //create container to hold question and buttons, roughtly 1/3 over from the left
    // var questionContainer = document.createElement("div");
    // //add content
    // buttonContainer.setAttribute("style", "margin-left:33.3%");
    //     //create question
    //     var codeQuestions = document.createElement "h1";
    //     //add content to question
    //     codeQuestions.textContent = "This is the first question of the quiz";
    //     //append to the container
    //     questionContainer.appendChild(codeQuestions);
    // //append container to document
    // document.body.appendChild(questionContainer);

        //create question 



// //create welcome header
// var welcomeHeader = document.createElement ("h1");
// //add content
// welcomeHeader.textContent = "Welcome to the Quiz!";
// //append and style
// document.body.appendChild (welcomeHeader);
// welcomeHeader.setAttribute("style", "text-align:center");



// //create a container to hold the first question
// var questionContainer = document.createElement ("div");

// //add content

//     var questionOne = document.createElement ("h1");




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
