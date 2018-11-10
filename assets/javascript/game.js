var correct=0;
var incorrect=0;
var unanswered =0;
var findArray=0;
var time = 10;
var intervalId= "";

var question1 = {
    question: "What is Michael Scott's middle name?",
    answerOptions:["Gary", "Richard", "William", "Creed"],
    values: ["correct", "incorrect", "incorrect", "incorrect"],
    answer: "Gary",
    image: "assets/images/Mgary.gif",
};

var question2 = {
    question: "Who is Jan Levinson?",
    answerOptions: ["The owner of Dunder Mifflin", "Michaels's boss and lover", "Pam's Mom", "A Dunder Mifflin customer"],
    values: ["incorrect", "correct", "incorrect", "incorrect"],
    answer: "Michael's boss and lover",
    image: "assets/images/jan.jpg"
    
};

var question3 ={
    question:"What character is Pam first engaged to?", 
    answerOptions: ["Ryan", "Darryl", "Roy", "Jim"],
    values: ["incorrect", "incorrect", "correct", "incorrect"],
    answer: "Roy",
    image: "assets/images/roy.jpg"
};

var question4 = {
    question: "What cat does Dwight lock in Angela's freezer?",
    answerOptions: ["Sprinkles", "Sugar", "Phillip", "Mittin"],
    values: ["correct", "incorrect", "incorrect", "incorrect"],
    answer: "Sprinkles",
    image: "assets/images/sprinkles.jpg"
};

    var question5 = {
    question:"What is the name of the character who works in HR?",
    answerOptions: ["Jan", "Phyllis", "Kelly", "Toby"],
    values: ["incorrect", "incorrect", "incorrect", "correct"],
    answer: "Toby",
    image: "assets/images/toby.png"  
};

var question6 = {
    question:"What is Meredith's sons name?",
    answerOptions: ["Sam", "Oscar", "Jake", "Tim"],
    values: ["incorrect", "incorrect", "correct", "incorrect"],
    answer: "Jake",
    image: "assets/images/jake.jpg"
};

var question7 = {
    question: "What kind of company does Bob Vance own?",
    answerOptions: ["Car company", "Paper Company", "Accounting", "Fridge Company"],
    values: ["incorrect", "incorrect", "incorrect", "correct"],
    answer: "Fridge Company",
    image: "assets/images/bobvance.jpg"
};

var question8 = {
    question:"Which character from Stamford is an ex convict?",
    answerOptions:["Andy", "Martin",  "Karen", "Roger"],
    values: ["incorrect", "correct", "incorrect", "incorrect"],
    answer: "Martin",
    image: "assets/images/mnash.jpg"
};

var question9 = {
    question: "How long did Michael work at Dunder Mifflin?",
    answerOptions: ["9,986,000 minutes", "12 years", "9,000,000 minutes", "2 months"],
    values: ["correct", "incorrect", "incorrect", "incorrect"],
    answer: "9,986,000 minutes",
    image: "assets/images/minutes.jpeg"
};

    var question10 = {
    question: "Who is the father of Angela's baby?",
    answerOptions:["Roy", "Robert", "Dwight", "Andy"],
    values: ["incorrect", "incorrect", "correct", "incorrect"],
    answer: "Dwight",
    image: 'assets/images/dwight.jpg'
};

var questionsArray =[question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]


// $(document).ready(function(){

    function start (click) {
        $(".answerDisplay").empty();
        // var startBtn = $("<button>");
        // startBtn.text("Start");
        // startBtn.addClass("btn btn-success startBtn");
        $(".startButton").append(startBtn);
        console.log("click");
    };
    
    function run() {
      intervalId = setInterval(decrement, 1000);
    };
    
    function decrement() {
      time--;
      $(".timer").html("<h4>Time Remaining: " + time + " Seconds</h4>");
      if (time == 0) {
        if (findArray < questionsArray.length-1) {
            setTimeout(function () {showQuestion(questionsArray[findArray])}, 2000);
            showSolution(questionsArray[findArray]);
            $(".questionDisplay").html("Incorrect!");
            stop();
            unanswered++;
          }
          else if (findArray < questionsArray.length) {
              setTimeout(function () {end(questionsArray[findArray])}, 2000);
              showSolution(questionsArray[findArray]);
            $(".questionDisplay").html("Incorrect!");
            stop();
            unanswered++;
          }
      };
    };
    
    function stop() {
      clearInterval(intervalId);
    };
    
    function showQuestion (obj) {
         time = 10;
        $(".timer").empty();
        $(".timer").html("<h4>Time Remaining: " + time + " Seconds</h4>");
        $(".questionDisplay").empty();
        $(".answerDisplay").empty();
        run ();
        $(".questionDisplay").html(obj.question);
        for (var i = 0; i < (obj).answerOptions.length; i++) {
            console.log(obj.answerOptions[i])
            var answerButton = $("<button>");
            answerButton.addClass("answer btn btn-info btn-lg btn-block answerBtn");
            answerButton.text(obj.answerOptions[i]);
            answerButton.attr("value", obj.values[i]);
            $(".answerDisplay").append(answerButton);
            $(".answerDisplay").append("<br>");
        };
    };
    
    function showSolution (obj) {
        $(".questionDisplay").empty();
        $(".answerDisplay").empty();
        $(".answerDisplay").html("<h3>The correct answer was " + obj.answer + "<br> </h3>");
        var characterImage = $("<img>");
        characterImage.attr("height", "250");
        characterImage.attr("src", obj.image);
        characterImage.addClass("character")
        $(".answerDisplay").append(characterImage);
        findArray++;
    };
    
    function start () {
        showQuestion(question1);
    };
    
    function answerSelect () {
        stop();
        if ($(this).attr("value") == "correct") {
            showSolution(questionsArray[findArray]);
            $(".questionDisplay").html("Correct!");
            correct++;
            if (findArray < questionsArray.length) {
                setTimeout(function () {showQuestion(questionsArray[findArray])}, 2000);
            }
            else if (findArray < questionsArray.length+1) {
                setTimeout(function () {end(questionsArray[findArray])}, 2000);
              }
        }
        else if ($(this).attr("value") == "incorrect") {
            showSolution(questionsArray[findArray]);
            $(".questionDisplay").html("Incorrect!");
            incorrect++;
            if (findArray < questionsArray.length) {
                setTimeout(function () {showQuestion(questionsArray[findArray])}, 2000);
            }
            else if (findArray< questionsArray.length+1) {
                setTimeout(function () {end(questionsArray[findArray])}, 2000);
              }
        }
    };
    
    function end () {
        $(".quesionDisplay").empty();
        $(".answerDisplay").empty();
        $(".questionDisplay").html("<h3>Here's how you did!<h3>");
        $(".answerDisplay").html("<p> Correct: " + correct + "</p>" + "<p> Incorrect: " + incorrect + "</p>" + "<p> Unanswered: " + unanswered + "</p>");
        var resetButton = $("<button>");
        resetButton.addClass("reset btn btn-danger answerBtn");
        resetButton.text("Start Over");
        $(".answerDisplay").append(resetButton);
    }
    
    function resetClick () {
        findArray = 0;
        incorrect = 0;
        correct = 0;
        unanswered = 0;
        start();
    }
    
    $(document).on("click", ".startBtn", start);
    
    $(document).on("click", ".answer", answerSelect);
    
    $(document).on("click", ".reset", resetClick);
    
    
    start();
    
        
    







    







    