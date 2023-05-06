import "./index.css";

export default function Selected_Weather() {
  return (
    <div className="card align-items-center">
      <h1 id="City">City name</h1>
      <div>
        <h2 id="selected_city">Time</h2>
      </div>
      <div class="emoji" id="Weather-icon">
        ⛅
      </div>
      <div>
        <p>
          <div id="Looks">
            <b>Clear sky</b>
          </div>
          Tempreture:{" "}
          <span class="Temp" id="Temp-now">
            ?°C
          </span>
          <br />
          Todays feel:{" "}
          <span class="Temp" id="feel">
            ?°C
          </span>
          <br />
          Wind Speed: <span id="wind">?</span>
          <br />
          Humidity: <span id="humidity">?</span>
          <br />
        </p>
      </div>
    </div>
  );
}
