//Login page
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

const Login = () => {
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
          {/* Login Header */}
          <h2 className="text-[#026979] font-inter font-normal text-[40px] leading-[48px] text-center mb-6">
            Login
          </h2>

          {/* Form */}
          <form>
            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400" 
                required 
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600">Password</label>
              <input 
                type="password" 
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
