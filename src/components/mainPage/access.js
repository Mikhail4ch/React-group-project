import "./access.css";
import { Link } from "react-router-dom";

const Access = () => {
  return (
    <>
      <div className="main">

        <h3>Get access!</h3>
        <Link to='/SignIn'>Sign in</Link>
        <Link to='/SignUp'>Sign up</Link>
      </div>
    </>
  );
}

export default Access; 