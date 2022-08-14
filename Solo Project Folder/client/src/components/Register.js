import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = ({ setIsLoggedin }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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
      .post('http://localhost:8000/register', user, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setIsLoggedin(true);
        navigate('/warframes');
      })
      .catch((err) => {
        console.log(err.response);
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div className="Display-page">
    <h1 id='login-header'>Wake up Tenno</h1>
    <form onSubmit={handleSubmit} className="create-edit-form">
      <label htmlFor="username">Username:</label>
      <input 
        type="text" 
        name="username" 
        value={user.username} 
        onChange={handleChange} required />

      <label htmlFor="email">Email:</label>
      <input 
        type="email" 
        name="email" 
        value={user.email} 
        onChange={handleChange} required />

      <label htmlFor="password">Password:</label>
      <input 
        type="password" 
        name="password" 
        value={user.password} 
        onChange={handleChange} required />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        name="confirmPassword"
        value={user.confirmPassword}
        onChange={handleChange} required />
        {errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : null}

    <br/>
        <button className="submit-button">Register</button>
    </form>
  </div>
  );
};

export default Register;