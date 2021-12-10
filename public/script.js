const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", async (e) => {
    //prevent page from reloading after submitting.
    e.preventDefault();
    const place = document.getElementById("location").value;
    const coordinates = await (
        await fetch("/weather?Location=" + place)
    ).json();
    const longitude = coordinates[0];
    const latitude = coordinates[1];
    console.log(longitude, latitude);
});
