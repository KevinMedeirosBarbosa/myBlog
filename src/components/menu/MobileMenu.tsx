import React from "react";
import { FaHome } from "react-icons/fa";

export default function MobileMenu() {
  return (
    <div className="bg-blue-500 w-full flex justify-center py-2 rounded-t-xl shadow-xl ">
      <ul className="flex gap-10">
        <li className="bg-blue-200/25 rounded-full p-2">
          <FaHome className="text-3xl text-white" />{" "}
        </li>
        <li className="bg-blue-200/25 rounded-full p-2">
          <FaHome className="text-3xl text-white" />{" "}
        </li>
        <li className="bg-blue-200/25 rounded-full p-2">
          <FaHome className="text-3xl text-white" />{" "}
        </li>
      </ul>
    </div>
  );
}
