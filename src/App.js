
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/mainPage/mainPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import WeatherApp from "./weatherApp";
import { useEffect, useState } from "react";
import connection from "./components/connection/connection";


function App() {

  const [auth, setAuth] = useState("");

  const createUser = async (itemEmail, itemPassword) => {
    try {
      const response = await connection.post('/user/register', { email: itemEmail, password: itemPassword })
      console.log(response.data);
      if (response.data) {
        alert ("Account was successfuly created !")
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    createUser()
  }, [])
 
  const validateUser = async (itemEmail, itemPassword) => {
    try {
        const response = await connection.post('/user/login', { email: itemEmail, password: itemPassword })
        setAuth(response.data)
        console.log(response.data)
   
    } catch (error) {
        console.log(error.message)
    }
}



useEffect(() => {
    validateUser()
}, [])



  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/SignIn" element={<Login handleLogin={validateUser} handleAuth={auth}/>} />
          <Route path="/SignUp" element={<Register handleRegister={createUser} />} />
          <Route path="/app" element={<WeatherApp />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;