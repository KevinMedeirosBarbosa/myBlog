"use client";
import React, { useEffect, useState } from "react";
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
  const [showMessageError, setShowMessageError] = useState("");

  const manualRegisterSubmission = async (e: any) => {
    e.preventDefault();
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
      const data = response.data;
      if (data.status === 204) {
        setShowMessageError(data.message);
      }
    } catch (error) {
      console.error("Erro ao fazer requisição para o backend:", error);
    }
  };

  const manualLoginSubmission = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login/manual", {
        email: email,
        password: password,
      });
      console.log(
        "Requisição para o backend enviada com sucesso!",
        response.data
      );
      const data = response.data;
      if (data.status === 204) {
        setShowMessageError(data.message);
      }
    } catch (error) {
      console.error("Erro ao fazer requisição para o backend:", error);
    }
  };

  const toggleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  useEffect(() => {
    if (showMessageError) {
      setShowMessageError("");
    }
  }, [password, email, showLogin]);

  useEffect(() => {
    console.log(email, name);
    setEmail("");
    setName("");
    setPassword("");
  }, [showLogin]);

  return (
    <div className="bg-white w-full max-w-7xl md:rounded-3xl px-5 md:px-0 shadow-2xl flex h-full justify-center items-center">
      <div className="bg-blue-400 text-white text-center text-2xl pt-36 font-bold rounded-2xl hidden md:block h-full w-full">
        <h1>MySpace</h1>
        <h2>Seu lugar para pensar!</h2>
        <FaMicroblog className="w-2/5 h-2/5 ml-40 mt-10" />
      </div>
      <div className="w-full font-bold text-2xl">
        <div className="max-w-md m-auto">
          {showLogin ? <h2>Criar Conta</h2> : <h2>Conecte-se</h2>}

          <div className="flex gap-2 mt-4 flex-col md:flex-row">
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

          <p className="text-sm font-light mt-6 text-center text-gray-500/40">
            -OU-
          </p>

          <form
            onSubmit={
              showLogin ? manualRegisterSubmission : manualLoginSubmission
            }
          >
            {showLogin ? (
              <div className="mt-6">
                <div className="flex flex-col gap-7">
                  <LoginInput
                    placeholder="Digite seu Nome"
                    type="text"
                    onChange={setName}
                    id="name"
                    value={name}
                  />
                  <LoginInput
                    placeholder="Digite seu E-mail"
                    type="email"
                    onChange={setEmail}
                    id="email"
                    value={email}
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
                    id="email"
                  />
                  <PasswordInput onChange={setPassword} />
                </div>
              </div>
            )}

            <div className="h-10">
              <p className="text-sm text-red-500">
                {showMessageError ? showMessageError : ""}
              </p>
            </div>

            <button
              className={`mt-4 text-center p-3 rounded-lg select-none w-full ${
                email === "" ||
                password === "" ||
                (showMessageError !== "" && !showLogin && name === "") ||
                showMessageError !== ""
                  ? "bg-blue-200 cursor-not-allowed"
                  : "bg-blue-400 cursor-pointer"
              }`}
              type="submit"
              disabled={
                email === "" ||
                password === "" ||
                (showMessageError !== "" && !showLogin && name === "") ||
                showMessageError !== ""
              }
            >
              <span className="text-white text-xl">
                {showLogin ? "Criar Conta" : "Acessar"}
              </span>
            </button>
          </form>

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
