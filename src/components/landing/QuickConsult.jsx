import { FaHeartbeat, FaLungsVirus, FaSyringe, FaBriefcaseMedical } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { GiVirus, GiLungs } from "react-icons/gi";
import { Link } from "react-router-dom";

const QuickConsult = () => {
  const diseases = [
    { name: "Lasa Fever", icon: <FaHeartbeat /> },
    { name: "Yellow Fever", icon: <GiVirus /> },
    { name: "Ebola", icon: <FaLungsVirus /> },
    { name: "Avian Influenza", icon: <MdOutlineAirlineSeatReclineExtra /> },
    { name: "Dengue", icon: <FaSyringe /> },
    { name: "Monkey Pox", icon: <FaBriefcaseMedical /> },
    { name: "Cold Flu", icon: <FaBriefcaseMedical /> },
    { name: "Any Other", icon: <MdOutlineAirlineSeatReclineExtra /> },
    { name: "Bird Flu", icon: <GiLungs /> },
    { name: "Cholera", icon: <FaHeartbeat /> },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Quick <span className="text-black">Consult For</span></h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {diseases.map((disease, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-white shadow-md rounded-lg">
            <div className="w-10 h-10 flex items-center justify-center bg-teal-500 text-white rounded-full text-lg">
              {disease.icon}
            </div>
            <span className="text-gray-700">{disease.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <Link to="/all-diseases" className="text-teal-600 hover:underline">View All</Link>
      </div>
    </div>
  );
};

export default QuickConsult;
