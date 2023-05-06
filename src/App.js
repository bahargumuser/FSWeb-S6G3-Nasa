import React from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import Nasa from "./components/nasa";
import { useState, useEffect } from "react";
import APOD from "./APOD";

function App() {
  const [data, setData] = useState("");
  const [tarih, setTarih] = useState("2023-02-02");

  const changeHandler = (e) => {
    setTarih(e);
  };

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod` + tarih)
      .then((response) => setData(response.data))

      .catch((error) => console.log(error));
  }, [tarih]);

  return (
    <div className="App">
      <Header />
      <Search changeHandler={changeHandler} tarih={tarih} />
      <Nasa data={data} />
      <div>
        <APOD />
      </div>

      <p>
        NASA uygulamasını yapmak için README.md dosyasıdaki talimatları takip
        edin İyi eğlenceler!{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
    </div>
  );
}

export default App;
