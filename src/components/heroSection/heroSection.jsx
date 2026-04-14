import { FaPlus } from "react-icons/fa6";

function HeroSection() {
  return (
    <div className="text-center flex flex-col items-center gap-2 px-4 py-2 flex-none">
      <h1 className="text-3xl font-bold tracking-tight text-slate-800 xl:text-4xl">
        Friends to keep close in your life
      </h1>
      <p className="font-semibold text-slate-500">
        Your personal shelf meaningful connections, Browse, tend and nurture the
        relationships that matter most.
      </p>
      <button className="flex items-center gap-1 px-2 py-1 bg-[#244D3F] text-white rounded-xs cursor-pointer hover:bg-[#0f2920] shadow-md font-bold">
        <FaPlus />
        <span>Add a Friend</span>
      </button>
    </div>
  );
}

export default HeroSection;
