"use client";
import { signUp } from "@/services/userServices";
import React from "react";

const RegisterPage = () => {
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(name, email, password);
      const userData = { name, email, password, role: "user" };

      const res = await signUp(userData);
      alert("account created");
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Create Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition duration-200 text-white py-2 rounded-md font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
