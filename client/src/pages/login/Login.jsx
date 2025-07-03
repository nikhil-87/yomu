import API from "../../api/config";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setError("");
    
    try {
      console.log("Attempting login for user:", userRef.current.value);
      const res = await API.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      console.log("Login successful:", res.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      console.error("Login error:", err);
      dispatch({ type: "LOGIN_FAILURE" });
      if (err.response) {
        setError(err.response.data.message || `Login failed: ${err.response.status}`);
      } else if (err.request) {
        setError("Network error: Could not connect to server");
      } else {
        setError(err.message || "An unexpected error occurred");
      }
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          {isFetching ? "Logging in..." : "Login"}
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
      {error && (
        <div style={{color:"red", marginTop:"10px", textAlign:"center"}}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
