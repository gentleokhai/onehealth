import { Link } from "react-router-dom";
import Header from './Header';
import Footer from'./Footer';

const Signup = () => {
  return (
    <>
        <Header />
        <div className="flex h-screen">
      {/* Left Side Image */}
      <div className="w-1/2 hidden md:block">
        <img
          src="https://source.unsplash.com/800x600/?doctor,medicine"
          alt="Signup"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

        <form>
          <div className="mb-4">
            <label className="block text-gray-600">Full Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400" required />
          </div>

          <button className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition">Sign Up</button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-teal-500">Login</Link>
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Signup;
