/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  function handleToogleChange() {
    setVariant((currValue) => (currValue === "login" ? "register" : "login"));
  }

  return (
    <div className="h-full w-full relative bg-[url('../public/images/hero.jpg')] bg-no-repeat bg-fixed bg-center bg-cover transition-all">
      <div className="bg-black  h-full w-full bg-opacity-50">
        <nav className="px-10 py-5">
          <img
            src="https://github.com/AntonioErdeljac/next-netflix-tutorial/blob/master/public/images/logo.png?raw=true"
            alt="logo"
            className="h-10"
          />
          <div className="text-white bg-black rounded-md mt-20 px-[10%] py-8 w-[90%] mx-auto shadow-md md:w-[60%] lg:w-[50%] bg-opacity-70">
            <h1 className="text-2xl font-semibold text-center">
              {variant === "login" ? "Sign In" : "Register"}
            </h1>

            <form
              className="mt-6 flex flex-col gap-4 items-center justify-center"
              action=""
            >
              {variant !== "login" && (
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full rounded-md py-2 px-2 bg-gray-600 outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md py-2 px-2 bg-gray-600 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-md py-2 px-2 bg-gray-600 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="bg-red-600 w-full mt-3 mb-1 py-2 rounded-md hover:bg-red-700 transition">
                {variant === "login" ? "Login" : "Register"}
              </button>

              <p className="text-sm text-gray-300 select-none">
                {variant === "login"
                  ? "First time using Netflix"
                  : "Already have an acccount"}{" "}
                ?{" "}
                <span
                  className="text-white hover:underline transition cursor-pointer"
                  onClick={handleToogleChange}
                >
                  {variant === "login" ? "Create an account" : "Login"}
                </span>
              </p>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Auth;
