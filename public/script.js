const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", async (e) => {
    //prevent page from reloading after submitting.
    e.preventDefault();
    const weather = document.getElementById("weather");
    const location = document.getElementById("place");
    const place = document.getElementById("location").value;
    const data = await (await fetch("/weather?Location=" + place)).json();
    const { place_name, temperature, description, wind_degree, humidity } =
        data;
    location.innerText = ("Location", place_name);
    weather.innerText = `Temperature ${temperature} degree Celsius, ${description}, Wind-degree ${wind_degree}, Humidity ${humidity}`;
    weather.setAttribute("class", "fas fa-cloud");
    location.setAttribute("class", "fas fa-map-marker-alt");
});
