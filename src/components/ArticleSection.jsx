import React, { useRef } from "react";
import { FaHeartbeat } from "react-icons/fa";
import { BookOpen, Sprout, Mountain } from "lucide-react";

const articles = [
  {
    title: "Complete Nutrition",
    description:
      "The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is...",
    icon: <BookOpen size={32} className="text-teal-600" />,
    buttonText: "Read Now",
  },
  {
    title: "Relationship with Pets",
    description:
      "The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is...",
    icon: <FaHeartbeat size={32} className="text-teal-600" />,
    buttonText: "Read Now",
  },
  {
    title: "Why own a GreenHouse",
    description:
      "The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is...",
    icon: <Sprout size={32} className="text-teal-600" />,
    buttonText: "Read Now",
  },
  {
    title: "Survival by the River",
    description:
      "The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is...",
    icon: <Mountain size={32} className="text-teal-600" />,
    buttonText: "Book Now",
  },
  {
    title: "Survival by the River",
    description:
      "The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is...",
    icon: <Mountain size={32} className="text-teal-600" />,
    buttonText: "Book Now",
  },
  {
    title: "Survival by the River",
    description:
      "The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is...",
    icon: <Mountain size={32} className="text-teal-600" />,
    buttonText: "Book Now",
  },
  {
    title: "Survival by the River",
    description:
      "The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is...",
    icon: <Mountain size={32} className="text-teal-600" />,
    buttonText: "Book Now",
  },
  {
    title: "Survival by the River",
    description:
      "The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is...",
    icon: <Mountain size={32} className="text-teal-600" />,
    buttonText: "Book Now",
  },
  {
    title: "Survival by the River",
    description:
      "The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is...",
    icon: <Mountain size={32} className="text-teal-600" />,
    buttonText: "Book Now",
  },{
    title: "Survival by the River",
    description:
      "The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is...",
    icon: <Mountain size={32} className="text-teal-600" />,
    buttonText: "Book Now",
  },{
    title: "Survival by the River",
    description:
      "The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is...",
    icon: <Mountain size={32} className="text-teal-600" />,
    buttonText: "Book Now",
  },{
    title: "Survival by the River",
    description:
      "The exact cause of most types of diabetes is unknown. In all cases, sugar builds up in the bloodstream. This is...",
    icon: <Mountain size={32} className="text-teal-600" />,
    buttonText: "Book Now",
  },
];

const ArticlesSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-6 py-10 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            OneHealth Healthcare <span className="text-teal-600">Articles</span>
          </h2>
          <p className="text-gray-500 mt-2 max-w-md">
            Healthcare helps people maintain good health and prevent illness.
            Regular check-ups, vaccinations, and screenings can catch health
            issues early.
          </p>
        </div>
        {/* Scroll buttons */}
        <div className="hidden md:flex space-x-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            ◀
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Articles */}
      <div className="mt-6 flex space-x-4 overflow-x-auto scrollbar-hide" ref={scrollRef}>
        {articles.map((article, index) => (
          <div
            key={index}
            className="w-72 min-w-[250px] bg-white rounded-xl shadow-md p-6 flex-shrink-0"
          >
            <div className="flex justify-center">{article.icon}</div>
            <h3 className="font-semibold text-lg mt-4">{article.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{article.description}</p>
            <p className="text-teal-600 font-bold mt-4">FREE</p>
            <button className="mt-2 w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700">
              {article.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="mt-4 text-teal-600 font-medium cursor-pointer text-center">
        View More
      </div>
    </div>
  );
};

export default ArticlesSection;
