//Countup for home page
import CountUp from "react-countup";

const StatsSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-around text-center md:text-left">
        
        {/* Healthcare Providers */}
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-gray-900">
            <CountUp end={500} duration={3} />+
          </h2>
          <div className="text-gray-600 text-lg leading-tight">
            <span className="block">Healthcare Providers</span>
            <span className="block">using our services</span>
          </div>
        </div>

        {/* User Recommendation */}
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-gray-900">
            <CountUp end={93} duration={3} />%
          </h2>
          <div className="text-gray-600 text-lg leading-tight">
            <span className="block">Users Recommend</span>
            <span className="block">our software</span>
          </div>
        </div>

        {/* System Uptime */}
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-gray-900">
            <CountUp end={99} duration={3} />%
          </h2>
          <div className="text-gray-600 text-lg leading-tight">
            <span className="block">System Uptime</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
