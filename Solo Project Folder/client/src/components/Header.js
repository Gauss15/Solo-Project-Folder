import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = ({ isLoggedin, setIsLoggedin }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://localhost:8000/api/current-user', { withCredentials: true })
    .then((res) => {
      console.log(res.data)
      setUser(res.data);
    })
      .catch((err) => {
        console.log(err.data)
        console.log(err)
      });
  }, [isLoggedin]);

  const handleLogout = () => {
    axios.post('http://localhost:8000/logout',{}, { withCredentials: true })
    .then((res) => {
      setUser(null);
      navigate("/");
    })
    .catch((err) => console.log(err));
  };

  return (
    <div className="auth">
        {user ? (
          <div>
            <h1 className='display-header'>Welcome: {user.username}</h1>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <button className="button-78" role="button" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <span> | </span>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </div>
        )}
      </div>
  );
};

export default Header;