

$(document).on('click', "#start", function () {
    $(this).hide();

    console.log("button clicked");

});

 // Timer loads (from Stopwatch activity)
 window.onload = function() {
    $("#start").on("click", timer.start);
  };
  
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