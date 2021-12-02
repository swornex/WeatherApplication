const { response } = require("express");
const request = require("postman-request");

const geoCode = (location) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        location
    )}.json?access_token=pk.eyJ1Ijoic3dhYXkiLCJhIjoiY2t3bWF4dWQzMmFiNDJubm9pM3Fpa2k0cCJ9.JwnUWseFBuSRnLT5WCuIcg&limit=1`;

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            console.log("ERROR!!");
        }
        console.log(body.features[0].geometry.coordinates);
    });
};

geoCode("New York");

module.exports = geoCode;
