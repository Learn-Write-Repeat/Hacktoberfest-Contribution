const axios = require("axios").default;

export const getCityWeatherData = async (cityName, setWeatherData) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: { q: cityName, days: "3" },
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setWeatherData(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
