import './App.css'
import React, { useState } from "react";
//import { BrowserRouter,useNavigate } from 'react-router-dom';
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //const navigate=useNavigate();

  
  const handleSubmit = async (event) => {
     event.preventDefault(); // prevent form subission from refreshing the page
    
     try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const user = await response.json();
        localStorage.setItem('user', JSON.stringify(user));
       //navigate("/dashboard")
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      console.error(error);
      setError('Something went wrong. Please try again later.');
    }
    
    
  };

  return (
     
    <div>
      <header class="header">
        <img src="https://www.massmutual.com/global-images/logo_MM-white.svg" alt="massmutual"/>
      </header>
    
    <div className="login-page">
      <h1>Sign in</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <span>Sign in and start managing your leads!</span>
        <label>
          <input
            type="text"
            placeholder="username" 
            value={username}
            onChange={(event) => setUsername(event.target.value)} />
        </label>
        <br />
        <label>
          <input
            type="password"
            placeholder="password" 
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
    <footer class="footer">
  
  </footer>
    </div>

    
  );
}

export default LoginPage;