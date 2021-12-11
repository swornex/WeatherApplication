const postmanRequest = require("postman-request");

const forecast = (coordinates) => {
    const url = `http://api.weatherstack.com/current?access_key=b99023ef8db947137d82c53005916503&query=${coordinates[1]},${coordinates[0]}`;
    const predict = () =>
        new Promise((resolve, reject) => {
            postmanRequest({ url, json: true }, (error, response, body) => {
                if (error) {
                    reject("Error");
                } else {
                    const {
                        temperature,
                        weather_descriptions: description,
                        wind_degree,
                        humidity
                    } = body.current;
                    resolve({
                        temperature,
                        description: description[0],
                        wind_degree,
                        humidity
                    });
                }
            });
        });
    return predict();
};

module.exports = forecast;
