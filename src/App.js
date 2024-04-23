import RequireAuth from "./components/requireAuth";
import { Route, Routes } from "react-router-dom";
import Main from './components/mainPage/mainPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import WeatherApp from "./weatherApp";
import useAuth from "./components/hooks/useAuth";
import connection from "./components/connection/connection";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import { useNavigate } from 'react-router-dom';
import Access from "./components/mainPage/access";
import PersistLogin from "./components/persistLogin";



function App() {

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const createUser = async (itemEmail, itemPassword) => {
    try {
      const response = await connection.post('/user/register', { email: itemEmail, password: itemPassword })
      console.log(response.data)
      if (response.data) {
        alert("Account was successfuly created !")
      }
    } catch (error) {
      console.log(error.message);
    }
  }



  const validateUser = async (itemEmail, itemPassword) => {
    try {
      const response = await connection.post('/user/login', { email: itemEmail, password: itemPassword },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        });
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      setAuth({ accessToken })

      if (response.status) {
        alert("Enjoy the app!")
      }
      navigate('/App');

    } catch (error) {
      console.log(error.message)
    }
  }


  return (


    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Main />} />
        <Route path="/getAccess" element={<Access />} />
        <Route path="/SignIn" element={<Login handleLogin={validateUser} />} />
        <Route path="/SignUp" element={<Register handleRegister={createUser} />} />
        {/* protected route */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/App" element={<WeatherApp />} />
          </Route>
        </Route>
        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>


  );
}

export default App;