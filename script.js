const apiKey = "fb3333adb488be9e61a9f3b0aeb7413a";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const cityName = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather-image");
const weather = document.querySelector(".weather");
const errDiv = document.querySelector(".err");
const errMessage = document.querySelector(".errMessage");


const weatherCall = async (city) => {
  //fetch data from the google map API
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  if(data.cod == 404) {
errMessage.innerHTML = data.message;
errDiv.style.display = "block";
weather.style.display = "none";
  } else if (data.cod == 200) {
//use the data to dynamically change the values of the selected city
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp)
     + "<sup>o</sup>C";
  document.querySelector(".humidity").innerHTML =
    data.main.humidity + "%";
  document.querySelector(".wind").innerHTML =
    data.wind.speed + "Km/H";

     //change the weather image based on the weather data. 
    switch(data.weather[0].main) {
      case "Clouds":
        weatherImg.src = "./images/clouds.png";
        break;
      case "Clear":
        weatherImg.src = "./images/clear.png";
        break;
      case "Rain":
        weatherImg.src = "./images/rain.png";
        break;
      case "Drizzle":
        weatherImg.src = "./images/drizzle.png";
        break;
      case "Mist":
        weatherImg.src = "./images/mist.png";
        break;
      default:
        weatherImg.src = "./images/rain.png";
        
    }  
    //change the value of the style to display the weather information
    errDiv.style.display = "none";
    weather.style.display = "block";
  }
    


};


//respond to the search button on the home page
//pass the value of the input to the api
btn.addEventListener("click", () => {
  weatherCall(cityName.value);



  
});