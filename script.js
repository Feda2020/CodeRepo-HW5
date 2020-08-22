$(document).ready(function () {
    //set and disply the current date and time 
   var currentTime = function () {
     $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
   };
      currentTime()
      setInterval(currentTime, 1000)
  //Time blocks arrays
  var timeSlots = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"]
    
    //timeSlots for each 
    for(var i = 0; i < timeSlots.length; i++) {
     var newDiv = $("<div>");
     var timeDiv = $("<div>");
     //the text area where the description should go
     var descriptionDiv = $("<textarea>");
     var buttonEl = $("<button>");
     var iconEl = $("<i>");

     //attr. for the hour blocks
     newDiv.attr("hour", timeSlots[i]);
     newDiv.attr("class", "row");

     //description attr. 
     descriptionDiv.attr("class", "description col-10")
     descriptionDiv.attr("data-hour", timeSlots[i])
     timeDiv.attr("class", "hour col-1")

     //save button attr.
     buttonEl.attr("class", "saveBtn col-1")
     iconEl.attr("class", "fas fa-save")


     //appending the container elements
     $(".container").append(newDiv)
     newDiv.append(timeDiv)
     newDiv.append(descriptionDiv)
     newDiv.append(buttonEl)

     buttonEl.append(iconEl)
     
     timeDiv.text(timeSlots[i])

     //change row color according to the time
      var currentTime = moment().hour();
      $("textarea").each(function(index, array) {
        var dataText = parseInt($(this).attr("data-hour"));
        if (dataText === currentTime) {
          $(this).addClass("present");
        } else if (dataText > currentTime ) {
          $(this).addClass("future");
      } else {
          $(this).addClass("past");
      }
      });

    }
      
    $(".saveBtn").click(function() {
      localStorage.setItem(timeSlots, descriptionDiv);
     
    });
    
        
    
    

})
//condition to check past present and future time slots
//date and time displayed on jumbotron moment().format('MMMM Do YYYY, h:mm:ss a');
//localstorage.getItem() localstorage.setItem() on button click keyword this
//hit use the word this