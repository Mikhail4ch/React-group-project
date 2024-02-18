import { Link } from "react-router-dom";
import { useState } from "react";
import "./Register.css";


const Register = ({ handleRegister }) => {
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
        event.target.reset();
       handleRegister (itemEmail,itemPassword)
    }

   
    


    return (
        <>
            <div className="Register">
                <h3>Registration page</h3>
                <Link to='/'>Move back</Link>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="eml2">Email</label>
                    <input placeholder="Enter your email" type="email" id="eml2" onChange={handleEmail} />
                    <label htmlFor="pssw2">Password</label>
                    <input placeholder="Enter your password" type="password" id="pssw2" onChange={handlePassword} />
                    <button type="submit">Create</button>
                </form>
            </div>
        </>
    );
}

export default Register; 