import "./mainPage.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="main">
        <h3>Homepage</h3>
        <Link to='/SignIn'>Sign in</Link>
        <Link to='/SignUp'>Sign up</Link>
      </div>
    </>
  );
}

export default Main; 