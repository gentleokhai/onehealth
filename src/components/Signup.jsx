//Signup page
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Signup = () => {
  return (
    <>
      <div className="flex h-screen pt-24">
        {/* Left Side Image */}
        <div className="w-1/2 hidden md:flex items-center justify-center">
          <img
            src="/assets/signpup.png"
            alt="Signup"
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16">
          {/* Signup Header */}
          <h2 className="text-[#026979] font-inter font-normal text-[40px] leading-[48px] mb-6">
            Sign Up
          </h2>

          {/* Form */}
          <form>
            <div className="mb-4 flex gap-4">
              {/* First Name */}
              <div className="w-1/2">
                <label className="block text-gray-600">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="w-1/2">
                <label className="block text-gray-600">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600">Designation</label>
              <select
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              >
                <option value="">Select Designation</option>
                <option value="Medical Doctor">Medical Doctor</option>
                <option value="Nurse">Nurse</option>
                <option value="Pharmacist">Pharmacist</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-600">License Number</label>
              <input
                type="text"
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

            <div className="mb-4">
              <label className="block text-gray-600">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600">Location</label>
              <select
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              >
                <option value="">Select Location</option>
                <option value="New York">Lagos</option>
                <option value="London">Abuja</option>
                <option value="Toronto">Accra</option>
              </select>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" required />
              <span className="text-gray-600">
                I've read and agreed with{" "}
                <Link to="/terms" className="text-teal-500">
                  Terms and Conditions
                </Link>
              </span>
            </div>

            {/* Sign Up Button */}
            <button className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition mt-4">
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
