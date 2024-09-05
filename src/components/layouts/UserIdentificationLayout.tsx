"use client";
import React, { useState } from "react";
import { FaMicroblog } from "react-icons/fa";
import SocialButtom from "../SocialButtom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import PasswordInput from "../inputs/PasswordInput";
import LoginInput from "../inputs/LoginInput";
import { signIn } from "next-auth/react";
import axios from "axios";

export default function RegisterLayout() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const manualRegisterSubmission = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/register/create",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      console.log(
        "Requisição para o backend enviada com sucesso!",
        response.data
      );
    } catch (error) {
      console.error("Erro ao fazer requisição para o backend:", error);
    }
  };

  const toggleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="bg-white w-full max-w-7xl rounded-3xl shadow-2xl flex">
      <div className="bg-blue-400 w-[70%] text-white text-center text-2xl pt-36 font-bold rounded-2xl">
        <h1>MySpace</h1>
        <h2>Seu lugar para pensar!</h2>
        <FaMicroblog className="w-2/5 h-2/5 ml-40 mt-10" />
      </div>
      <div className="w-full font-bold text-2xl pt-20">
        <div className="max-w-md m-auto pt-16">
          {showLogin ? <h2>Criar Conta</h2> : <h2>Conecte-se</h2>}

          {showLogin ? (
            <div className="flex space-x-2 gap-2 mt-4">
              <div
                className="flex w-full"
                onClick={() => {
                  signIn("google", { callbackUrl: "/" });
                }}
              >
                <SocialButtom Icon={FcGoogle} text="Criar com Google" />
              </div>
              <div
                className="flex w-full"
                onClick={() => {
                  signIn("facebook", { callbackUrl: "/" });
                }}
              >
                <SocialButtom
                  Icon={BsFacebook}
                  text="Criar com Facebook"
                  className="text-blue-500"
                />
              </div>
            </div>
          ) : (
            <div className="flex space-x-2 gap-2 mt-4">
              <div
                className="flex w-full"
                onClick={() => {
                  signIn("google", { callbackUrl: "/" });
                }}
              >
                <SocialButtom Icon={FcGoogle} text="Acessar com Google" />
              </div>
              <div
                className="flex w-full"
                onClick={() => {
                  signIn("facebook", { callbackUrl: "/" });
                }}
              >
                <SocialButtom
                  Icon={BsFacebook}
                  text="Acessar com Facebook"
                  className="text-blue-500"
                />
              </div>
            </div>
          )}

          <p className="text-sm font-light mt-6 text-center text-gray-500/40">
            -OU-
          </p>

          {showLogin ? (
            <div className="mt-6">
              <div className="flex flex-col gap-7">
                <LoginInput
                  placeholder="Digite seu Nome"
                  type="text"
                  onChange={setName}
                />
                <LoginInput
                  placeholder="Digite seu E-mail"
                  type="email"
                  onChange={setEmail}
                />
                <PasswordInput onChange={setPassword} />
              </div>
            </div>
          ) : (
            <div className="mt-6">
              <div className="flex flex-col gap-7">
                <LoginInput
                  placeholder="Digite seu E-mail"
                  type="email"
                  onChange={setEmail}
                />
                <PasswordInput onChange={setPassword} />
              </div>
            </div>
          )}

          {showLogin ? (
            <button
              className={` mt-8 text-center p-3 bg-blue-400 rounded-lg cursor-pointer select-none w-full ${
                name === "" || email === "" || password === ""
                  ? "bg-blue-200 cursor-not-allowed"
                  : ""
              }`}
              onClick={manualRegisterSubmission}
              disabled={name === "" || email === "" || password === ""}
            >
              <p className="text-white text-xl">Criar Conta</p>
            </button>
          ) : (
            <button className="mt-8 text-center p-3 bg-blue-400 rounded-lg cursor-pointer select-none w-full">
              <p className="text-white text-xl">Acessar</p>
            </button>
          )}

          {showLogin ? (
            <div className="font-light text-lg mt-5 text-slate-500 flex gap-2">
              <p>Já tem uma conta?</p>
              <div className="cursor-pointer">
                <p className="text-blue-400" onClick={toggleShowLogin}>
                  Acessar
                </p>
              </div>
            </div>
          ) : (
            <div className="font-light text-lg mt-5 text-slate-500 flex gap-2">
              <p>Não possui uma conta?</p>
              <div className="cursor-pointer">
                <p className="text-blue-400" onClick={toggleShowLogin}>
                  Cadastrar
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
