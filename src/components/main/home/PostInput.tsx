"use client";
import { BsEmojiSmile } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function PostInput() {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    console.log(text);
  }, [text]);
  return (
    <div className="w-full shadow-md rounded-md bg-white px-2 py-3 flex flex-col border-stone-300 border-[1px] ">
      <div className="w-full px-4 border-b-[1px] border-stone-600/20 py-2 ">
        <h1 className="text-stone-700 uppercase font-bold">Poste Algo</h1>
      </div>
      <div className="flex pt-5">
        <div>
          <div className="h-16 w-16 rounded-full bg-cover bg-center  bg-[url('https://i.pravatar.cc/300')]"></div>
        </div>
        <div className=" px-5 w-full flex flex-col justify-between mt-2">
          <div className="w-full">
            <textarea
              placeholder="Escreva algo"
              className=" w-full resize-y"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </div>
          <div className="flex justify-between mt-5">
            <ul className="flex gap-2">
              <li>
                <BsEmojiSmile className="text-2xl hover:text-blue-500 text-stone-600 duration-300 cursor-pointer  " />
              </li>
              <li>
                <BsEmojiSmile className="text-2xl hover:text-blue-500 text-stone-600 duration-300 cursor-pointer " />
              </li>
              <li>
                <BsEmojiSmile className="text-2xl hover:text-blue-500 text-stone-600 duration-300 cursor-pointer " />
              </li>
            </ul>
            <div className="border-[1px] border-stone-500 rounded-full px-5 cursor-pointer select-none hover:bg-blue-500 hover:text-white duration-300 hover:border-transparent py-1">
              Postar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
