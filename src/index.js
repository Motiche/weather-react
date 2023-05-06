import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UnitChange from "./UnitChange";
import Search_box from "./Search_box";
import Selected_Weather from "./Selected_Weather";
import Forcast_Card from "./Forcast_Card";

import Weather_Chart from "./Weather_Chart";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div class="container-md centered">
      <div class="row">
        <div class="col-md-3">
          <UnitChange />
        </div>{" "}
        <div class="col-md-2 d-none d-md-block"></div>
        <div class="col-md-7">
          <Search_box />
        </div>
      </div>
      <div class="row main ">
        <div class="col-lg-6">
          <Selected_Weather />
        </div>
        <div class="col-md-12 col-lg-6 d-none d-md-block pr-0 mr-0 mt-4">
          <Weather_Chart />
        </div>
      </div>
      <div class="row" id="forcast-cards">
        <Forcast_Card />
      </div>
    </div>
    <footer>
      Developed by Motiche <b>𓅓</b>, Available on{" "}
      <a href="https://github.com/Motiche/weather-react">Github</a>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
