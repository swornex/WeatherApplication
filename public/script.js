const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", async (e) => {
    //prevent page from reloading after submitting.
    e.preventDefault();
    const place = document.getElementById("location").value;
    const data = await (await fetch("/weather?Location=" + place)).json();
    const { place_name, temperature, description, wind_degree, humidity } =
        data;
    console.log("Location", place_name);
    console.log("Temperature", temperature, "degree Celsius");
    console.log("Description", description);
    console.log("Wind degree", wind_degree);
    console.log("Humidity", humidity);
});
