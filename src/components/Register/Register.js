import { Link } from "react-router-dom";
import { useState, useEffect} from "react"
import "./Register.css"
import connection from "../connection/connection";

const Register = () => {
    const [itemEmail, setItemEmail] = useState("");
    const [itemPassword, setItemPassword] = useState("");


    const handleEmail = (event) => {
        setItemEmail (event.target.value)
    }

    const handlePassword = (event) => {
        setItemPassword (event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const createUser = async(itemEmail,itemPassword) => {
        try {
            const response = await connection.post('/user/register', {email: itemEmail, password: itemPassword})
            console.log(response.data)
            
        } catch (error) {
            console.log(error.message)
        }
      }

      useEffect(() => {
        createUser(itemEmail,itemPassword)
    },[itemEmail,itemPassword])

    return (  
      <>
            <div className="Register">
                <h3> Registration page </h3>
                <Link to='/'> Move back </Link>
                <form onSubmit={handleSubmit}>
                    <label for="eml2">Email</label>
                    <input placeholder="Enter your email" type="email" id="eml2" onChange={handleEmail} />
                    <label for="pssw2">Password</label>
                    <input placeholder="Enter your password" type="password" id="pssw2" onChange={handlePassword} />
                    <button type="submit"> Create </button>
                </form>
            </div>
        </>
    );
  }

  export default Register 