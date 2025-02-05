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
        
        <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
          {[
            { icon: Phone, title: "Call us", details: ["+1-940-394-2948", "+1-389-385-3807"] },
            { icon: Mail, title: "Email us", details: ["support@brainwave.io", "contact@brainwave.io"] },
            { icon: MapPin, title: "Visit us", details: ["34 Madison Street, NY, USA 10005"] }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md">
                <item.icon className="text-teal-500" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                {item.details.map((line, i) => (
                  <p key={i} className="text-gray-700 text-lg">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="mt-12 px-6 max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <form>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="font-semibold mb-2">First & Last Name</label>
                <input type="text" placeholder="i.e John Doe" className="border p-4 w-full rounded-lg text-lg" />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold mb-2">Email</label>
                <input type="email" placeholder="i.e. john@mail.com" className="border p-4 w-full rounded-lg text-lg" />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold mb-2">Phone Number</label>
                <input type="text" placeholder="i.e. +1-234-567-7890" className="border p-4 w-full rounded-lg text-lg" />
              </div>

              <div className="flex flex-col">
                <label className="font-semibold mb-2">Subject</label>
                <input type="text" placeholder="i.e. I need help" className="border p-4 w-full rounded-lg text-lg" />
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <label className="font-semibold mb-2">Message</label>
              <textarea type="text" placeholder="Type your message" className="border p-4 w-full rounded-lg text-lg"></textarea>
            </div>

            <button className="bg-teal-500 hover:bg-teal-600 text-white w-64 py-3 rounded-lg mt-6 text-xl font-semibold shadow-md transition duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
