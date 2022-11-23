"use client";
// import { client } from "../../sanity";

import React, { useState } from "react";
import { GetStaticProps } from "next";

const Quiz = () => {
  const Questionbank = [
    {
      Question: "the sum of the root of x2+6x+5=0",
      Answers: [
        { Answer: "-6", isCorrect: true },
        { Answer: "-8", isCorrect: false },
        { Answer: "-5", isCorrect: false },
        { Answer: "-4", isCorrect: false },
      ],
    },
    {
      Question: "Hooghly river is located in ",
      Answers: [
        { Answer: "Kolkata", isCorrect: true },
        { Answer: "Howrah", isCorrect: false },
        { Answer: "Raniganj", isCorrect: false },
        { Answer: "Burabazar", isCorrect: false },
      ],
    },
    {
      Question:
        " A sum of money at compound interest amounts to fifth-hold itself in 7 years. In how many years will it be 25 times itself ?",
      Answers: [
        { Answer: "6 years", isCorrect: true },
        { Answer: "8 years", isCorrect: false },
        { Answer: "5 years", isCorrect: false },
        { Answer: "4 years", isCorrect: false },
      ],
    },
    {
      Question:
        "A ladder is placed against a wall such that its foot is at a distance of 2.5 m from the wall and its top reaches a window 6 m above the ground. Find the length of the ladder.",
      Answers: [
        { Answer: "5", isCorrect: true },
        { Answer: "8.5", isCorrect: false },
        { Answer: "4.6", isCorrect: false },
        { Answer: "3.5", isCorrect: false },
      ],
    },
    {
      Question: "If 22x - 1 = 	1	 , then the value of x is",
      Answers: [
        { Answer: "-6", isCorrect: true },
        { Answer: "-8", isCorrect: false },
        { Answer: "-5", isCorrect: false },
        { Answer: "-4", isCorrect: false },
      ],
    },
    {
      Question: "the sum of the root of x2+6x+5=0",
      Answers: [
        { Answer: "-6", isCorrect: true },
        { Answer: "-8", isCorrect: false },
        { Answer: "-5", isCorrect: false },
        { Answer: "-4", isCorrect: false },
      ],
    },
    {
      Question: "the sum of the root of x2+6x+5=0",
      Answers: [
        { Answer: "-6", isCorrect: true },
        { Answer: "-8", isCorrect: false },
        { Answer: "-5", isCorrect: false },
        { Answer: "-4", isCorrect: false },
      ],
    },
    {
      Question: "the sum of the root of x2+6x+5=0",
      Answers: [
        { Answer: "-6", isCorrect: true },
        { Answer: "-8", isCorrect: false },
        { Answer: "-5", isCorrect: false },
        { Answer: "-4", isCorrect: false },
      ],
    },
  ];

  //all states
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const Response = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    } else setShowScore(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(1);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="select-auto">
      {showScore ? (
        <div className="flex flex-col mx-auto items-center mt-40">
          You have scored <span className="font-bold text-7xl">{score}</span>out
          of <span className="font-bold text-4xl">{Questionbank.length}</span>
          <button
            className="bg-blue-500 max-w-7xl hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            type="submit"
            onClick={resetQuiz}
          >
            {" "}
            Reset
          </button>
        </div>
      ) : (
        <>
          <div className="p-3">
            <span> (Quantitative Ability)</span>

            {/* question_Num */}
            <div className="flex items-center  ">
              <div className="font-bold text-xl mr-3">
                <span>Q.</span>
                <span className="text-4xl">{currentQuestion}</span>
                {/* /{Questionbank.length} */}
              </div>
              {/* question_text */}
              <div className="font-bold">
                {Questionbank[currentQuestion].Question}
              </div>
            </div>
            <ul className="flex items-start flex-col font-bold  ">
              {Questionbank[currentQuestion].Answers.map((answer) => (
                <li
                  className=" text-xl
                  font-light
                  cursor-pointer
                  w-[300px]
                  p-2
                  rounded
                  border-2
                  mb-2
                text-red-400
                  bg-transparent hover:bg-slate-400
                  "
                  onClick={() => Response(answer.isCorrect)}
                >
                  {answer.Answer}{" "}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
