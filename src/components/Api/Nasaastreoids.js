import React, { useEffect, useState } from "react";
import * as moment from "moment";

export default function Nasaastreoids() {
  const [responseObj, setResponseObj] = useState([]);
  const maxDate = moment(new Date(), "YYYY-MM-DD").format();
  const formatteddate = moment(maxDate).format("YYYY-MM-DD");
  const getAstreoids = useEffect(() => {
    fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${maxDate}&end_date=${maxDate}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    )
      .then((data) => data.json())
      .then((data) =>
        setResponseObj(data.near_earth_objects[`${formatteddate}`])
      );
  }, []);

  return { responseObj };
}
