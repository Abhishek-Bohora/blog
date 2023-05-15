"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username: username,
      password: password,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-200">
          Login
        </h2>
        <form
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={onSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-200 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="input input-bordered input-accent w-full max-w-xs"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-200 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered input-accent w-full max-w-xs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <a className="link link-hover">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
}
