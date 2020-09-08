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
    startButton.remove();
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
      question.setAttribute("style", "text-align:left; padding: 20px; font-weight:bold; margin:auto; width:62%;");
     
      //creating a container for each button, starting with button a
      var buttonsAnswerA = document.createElement("div");
      //add content
      buttonsAnswerA.setAttribute("style", "margin-left:22%", "text-align:left;");
            //creating multiple choice a) button
            var buttonA = document.createElement ("button");
            //add content
            buttonA.textContent = "1. strings";
            buttonA.setAttribute("class","btn-primary")
            buttonA.setAttribute("style","background-color:purple; border-color:purple; margin:5px;");
            //add listener
            buttonA.addEventListener("click", function() {
                alert("Wrong Answer!");
            })

            //append to container
            buttonsAnswerA.appendChild(buttonA);
      //append to document
      document.body.appendChild(buttonsAnswerA);


      //creating a container for button b
      var buttonsAnswerB = document.createElement("div");
      //add content
      buttonsAnswerB.setAttribute("style", "margin-left:22%", "text-align:left;");
            //creating multiple choice a) button
            var buttonB = document.createElement ("button");
            //add content
            buttonB.textContent = "2. booleans";
            buttonB.setAttribute("class","btn-primary")
            buttonB.setAttribute("style","background-color:purple; border-color:purple; margin:5px;");
            //add listener
            buttonB.addEventListener("click", function() {
                // secondsLeft-10;
                alert("Wrong Answer!");
            })
            //append to container
            buttonsAnswerB.appendChild(buttonB);
      //append to document
      document.body.appendChild(buttonsAnswerB);
   
      //creating a container for button c
      var buttonsAnswerC = document.createElement("div");
      //add content
      buttonsAnswerC.setAttribute("style", "margin-left:22%", "text-align:left;");
            //creating multiple choice a) button
            var buttonC = document.createElement ("button");
            //add content
            buttonC.textContent = "3. alerts";
            buttonC.setAttribute("class","btn-primary")
            buttonC.setAttribute("style","background-color:purple; border-color:purple; margin:5px;");
            //add listener
            buttonC.addEventListener("click", function() {
                alert("Correct!");
                buttonA.remove();
                buttonB.remove();
                buttonC.remove();
                buttonD.remove();
                questionTwo()
            })
            //append to container
            buttonsAnswerC.appendChild(buttonC);
      //append to document
      document.body.appendChild(buttonsAnswerC);

      //creating a container for button d
      var buttonsAnswerD = document.createElement("div");
      //add content
      buttonsAnswerD.setAttribute("style", "margin-left:22%", "text-align:left;");
            //creating multiple choice a) button
            var buttonD = document.createElement ("button");
            //add content
            buttonD.textContent = "4. numbers";
            buttonD.setAttribute("class","btn-primary")
            buttonD.setAttribute("style","background-color:purple; border-color:purple; margin:5px;");
            //add listener
            buttonD.addEventListener("click", function() {
                // secondsLeft-10;
                alert("Wrong Answer!");
            })
            //append to container
            buttonsAnswerD.appendChild(buttonD);
      //append to document
      document.body.appendChild(buttonsAnswerD);

    }       
// LEFT OFF HERE
       
