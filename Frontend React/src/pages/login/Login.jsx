import React, { useState, useEffect } from "react";
import "./Login.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dashboard from "../../components/Dashboard/Dashboard";
import { GoogleLogin } from '@react-oauth/google';

function Login() {
  const [username, setUsername] = useState("");
  const [pwd, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSignedIn, setSignedIn] = useState(false)
  const [credential, setCredential] = useState(null);

  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", { username, pwd }, { withCredentials: true });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/")
      console.log(res.data)
    } catch (err) {
      setError(err.response.data);
    }
  };
  const googleSignIn = async () => {

  }

  return (
    <>
      {!isSignedIn ? (
        <div className="login">
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <label htmlFor="">Username</label>
            <input
              name="username"
              type="text"
              placeholder="johndoe"
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="">Password</label>
            <input
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <GoogleLogin 
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
                setSignedIn(true)
                setCredential(credentialResponse.credential)
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />;
            {error && error}
          </form>
        </div>) : <Dashboard auth={credential} />}
    </>
  );
}

export default Login;
