import React, { useState } from "react";

//clean use callback hook
const LocationBar = () => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [isErrorMessageVisible, setErrorMessageVisible] = useState(false);
  let errorMessage = "";

  const success = ({ coords }) => {
    const { latitude, longitude } = coords;
    setLocation({
      latitude,
      longitude
    });
    setLoading(false);
  };

  const error = () => {
    console.log("sorry unable to retrieve your location");
    setLoading(false);
  };

  const handleLocation = () => {
    setLoading(true);
    if (!navigator.geolocation) {
      errorMessage = "Geolocation is not supported by your browser";
      setLoading(false);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };
  const { latitude, longitude } = location;
  return (
    <div>
      <h2>Hungry?Order food from favourite restaurants near you</h2>
      <div className="">
        <input type="text" />
        {latitude} {longitude}
        <button onClick={handleLocation}>
          {loading ? "Getting your loction" : "get your current location"}
        </button>
        <button>FIND FOOD</button>
      </div>
    </div>
  );
};

export default LocationBar;
