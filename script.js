const searchData = (e) =>{
    const city = document.getElementById("search__city").value
    e.preventDefault()
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=eb3630ba6927179c43e4c3930dd7bf41&units=metric",
        context: document.body
      }).done(function(data) {
        $("#temp").html(data.main.temp+" C")
        console.log(data.name);
      });
}


