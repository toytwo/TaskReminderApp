"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [groupName, setGroupName] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ group_name: groupName }),
      });

      if (!response.ok) {
        console.log("Server Error");
        return;
      }

      const data = await response.json();

      if (data.success) {
        console.log("Group Creation Successful");
      } else {
        console.log("Network Error");
      }
    } catch (err) {}
  };

  return (
    <div
      className="flex min-h-screen justify-center 
      text-neutral-700 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
      pt-[15vh] sm:pt-[20vh] md:pt-[25vh] 
      px-4 bg-neutral-100"
    >
      <form
        className="flex flex-col gap-y-6 self-start bg-white 
        p-6 sm:p-8 md:p-10 
        rounded-2xl shadow-md 
        w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%]"
        onSubmit={handleSubmit}
      >
        <div
          className="flex flex-col md:flex-row 
          items-center sm:items-center 
          gap-3 sm:gap-x-4 
          w-full"
        >
          <label className="text-center sm:text-left whitespace-nowrap">
            Remind Us About
          </label>

          <input
            className="flex-1 w-[90%] md:w-full min-w-0 px-4 py-2 border border-neutral-300 rounded-lg
            bg-white hover:bg-neutral-100
            focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400
            transition"
            name="GroupName"
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 
            px-6 py-3 rounded-xl
            bg-emerald-500 text-white
            hover:bg-emerald-600
            active:bg-emerald-700
            transition duration-150 ease-in-out
            shadow-sm hover:shadow-md"
          >
            Create Group
          </button>
        </div>
      </form>
    </div>
  );
}