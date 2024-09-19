"use client";
import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Props {
  name: string;
  time: string;
  content: string;
  image?: string;
}

export default function PostCard({ name, time, content, image }: Props) {
  return (
    <div className="w-full flex shadow-md rounded-md bg-white pl-2 py-4 border-stone-300 border-[1px]">
      <div>
        {" "}
        <div className="h-16 w-16 rounded-full bg-cover bg-center  bg-[url('https://i.pravatar.cc/300')]"></div>
      </div>
      <div className="w-full px-5 mt-2">
        <div className="flex gap-5 justify-between w-full  flex-grow">
          <div className="flex gap-3">
            <h2 className="text-stone-800 font-bold">{name}</h2>
            <p className="font-light text-stone-500">{time}</p>
          </div>
          <div>
            <MdOutlineKeyboardArrowDown className="text-2xl text-stone-400 hover:scale-150 cursor-pointer duration-300 hover:text-blue-500" />
          </div>
        </div>
        <div>
          <p className="text-stone-700 pr-5 text-left line-clamp-5 ">
            {content}
          </p>
        </div>
        <div className="mt-5 pr-[10rem]">
          <ul className="flex justify-between">
            <li className="flex gap-2 select-none">
              <MdFavoriteBorder className="text-2xl hover:text-blue-500 text-stone-600 duration-300 cursor-pointer hover:animate-pulse" />
              2
            </li>
            <li className="flex gap-2 select-none">
              <MdFavoriteBorder className="text-2xl hover:text-blue-500 text-stone-600 duration-300 cursor-pointer hover:animate-pulse" />
              2
            </li>
            <li className="flex gap-2 select-none">
              <MdFavoriteBorder className="text-2xl hover:text-blue-500 text-stone-600 duration-300 cursor-pointer hover:animate-pulse" />
              2
            </li>
            <li className="flex gap-2 select-none">
              <MdFavoriteBorder className="text-2xl hover:text-blue-500 text-stone-600 duration-300 cursor-pointer hover:animate-pulse" />
              2
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
