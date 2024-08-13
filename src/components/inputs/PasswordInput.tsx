"use client";
import React from "react";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="border-b-2 flex items-center relative">
      <div className="flex gap-2 w-full">
        <div className="bg-blue-400 p-2 rounded-md">
          <RiLockPasswordFill className="text-white" />
        </div>
        <input
          className="text-xl font-light text-gray-500/40 w-full"
          placeholder="Senha"
          type={showPassword ? "text" : "password"}
        />
      </div>
      <div
        className="cursor-pointer text-stone-500 hover:scale-105 absolute right-2"
        onClick={toggleShowPassword}
      >
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </div>
    </div>
  );
}
