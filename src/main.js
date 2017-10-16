$(document).ready(function() {



  $("#submit-button").on("click", function(event) {

    event.preventDefault();
    var zipcode = $(".text-input").val();
    let endpoint = "http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=3897c2c1e66115af8ad1a7eaa829a13f"

    $.ajax({
      method: 'GET',
      url: endpoint,
      data: $('form').serialize(),
      dataType: 'json',
      success: onSubmitReqSuccess
    });
  }) // end of click function

  function onSubmitReqSuccess(responseData) {



    let city = responseData.name;
    let temp = Math.round(responseData.main.temp);
    let weather = responseData.weather[0].description;
    let mintemp = responseData.main.temp_max;
    let maxtemp = responseData.main.temp_min;

    $("#city").text(city);
    $("#temperature").text(temp + '\xB0');
    $("#weather").text(`Currently: ${weather}`);
    $("#mintemp").text("min : " + mintemp);
    $("#maxtemp").text("max : " + maxtemp);

  }

})


/*

Here's an overview of the steps you'll follow to get your app to work...

STEPS

1. when the page loads
  - add an event listener to the button
2. When the button is clicked
  - grab the input
  - store the value
  - make an API request based on the input value
3. When the API response is returned
  - grab all the appropriate DOM elements
  - append the data to the DOM

*/
