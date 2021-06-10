import React, { useEffect, useState } from "react";

export default function Astroinspace() {
  const [data, setData] = useState({
    people: [
      {
        name: "Loading",
        craft: "Please Wait",
      },
    ],
  });
  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  return { data };
}
