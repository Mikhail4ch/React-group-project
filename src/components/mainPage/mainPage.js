import "./mainPage.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="main">

        <h3>Homepage</h3>

        <h3 className="weather-app"> <Link to='/App'>Weather app</Link> </h3>

     
      </div>
    </>
  );
}

export default Main; 