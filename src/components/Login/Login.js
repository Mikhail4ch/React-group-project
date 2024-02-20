import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";



const Login = ({ handleLogin}) => {

    const [itemEmail, setItemEmail] = useState("");
    const [itemPassword, setItemPassword] = useState("");
    
   

    const handleEmail = (event) => {
        setItemEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setItemPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin(itemEmail, itemPassword)
        event.target.reset();
    }


    return (
        <>
            <div className="Login">
                <h3>Login page</h3>

                <Link to='/getAccess'>Move back</Link>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="eml1">Email</label>
                    <input placeholder="Enter your email" type="email" id="eml1" onChange={handleEmail} />
                    <label htmlFor="pssw1">Password</label>
                    <input placeholder="Enter your password" type="password" id="pssw1" onChange={handlePassword} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}


export default Login;



