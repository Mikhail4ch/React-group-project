import "./mainPage.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="main">

        <h2>Homepage</h2>

        <h3> <Link to='/'>Weather app</Link> </h3>

        <Link to='/SignIn'>Sign in</Link>
        <Link to='/SignUp'>Sign up</Link>
      </div>
    </>
  );
}

export default Main; 