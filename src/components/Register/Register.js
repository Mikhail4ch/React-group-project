import { Link } from "react-router-dom";
import { useState } from "react"
import "./Register.css"


const Register = ({ handleRegister }) => {
    const [itemEmail, setItemEmail] = useState("");
    const [itemPassword, setItemPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState("");


    const handleEmail = (event) => {
        setItemEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setItemPassword(event.target.value)
    }

    const handlePasswordConfirmation = (event) => {
        setPasswordConfirmation(event.target.value)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (itemPassword !== passwordConfirmation) {
            setError("Passwords do not match");
            return;
        } 

        try {
            await handleRegister(itemEmail, itemPassword);
        } catch (error) {
            setError("Registration failed. Please try again.");
        }
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
                    <label htmlFor="confirmPssw2">Confirm Password</label>
                    <input placeholder="Confirm your password" type="password" id="confirmPssw2" onChange={handlePasswordConfirmation} />
                    <div className="error-message">{error}</div>
                    <button type="submit">Create</button>
                </form>
            </div>
        </>
    );
}

export default Register;