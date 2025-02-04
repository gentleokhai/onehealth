import { Mail, Phone, MapPin } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen pt-24 pb-16">
        {/* Header Section */}
        <div className="text-center py-16">
          <h1 className="text-5xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            We want to hear from you. Contact us using the following
          </p>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            details.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          {[{ icon: Phone, title: "Call us", details: ["+1-940-394-2948", "+1-389-385-3807"] },
            { icon: Mail, title: "Email us", details: ["support@brainwave.io", "contact@brainwave.io"] },
            { icon: MapPin, title: "Visit us", details: ["34 Madison Street, NY, USA 10005"] }].map((item, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
              <item.icon className="text-teal-500" size={40} />
              <h3 className="text-2xl font-semibold mt-3">{item.title}</h3>
              {item.details.map((line, i) => (
                <p key={i} className="text-gray-700 text-lg">{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="mt-12 px-6 max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <form>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="First & Last Name" className="border p-4 w-full rounded-lg text-lg" />
              <input type="email" placeholder="Email" className="border p-4 w-full rounded-lg text-lg" />
              <input type="text" placeholder="Phone Number" className="border p-4 w-full rounded-lg text-lg" />
              <input type="text" placeholder="Subject" className="border p-4 w-full rounded-lg text-lg" />
            </div>
            <textarea placeholder="Message" className="border p-4 w-full rounded-lg mt-6 h-40 text-lg"></textarea>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-4 rounded-lg mt-6 w-full text-xl font-semibold shadow-md transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
