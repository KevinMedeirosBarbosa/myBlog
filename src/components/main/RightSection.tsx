import { CiSearch } from "react-icons/ci";

export default function RightSection() {
  return (
    <div className="h-full  ">
      <div className="flex gap-5 bg-slate-300  rounded-full py-3 px-4 ">
        {" "}
        <CiSearch className="text-2xl text-stone-700" />
        <input
          type="text"
          placeholder="Pesquisar"
          className="bg-transparent text-stone-700 placeholder:text-stone-700  "
        />
      </div>
    </div>
  );
}
