const geoCode = require("../utils/geoCode");
const forecast = require("../utils/forecast");

const index = (request, response) => {
    response.render("weather");
};

const weather = async (request, response) => {
    try {
        const place = request.query.Location;
        const { place_name, coordinates } = await geoCode(place);
        // response.send(coordinates);
        const data = await forecast(coordinates);
        response.send({ ...data, place_name });
    } catch (error) {
        response.status(400).send(error.message);
    }
};

module.exports = { index, weather };
