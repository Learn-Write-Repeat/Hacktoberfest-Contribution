const axios = require("axios").default;

export const getCityImageUrl = async (cityName, setImgUrl) => {
  const options = {
    method: "GET",
    url: "https://bing-image-search1.p.rapidapi.com/images/search",
    params: { q: cityName },
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      return setImgUrl(response.data.value[0].contentUrl);
    })
    .catch(function (error) {
      console.error(error);
    });
};
