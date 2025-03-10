import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://onehealth-api.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store user data and token
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard"); // Redirect after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Header />
      <div className="flex h-screen">
        {/* Left Side Image */}
        <div className="w-1/2 hidden md:flex items-center justify-center">
          <img
            src="/assets/login.png"
            alt="Login"
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16">
          <h2 className="text-[#026979] font-inter font-normal text-[40px] leading-[48px] text-center mb-6">
            Login
          </h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            <p className="text-gray-600 mt-4">
              <Link to="#" className="text-teal-500">Forgot password?</Link>
            </p>

            <button className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition mt-10">
              Sign in
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Don't have an account? <Link to="/signup" className="text-teal-500">Sign Up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
