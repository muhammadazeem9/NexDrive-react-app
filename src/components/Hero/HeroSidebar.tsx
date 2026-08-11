import { timeTable } from "./herodata";

const HeroSidebar = () => {
  return (
    <aside className="bg-gray-100 rounded-xl p-6 h-full">
      <h2 className="font-bold mb-6">Open Hours</h2>

      <div className="space-y-3 text-sm">
        {timeTable.map((item) => (
          <div key={item.id}>
            <p className="font-semibold">{item.day}</p>
            <p className="ml-4">{item.time}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default HeroSidebar;
