import {useContext} from "react"; 
import WeatherContainer from "./Components/WeatherContainer/WeatherContainer.js";
import WeatherForcast from "./Components/WeatherForcast/WeatherForcast.js";
import SideBar from "./Components/SideBar/SideBar.js";
import Context from "./ContextApi/ContextApi"

import "./App.css";
const App = () => {
  const {info } = useContext(Context);

  return (
    <div className="App">
      <div className="leftBar">
        <WeatherContainer />
        <WeatherForcast />
      </div>
      <div className={ info ? "none" : "sidebar" }>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
