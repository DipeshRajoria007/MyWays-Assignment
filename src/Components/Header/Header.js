import React , {useContext} from "react";
import Context from "../../ContextApi/ContextApi"

import './Header.css';
import SUN from "../../assets/Sun.png";
import BREEZY from "../../assets/breezy.png";
import CLOUDY from "../../assets/cloudy.png";
import MOSTLY from "../../assets/mostly.png";
import PARTLY from "../../assets/partly.png";
import RAIN from "../../assets/rain.png";
import SHOWERS from "../../assets/showers.png";
const Header = () => {
  const {data} = useContext(Context);
  const title = data.results.channel.title;
  const last = data.results.channel.lastBuildDate;
  const titleData = data.results.channel.item.condition;
  console.log(data);
  const switchSRC = (params) =>{
    switch(params)
    {
      case "SUN" : return SUN;
      case "Breezy" : return BREEZY;
      case "Partly Cloudy" : return PARTLY;
      case "Cloudy" : return CLOUDY;
      case "Rain" : return RAIN;
      case "Mostly Cloudy" : return MOSTLY;
      case "Scattered Showers" : return SHOWERS;
    }
  }
  return (
    <div>
      <header className="header-header" >{title}</header>
      <div className="header-body">
        <div className="header-body-left" >
          <h1>{titleData.temp} F </h1>
          <div> {titleData.text} <p> Last Update : {last}</p></div>
        </div>
        <div className="header-body-right" >
          <img src={switchSRC(titleData.text)} alt="" className="header-weather " />
        </div>
      </div>
    </div>
  );
};

export default Header;
