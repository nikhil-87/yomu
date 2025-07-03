import API from "../../api/config";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setErrorMessage("");
    setLoading(true);
    
    try {
      console.log("Attempting to register user:", { username, email });
      const res = await API.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log("Registration successful:", res.data);
      res.data && window.location.replace("/login");
    } catch (err) {
      console.error("Registration error:", err);
      setError(true);
      if (err.response) {
        // Server responded with error status
        setErrorMessage(err.response.data.message || `Server error: ${err.response.status}`);
      } else if (err.request) {
        // Network error
        setErrorMessage("Network error: Could not connect to server");
      } else {
        // Other error
        setErrorMessage(err.message || "An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && (
        <div style={{color:"red", marginTop:"10px", textAlign:"center"}}>
          <p>Registration failed!</p>
          <p style={{fontSize:"14px"}}>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
