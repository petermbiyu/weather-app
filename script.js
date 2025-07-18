const cityName = document.getElementById(city);
const btn = document.querySelector(".btn");

const apiKey = "fb3333adb488be9e61a9f3b0aeb7413a";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=kisumu&appid=${apiKey}&units=metric`;

document.addEventListener("click", async () => {
  await weatherCall();
});

const weatherCall = async () => {
  const apiCall = await fetch(apiUrl);
  //   if (!apiCall.ok) {
  //     throw new Error(Response.status);
  //   }
  const data = await apiCall.json();
  console.log(data);

  document.getElementsByClassName("city")[0].innerHTML = data.name;
  document.getElementsByClassName("temp")[0].innerHTML =
    data.main.temp + "<sup>o</sup>C";
  document.getElementsByClassName("humidity")[0].innerHTML =
    data.main.humidity + "%";
  document.getElementsByClassName("wind")[0].innerHTML =
    data.wind.speed + "Km/H";
};
