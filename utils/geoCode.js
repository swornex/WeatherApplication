const { response } = require("express");
const request = require("postman-request");

const geoCode = (location) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        location
    )}.json?access_token=pk.eyJ1Ijoic3dhYXkiLCJhIjoiY2t3bWF4dWQzMmFiNDJubm9pM3Fpa2k0cCJ9.JwnUWseFBuSRnLT5WCuIcg&limit=1`;

    const findCoordinates = () =>
        new Promise((resolve, reject) => {
            request({ url, json: true }, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(body.features[0].geometry.coordinates);
                }
            });
        });
    return findCoordinates();
};

module.exports = geoCode;
