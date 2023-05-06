import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function APOD() {
  const [apod, setApod] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=0cjEhEMk9ImpkyoZCNTYGcyhgD7MsiyrKGPJS3aU `
      )
      .then((response) => setApod(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <p>{data.copyright} </p>
      <img src={data.date} />
      <p>{data.description} </p>
    </div>
  );
}
export default APOD;
