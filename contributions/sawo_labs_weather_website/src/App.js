import "./App.css";
import { useState } from "react";
import SearchInput from "./components/searchInput";
import SawoUser from "./SawoConfig/sawoUser";
import WeatherCard from "./components/weatherCard";
import Navbar from "./components/Navbar";

function App() {
  const [cityName, setCityName] = useState("");
  const [user, setUser] = useState();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState();
  const [cityData, setCityData] = useState();

  const [loading, setLoading] = useState(false);

  return (
    <>
      <Navbar />

      <div className="p-2 mt-3">
        <SearchInput
          cityName={cityName}
          setIsUserLoggedIn={setIsUserLoggedIn}
          isUserLoggedIn={isUserLoggedIn}
          setCityName={setCityName}
          setCityData={setCityData}
          setLoading={setLoading}
        />

        {user ? (
          <div
            style={{ maxWidth: "600px" }}
            className="bg-white weather-card text-dark p-2 mx-auto my-3"
          >
            <h5 className="text-center">
              HELLO, {user.identifier.split("@")[0].toUpperCase()}
            </h5>
          </div>
        ) : null}
        {loading ? <div className="loader">Loading...</div> : null}

        {cityData && !loading ? <WeatherCard cityData={cityData} /> : null}

        <SawoUser
          setCityName={setCityName}
          setIsUserLoggedIn={setIsUserLoggedIn}
          isUserLoggedIn={isUserLoggedIn}
          setUser={setUser}
          setLoading={setLoading}
        />
      </div>
    </>
  );
}

export default App;
