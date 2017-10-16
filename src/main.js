$(document).ready(function() {



  $("#submit-button").on("click", function(event) {

    event.preventDefault();
    var zipcode = $(".text-input").val();
    let endpoint = "https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=3897c2c1e66115af8ad1a7eaa829a13f"

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
