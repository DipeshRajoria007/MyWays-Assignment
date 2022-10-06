import Header from "../Header/Header";
import Color from "../Color/Color";

import "./WeatherContainer.css";
const WeatherContainer = () => {
 
  return (
    <main className="WeatherContainer" >
      <Color className="color" style={{top:"50%", left:"0px" ,backgroundColor:"var(--bg-sky)"  }}  />
      <Color className="color" style={{bottom:"0px", right:"0px" ,backgroundColor:"var(--bg-blue)"  }}  />
      <Header className="container" />
    </main>
  );
};

export default WeatherContainer;