function questionTwo() {
    question.textContent = "Arrays in Javascript can be used to store '___________________'";
    question.setAttribute("style", "text-align:left; padding: 20px; font-weight:bold; margin:auto; width:62%;");
     
    //creating a container for each button, starting with button a
    var buttonsAnswerA = document.createElement("div");
    //add content
    buttonsAnswerA.setAttribute("style", "margin-left:22%", "text-align:left;");
          //creating multiple choice a) button
          var buttonA = document.createElement ("button");
          //add content
          buttonA.textContent = "1. numbers and strings";
          buttonA.setAttribute("class","btn-primary")
          buttonA.setAttribute("style","background-color:purple; border-color:purple; margin:5px;");
          //add listener
          buttonA.addEventListener("click", function() {
              alert("Wrong Answer!");
          })

          //append to container
          buttonsAnswerA.appendChild(buttonA);
    //append to document
    document.body.appendChild(buttonsAnswerA);


    //creating a container for button b
    var buttonsAnswerB = document.createElement("div");
    //add content
    buttonsAnswerB.setAttribute("style", "margin-left:22%", "text-align:left;");
          //creating multiple choice a) button
          var buttonB = document.createElement ("button");
          //add content
          buttonB.textContent = "2. other arrays";
          buttonB.setAttribute("class","btn-primary")
          buttonB.setAttribute("style","background-color:purple; border-color:purple; margin:5px;");
          //add listener
          buttonB.addEventListener("click", function() {
              secondsLeft-10;
              alert("Wrong Answer!");
          })
          //append to container
          buttonsAnswerB.appendChild(buttonB);
    //append to document
    document.body.appendChild(buttonsAnswerB);
 
    //creating a container for button c
    var buttonsAnswerC = document.createElement("div");
    //add content
    buttonsAnswerC.setAttribute("style", "margin-left:22%", "text-align:left;");
          //creating multiple choice a) button
          var buttonC = document.createElement ("button");
          //add content
          buttonC.textContent = "3. booleans";
          buttonC.setAttribute("class","btn-primary")
          buttonC.setAttribute("style","background-color:purple; border-color:purple; margin:5px;");
          //add listener
          buttonC.addEventListener("click", function() {
              alert("Wrong Answer!");
          })
          //append to container
          buttonsAnswerC.appendChild(buttonC);
    //append to document
    document.body.appendChild(buttonsAnswerC);

    //creating a container for button d
    var buttonsAnswerD = document.createElement("div");
    //add content
    buttonsAnswerD.setAttribute("style", "margin-left:22%", "text-align:left;");
          //creating multiple choice a) button
          var buttonD = document.createElement ("button");
          //add content
          buttonD.textContent = "4. all of the above";
          buttonD.setAttribute("class","btn-primary")
          buttonD.setAttribute("style","background-color:purple; border-color:purple; margin:5px;");
          //add listener
          buttonD.addEventListener("click", function() {
            alert("Correct!");
            buttonA.remove();
            buttonB.remove();
            buttonC.remove();
            buttonD.remove();
            questionThree()
        })  
          //append to container
          buttonsAnswerD.appendChild(buttonD);
    //append to document
    document.body.appendChild(buttonsAnswerD);

  }  
   //LEFT OFF HERE

   function questionThree() {
    question.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    question.setAttribute("style", "text-align:left; padding: 20px; font-weight:bold; margin:auto; width:62%;");
     
    //creating a container for each button, starting with button a
    var buttonsAnswerA = document.createElement("div");
    //add content
    buttonsAnswerA.setAttribute("style", "margin-left:22%", "text-align:left;");
          //creating multiple choice a) button
          var buttonA = document.createElement ("button");
          //add content
          buttonA.textContent = "1. Javascript";
          buttonA.setAttribute("class","btn-primary")
          buttonA.setAttribute("style","background-color:purple; border-color:purple; margin:5px;");
          //add listener
          buttonA.addEventListener("click", function() {
              alert("Wrong Answer!");
          })

          //append to container
          buttonsAnswerA.appendChild(buttonA);
    //append to document
    document.body.appendChild(buttonsAnswerA);


    //creating a container for button b
    var buttonsAnswerB = document.createElement("div");
    //add content
    buttonsAnswerB.setAttribute("style", "margin-left:22%", "text-align:left;");
          //creating multiple choice a) button
          var buttonB = document.createElement ("button");
          //add content
          buttonB.textContent = "2. Terminal/Bash";
          buttonB.setAttribute("class","btn-primary")
          buttonB.setAttribute("style","background-color:purple; border-color:purple; margin:5px;");
          //add listener
          buttonB.addEventListener("click", function() {
              secondsLeft-10;
              alert("Wrong Answer!");
          })
          //append to container
          buttonsAnswerB.appendChild(buttonB);
    //append to document
    document.body.appendChild(buttonsAnswerB);
 
    //creating a container for button c
    var buttonsAnswerC = document.createElement("div");
    //add content
    buttonsAnswerC.setAttribute("style", "margin-left:22%", "text-align:left;");
          //creating multiple choice a) button
          var buttonC = document.createElement ("button");
          //add content
          buttonC.textContent = "3. for loops";
          buttonC.setAttribute("class","btn-primary")
          buttonC.setAttribute("style","background-color:purple; border-color:purple; margin:5px;");
          //add listener
          buttonC.addEventListener("click", function() {
              alert("Wrong Answer!");
          })
          //append to container
          buttonsAnswerC.appendChild(buttonC);
    //append to document
    document.body.appendChild(buttonsAnswerC);

    //creating a container for button d
    var buttonsAnswerD = document.createElement("div");
    //add content
    buttonsAnswerD.setAttribute("style", "margin-left:22%", "text-align:left;");
          //creating multiple choice a) button
          var buttonD = document.createElement ("button");
          //add content
          buttonD.textContent = "4. console.log";
          buttonD.setAttribute("class","btn-primary")
          buttonD.setAttribute("style","background-color:purple; border-color:purple; margin:5px;");
          //add listener
          buttonD.addEventListener("click", function() {
            alert("Correct!");
            buttonA.remove();
            buttonB.remove();
            buttonC.remove();
            buttonD.remove();
            questionFour()
        })  
          //append to container
          buttonsAnswerD.appendChild(buttonD);
    //append to document
    document.body.appendChild(buttonsAnswerD);

  } 

//LEFT OFF HERE



   
    // question.textContent = "Commonly used data types DO NOT include:";
    // question.setAttribute("style", "text-align:left; padding: 20px; font-weight:bold; margin:auto; width:62%;");
    // buttonContainer.setAttribute("style", "margin-left:17%", "text-align:left;");
    //         //creating multiple choice a) button
    //         var buttonA = document.createElement ("button");
    //         //add content
    //         buttonA.textContent = "1. strings";
    //         buttonA.setAttribute("class","btn-primary")
    //         buttonA.setAttribute("style","background-color:purple; border-color:purple;");
    //         //append to container
    //         buttonContainer.appendChild(buttonA);

    //         //creating multiple choice b) button
    //         var buttonB = document.createElement ("button");
    //         //add content
    //         buttonB.textContent = "1. strings";
    //         buttonB.setAttribute("class","btn-primary")
    //         buttonB.setAttribute("style","background-color:purple; border-color:purple;");
    //         //append to container
    //         buttonContainer.appendChild(buttonB);
    
     



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
