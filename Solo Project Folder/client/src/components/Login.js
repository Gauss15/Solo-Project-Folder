import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedin }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/login', user, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setIsLoggedin(true);
        navigate('/warframes');
      })
      .catch((err) => {
        console.log(err.response);
        setErrors(err.response.data);
      });
  };
  return (
    <div className="Display-page">
    <h1 id='login-header'>Wake up Tenno</h1>
    <form onSubmit={handleSubmit} className="create-edit-form">
      <label htmlFor="email">Email:</label>
      <input 
        type="email" 
        name="email" 
        value={user.email} 
        onChange={handleChange} />
        {/* {errors.email ? <p>{errors.email.message}</p> : null} */}

      <label htmlFor="password">Password:</label>
      <input 
        type="password" 
        name="password" 
        value={user.password} 
        onChange={handleChange} required/>
          {/* {errors.password ? <p>{errors.password.message}</p> : null} */}
    <br/>
      <button  className="button-78" role="button">Login</button>
    </form>
    {errors.error ? <p>{ errors.error }</p> : null}
  </div>
  );
};

export default Login;