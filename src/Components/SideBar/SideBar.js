import React , {useContext} from "react";
import Context from "../../ContextApi/ContextApi"
import Color from "../../Components/Color/Color"
import './SideBar.css'
const SideBar = () => {
  const {data} = useContext(Context);
  const item = data.results.channel.item;
  const atmosphere = data.results.channel.atmosphere;
  const wind = data.results.channel.wind;
  const astronomy = data.results.channel.astronomy;
 
  return (
    <div className="SideBar" >
      
      <Color className="color" style={{top:"50%", left:"0px" ,backgroundColor:"var(--bg-sky)"  }}  />
      <Color className="color" style={{bottom:"0px", right:"0px" ,backgroundColor:"var(--bg-blue)"  }}  />
      <header> {item.title}</header>
      <h1>{item.condition.temp} F</h1>
      <h1>Feels Like {item.condition.text}</h1>
       <ul>
        <li className="list" ><p>Wind Chill</p> <p>{wind.chill}</p></li>
        <li className="list" ><p>Humidity</p> <p>{atmosphere.humidity}</p></li>
        <li className="list" ><p>Wind speed</p> <p>{wind.speed}</p></li>
        <li className="list" ><p>Pressure</p> <p>{atmosphere.pressure}</p></li>
        <li className="list" ><p>visibility</p> <p>{atmosphere.visibility}</p></li>
        <li className="list" ><p>Wind direction</p> <p>{wind.direction}</p></li>
        <li className="list" ><p>sunrise</p> <p>{astronomy.sunrise}</p></li>
        <li className="list" ><p>sunset</p> <p>{astronomy.sunset}</p></li>
       </ul>
    </div>
  )
}

export default SideBar