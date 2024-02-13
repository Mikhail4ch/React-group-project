import { Link } from "react-router-dom";
import "./Login.css"


const Login = () => {
   
    const handleSubmit = (event) => {
        event.preventDefault();
    }

   
    return (
        <>
            <div className="Login">
                <h3> Login page </h3>
                <Link to='/'> Move back </Link>
                <form onSubmit={handleSubmit}>
                    <label for="eml1">Email</label>
                    <input placeholder="Enter your email" type="email" id="eml1" />
                    <label for="pssw1">Password</label>
                    <input placeholder="Enter your password" type="password" id="pssw1" />
                    <button type="submit"> Submit </button>
                </form>
            </div>
        </>
    );
}

export default Login 