

$(document).on('click', "#start", function () {
    $("#container").empty();
    $("#game").css("display", "block");
    timer.start();
    setupOptions();

});
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  //prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  
  // Our stopwatch object
  var timer = {
    time: 45,
  
    start: function() {
      // DONE: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(timer.count, 1000);
        clockRunning = true;
      }
    },
   //set me clock to false 
   //clear the int id (set time out)
    count: function() {
      // DONE: increment time by 1, remember we cant use "this" here.
      timer.time--;
  
      // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
      //       and save the result in a variable.
      var converted = timer.timeConverter(timer.time);
      console.log(converted);
  
      // DONE: Use the variable we just created to show the converted time in the "display" div.
      $("#countDownTimer").text(converted);
    },
    timeConverter: function(t) {
      var minutes = Math.floor(t / 60);
      var seconds = t - minutes * 60;
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
      if (minutes === 0) {
        minutes = "00";
      } else if (minutes < 10) {
        minutes = "0" + minutes;
      }
  
      return minutes + ":" + seconds;
    }
  };

  // Question Array

var allQuestions = [
    {
      question: "What is the right answer?",
      choices: ["First", "Second", "Third"],
      correctAnswer: 1
    },
    
    {
      question: "What is the right answer?",
      choices: ["First", "Second", "Third"],
      correctAnswer: 0
    },
    
    {
      question: "What is the right answer?",
      choices: ["First", "Second", "Third"],
      correctAnswer: 2
    },
    
    {
      question: "What is the right answer?",
      choices: ["First", "Second", "Third"],
      correctAnswer: 0
    },
    
    {
      question: "What is the right answer?",
      choices: ["First", "Second", "Third"],
      correctAnswer: 1
    },
    
    {
      question: "What is the right answer?",
      choices: ["First", "Second", "Third"],
      correctAnswer: 1
    },
    
    ];
    
    var currentquestion = 0;
    var correctAnswers = 0;
    
    function setupOptions() {
      $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
      var options = allQuestions[currentquestion].choices;
      var formHtml = '';
      for (var i = 0; i < options.length; i++) {
        formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
          allQuestions[currentquestion].choices[i] + '</label></div><br/>';
      }
      $('#form').html(formHtml);
      $("#option0").prop('checked', true);
    };
    
    function checkAns() {
      if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
        correctAnswers++;
      };
    };
    
    $(document).ready(function() {
      
       
      
        $("#next").click(function(event) {
          event.preventDefault();
          checkAns();
          currentquestion++;
          if (currentquestion < allQuestions.length) {
            setupOptions();
            if (currentquestion == allQuestions.length - 1) {
              $('#next').html("Submit");
                $("#result").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
                $("#result").fadeIn(1500);

            };
      
          };
        });
      });