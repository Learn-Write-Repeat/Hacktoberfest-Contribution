import React, { useEffect } from "react";
import Sawo from "sawo";

const SawoUser = ({
  setCityName,
  setUser,
  setIsUserLoggedIn,
  isUserLoggedIn,
  setLoading,
}) => {
  
  const config = {

    containerID: process.env.REACT_APP_SAWO_CONTAINER_ID,
    identifierType: process.env.REACT_APP_SAWO_IDENTIFIER_TYPE,
    apiKey: process.env.REACT_APP_SAWO_API_KEY,
    
    onSuccess: (payload) => {
      setUser(payload);
      setIsUserLoggedIn(true);
      setCityName("");
    },
  };

  useEffect(() => {
    setLoading(false);
    const sawo = new Sawo(config);
    if (isUserLoggedIn === false) {
      sawo.showForm();
    }
  }, [isUserLoggedIn]);

  return (
  <>
    {isUserLoggedIn === false ? (
    <div>
        <div
          style={{ maxWidth: "600px" }}
          className="bg-white weather-card text-dark p-3 mx-auto my-3 rounded"
        >
          <h5 className="text-center">
            Please Login to check your city's weather
          </h5>
        </div>
      <div
        id={process.env.REACT_APP_SAWO_CONTAINER_ID}
        style={{ height: "400px", maxWidth: "600px", padding: "50px"}}
        className="mx-auto weather-card bg-white rounded"
      ></div>
    </div>
    ) : null}
  </>
  );
};

export default SawoUser;
