import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { HiMiniHome } from "react-icons/hi2";

export default function Sidebar() {
  return (
    <div className="w-72 bg-[#121212] h-[calc(100vh-110px)] rounded-lg m-2 pt-4">
      <Link
        href={"/"}
        className="flex justify-start items-center gap-x-3 my-1 py-1 px-6 w-full cursor-pointer hover:text-white/90"
      >
        <HiMiniHome className="text-white/60 w-6 h-6" />
        <p className="text-2xl font-medium text-white/60">Home</p>
      </Link>
      <Link
        href={"/search"}
        className="flex justify-start items-center gap-x-3 my-1 py-1 px-6 w-full cursor-pointer hover:text-white/90"
      >
        <FaSearch className="text-white/60 w-5 h-5" />
        <p className="text-2xl font-medium text-white/60">Search</p>
      </Link>
    </div>
  );
}
