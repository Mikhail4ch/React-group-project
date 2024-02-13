import { Link } from "react-router-dom";
import "./Register.css"

const Register = () => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    return (  
      <>
            <div className="Register">
                <h3> Registration page </h3>
                <Link to='/'> Move back </Link>
                <form onSubmit={handleSubmit}>
                    <label for="eml2">Email</label>
                    <input placeholder="Enter your email" type="email" id="eml2" />
                    <label for="pssw2">Password</label>
                    <input placeholder="Enter your password" type="password" id="pssw2" />
                    <button type="submit"> Create </button>
                </form>
            </div>
        </>
    );
  }

  export default Register 