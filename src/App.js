import { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";


function App() {

  const [search, setSearch] = useState("");
  const [temp,setTemp]=useState("")
  const [status,setStatus]=useState("")
  const [location,setLocation]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
    findWeather()
    setSearch("")
    
  }

  const findWeather = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const unit = "metric";

    setTimeout( async() => {
      try {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=${unit}`;
        const response = await axios.get(URL);
        const temp = response.data.main.temp
        const status = response.data.weather[0].description;
        const location =response.data.name
        setTemp(temp)
        setStatus(status)
        setLocation(location)
        
      } catch (error) {
        alert("Location Not Found Try Nearest City");
      }
    }, 1000);
    
  }

  const thunder =status.includes("thunderstorm")
  const drizzling =status.includes("drizzle")
  const raining =status.includes("rain")
  const snow =status.includes("snow")
  const  sleeting=status.includes("sleet")
  const  mist=status.includes("mist")
  const  smoke=status.includes("smoke")
  const  haze=status.includes("haze")
  const  dust=status.includes("dust")
  const  fog=status.includes("fog")
  const  sand=status.includes("sand")
  const  ash=status.includes("ash")
  const  squall=status.includes("squall")
  const  tornado=status.includes("tornado")
  const  clear=status.includes("clear")
  const  clouds=status.includes("clouds")
  

  return (
    <div className={thunder ? "App4":drizzling ? "App2":raining ? "App3":snow ? "App6":sleeting ? "App6":mist ? "App7":smoke ? "App7":haze ? "App8":dust ? "App9":fog ? "App7":sand ? "App9":ash ? "App10":squall ? "App11":tornado ? "App12":clear ? "App1":clouds ? "App5":"App"}>
      <div className="sticky-top row">
        <Header title={"Weather Finder"} />
      </div>

      <Content search={search}
                setSearch={setSearch}
                handleSubmit={handleSubmit}
                temp={temp}
                status={status}
                location={location}
                />

      <div className="fixed-bottom">
        <Footer />
      </div>
    </div>
  );
}


export default App;
