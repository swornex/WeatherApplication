const geoCode = require("../utils/geoCode");

const index = (request, response) => {
    response.render("weather");
};

const weather = async (request, response) => {
    try {
        const place = request.query.Location;
        const coordinates = await geoCode(place);
        response.send(coordinates);
    } catch (error) {
        response.status(400).send(error.message);
    }
};

module.exports = { index, weather };
