import React, { useRef } from "react";
import { FaPaw, FaTree } from "react-icons/fa";
import { BookOpen, Sprout, Mountain, Stethoscope, Dumbbell, Brain, Heart } from "lucide-react";

const articles = [
  {
    title: "Complete Nutrition",
    description:
      "Discover the essential nutrients your body needs for optimal health. Learn how to balance your diet effectively.",
    icon: <BookOpen size={32} className="text-teal-600" />,
    buttonText: "Read Now",
  },
  {
    title: "Relationship with Pets",
    description:
      "Explore the benefits of having pets for mental and emotional well-being. Learn how they improve your lifestyle.",
    icon: <FaPaw size={32} className="text-teal-600" />,
    buttonText: "Read Now",
  },
  {
    title: "Why Own a Greenhouse?",
    description:
      "Learn how greenhouses help you grow fresh, organic food year-round and improve air quality in your space.",
    icon: <Sprout size={32} className="text-teal-600" />,
    buttonText: "Read Now",
  },
  {
    title: "Mountain Survival Guide",
    description:
      "Essential survival skills for harsh environments. Learn how to navigate, find food, and stay safe in the wild.",
    icon: <Mountain size={32} className="text-teal-600" />,
    buttonText: "Book Now",
  },
  {
    title: "Heart Health Tips",
    description:
      "Prevent heart disease with a healthier lifestyle. Understand the risks and steps to strengthen your heart.",
    icon: <Heart size={32} className="text-teal-600" />,
    buttonText: "Read Now",
  },
  {
    title: "Mental Health Awareness",
    description:
      "Your mental health is just as important as your physical health. Learn strategies to manage stress and anxiety.",
    icon: <Brain size={32} className="text-teal-600" />,
    buttonText: "Read Now",
  },
  {
    title: "Fitness & Strength Training",
    description:
      "Improve your physical health with the right exercises and training methods. Build strength effectively.",
    icon: <Dumbbell size={32} className="text-teal-600" />,
    buttonText: "Read Now",
  },
  {
    title: "The Power of Herbal Medicine",
    description:
      "Explore how herbal remedies have been used for centuries to treat various ailments naturally.",
    icon: <FaTree size={32} className="text-teal-600" />,
    buttonText: "Read Now",
  },
  {
    title: "Emergency First Aid Basics",
    description:
      "Knowing basic first aid can save lives. Learn essential skills to handle medical emergencies effectively.",
    icon: <Stethoscope size={32} className="text-teal-600" />,
    buttonText: "Read Now",
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
