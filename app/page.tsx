"use client";
// import { MathQuestion } from "../typings";

import React from "react";
import DutyCalculation from "./DutyCalculation/page";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

const page = () => {
  const [mathdata, setMathdata] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getQuestions");
        const math = await response.json();
        setMathdata(math);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  console.log(mathdata);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        {/* {mathdata.map((x) => (
          <h1> {x}</h1>
        ))} */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight  sm:text-center sm:text-6xl">
            <strong className="font-bold text-red-700 sm:block">sth</strong>
          </h1>

          <p className="mt-4 pt-5 sm:text-xl sm:leading-relaxed">
            The most user friendly and fastest way to make sure all your customs
            affairs are 100% customs compliant.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
