// import { timeTable } from "./herodata";

// const HeroSidebar = () => {
//   return (
//     <aside className="h-full rounded-xl bg-gray-100 p-6">
//       <h2 className="mb-6 font-bold">Open Hours</h2>

//       <div className="space-y-3 text-sm">
//         {timeTable.map((item) => (
//           <div key={item.id}>
//             <p className="font-semibold">{item.day}</p>
//             <p className="ml-4">{item.time}</p>
//           </div>
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default HeroSidebar;

import { BiTimeFive } from "react-icons/bi";
import { timeTable } from "./herodata";

const HeroSidebar = () => {
  return (
    <aside className="h-full min-h-[420px] rounded-2xl border border-white/10 bg-[#0b1626] p-6 text-white shadow-xl">
      {/* Heading */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10">
          <BiTimeFive className="text-xl text-blue-500" />
        </div>

        <div>
          <p className="text-xs tracking-widest text-blue-400 uppercase">
            Schedule
          </p>

          <h2 className="font-semibold">Open Hours</h2>
        </div>
      </div>

      {/* Timetable */}
      <div className="space-y-1">
        {timeTable.map((item) => (
          <div
            key={item.id}
            className="border-b border-white/5 py-3 last:border-0"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-medium text-gray-200">{item.day}</p>

              <span className="text-xs text-gray-400">{item.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Status */}
      <div className="mt-5 flex items-center gap-2 rounded-lg bg-blue-500/10 px-3 py-2">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

        <span className="text-xs text-gray-300">Available for service</span>
      </div>
    </aside>
  );
};

export default HeroSidebar;
