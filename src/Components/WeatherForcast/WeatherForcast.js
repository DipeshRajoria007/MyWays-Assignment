import { useContext } from "react";
import Color from "../Color/Color";
import Context from "../../ContextApi/ContextApi";
import "./WeatherForcast.css";
import SUN from "../../assets/Sun.png";
import BREEZY from "../../assets/breezy.png";
import CLOUDY from "../../assets/cloudy.png";
import MOSTLY from "../../assets/mostly.png";
import PARTLY from "../../assets/partly.png";
import RAIN from "../../assets/rain.png";
import SHOWERS from "../../assets/showers.png";
import HorizontalScroll from "react-horizontal-scrolling";
const WeatherForcast = () => {
  const { info, setInfo, data } = useContext(Context);
  const forecast = data.results.channel.item.forecast;
  const switchSRC = (params) =>{
    switch(params)
    {
      case "Breezy" : return BREEZY;
      case "Partly Cloudy" : return PARTLY;
      case "Cloudy" : return CLOUDY;
      case "Rain" : return RAIN;
      case "Mostly Cloudy" : return MOSTLY;
      case "Scattered Showers" : return SHOWERS;
    }
  }
  return (
    <main className="WeatherForcast">
      <Color
        style={{ top: "0px", left: "0px", backgroundColor: "var(--bg-sky)" }}
      />
      <Color
        style={{
          bottom: "0px",
          right: "0px",
          backgroundColor: "var(--bg-blue)",
        }}
      />
      <header>Todays forecast for new York City , NY , United States </header>
      <div className="timing">
        <HorizontalScroll>
          { 
           forecast.map((fore, idx) => (
            <div key={idx} className="group">
              <div className="card">
                <p>{fore.date}</p>
                <h1>{fore.day}</h1> <img src={switchSRC(fore.text)} />
                <p>{fore.text}</p>
                <p>
                  High : {fore.high} <br/> Low : {fore.low}
                </p>
              </div>
              <div className="separator" aria-hidden="true"></div>
            </div>
          ))}
        </HorizontalScroll>
        {/* <div  className="card" > <h1>25</h1> <img src={SUN} /> <h2></h2> </div>
            <div className="separator" aria-hidden="true" ></div><div className="card" > <h1>25</h1> <img src={SUN} /> <h2></h2> </div>
            <div className="separator" aria-hidden="true" ></div><div className="card" > <h1>25</h1> <img src={SUN} /> <h2></h2> </div>
            <div className="separator" aria-hidden="true" ></div><div className="card" > <h1>25</h1> <img src={SUN} /> <h2></h2> </div> */}
      </div>
      <button
        className="btn"
        onClick={() => {
          console.log(info);
          setInfo(!info);
        }}
      >
        {info ? <span>More Info</span> : <span>Hide Info</span>}
      </button>
    </main>
  );
};

export default WeatherForcast;
