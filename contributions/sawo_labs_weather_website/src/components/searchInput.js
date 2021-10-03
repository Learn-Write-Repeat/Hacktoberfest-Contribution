import React, { useEffect, useState } from "react";
import { Container, Button, Form, FormGroup, Input } from "reactstrap";
import { FiSearch } from "react-icons/fi";
import { getCityImageUrl } from "../Api/imageApi";
import { getCityWeatherData } from "../Api/weatherApi";

const SearchInput = ({
  cityName,
  setCityName,
  setIsUserLoggedIn,
  isUserLoggedIn,
  setCityData,
  setLoading,
}) => {
  const [imgUrl, setImgUrl] = useState();
  const [weatherData, setWeatherData] = useState();

  const handleSearch = async (e) => {
    setLoading(() => true);
    e.preventDefault();
    if (isUserLoggedIn !== true) {
      setIsUserLoggedIn(false);
      setLoading(() => false);
    } else if (isUserLoggedIn === true) {
      await getCityImageUrl(cityName, setImgUrl);
      await getCityWeatherData(cityName, setWeatherData);
      setCityName("");
    }
  };

  useEffect(() => {
    if (imgUrl && weatherData) {
      const data = {
        imageUrl: imgUrl,
        condition: weatherData.current.condition.text,
        conditionIcon: "https:" + weatherData.current.condition.icon,
        feelTempDegC: weatherData.current.feelslike_c,
        actualTempDegC: weatherData.current.temp_c,
        day: weatherData.current.is_day,
        city: weatherData.location.name,
        region: weatherData.location.region,
        country: weatherData.location.country,
        lat: weatherData.location.lat,
        lon: weatherData.location.lon,
        dateTime: weatherData.location.localtime,
      };
      setCityData(() => data);
      setLoading(false);
    }
  }, [imgUrl, weatherData,]);

  return (
    <Container>
      <Form onSubmit={(e) => handleSearch(e)}>
        <FormGroup className="d-flex justify-content-center">
          <Input
            onChange={(e) => setCityName(e.target.value)}
            type="text"
            style={{
              borderTopLeftRadius: "50px",
              borderBottomLeftRadius: "50px",
              minWidth: "275px"
            }}
            className="w-50 p-3"
            id="cityName"
            value={cityName}
            placeholder="Enter City Name"
          />
          <Button
            color="dark"
            style={{
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "50px",
            }}
            className="px-3"
          >
            <FiSearch className="text-white" size={30} />
          </Button>
        </FormGroup>{" "}
      </Form>
    </Container>
  );
};

export default SearchInput;
