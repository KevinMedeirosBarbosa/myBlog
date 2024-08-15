import React from "react";
import { FaMicroblog } from "react-icons/fa";
import SocialButtom from "../SocialButtom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import PasswordInput from "../inputs/PasswordInput";
import LoginInput from "../inputs/LoginInput";

export default function RegisterLayout() {
  return (
    <div className="bg-white w-full max-w-7xl rounded-3xl shadow-2xl flex">
      <div className="bg-blue-400 w-[70%] text-white text-center text-2xl pt-36 font-bold rounded-2xl">
        <h1>MySpace</h1>
        <h2>Seu lugar para pensar!</h2>
        <FaMicroblog className="w-2/5 h-2/5 ml-40 mt-10" />
      </div>
      <div className="w-full font-bold text-2xl pt-20">
        <div className="max-w-md m-auto pt-16">
          <h2>Criar Conta</h2>

          <div className="flex space-x-2 gap-2 mt-4">
            <SocialButtom Icon={FcGoogle} text="Acessar com Google" />
            <SocialButtom
              Icon={BsFacebook}
              text="Acessar com Facebook"
              className="text-blue-500"
            />
          </div>

          <p className="text-sm font-light mt-6 text-center text-gray-500/40">
            -OU-
          </p>

          <div className="mt-6">
            <div className="flex flex-col gap-7">
              <LoginInput placeholder="Digite seu Nome" type="text" />
              <LoginInput placeholder="Digite seu E-mail" type="email" />
              <PasswordInput />
            </div>
          </div>

          <div className="mt-8 text-center p-3 bg-blue-400 rounded-lg cursor-pointer select-none">
            <p className="text-white text-xl">Criar Conta</p>
          </div>

          <div className="font-light text-lg mt-5 text-slate-500 flex gap-2">
            <p>Já tem uma conta?</p>
            <a href="#" className="text-blue-400">
              Acessar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
