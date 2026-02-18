import { useState } from "react";
import "../../styles/Auth.css";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });

      const { user, token } = response.data;

      login(user, token); // Update global state
      navigate("/home"); // 🔥 Navigate after success
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2 className="auth-title">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="auth-input"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="auth-input"
        />
        {error && <p>{error}</p>}
        <button type="submit" className="auth-button">
          Login
        </button>

        <p className="auth-text">
          Don’t have an account? <Link to={"/signup"}>Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
