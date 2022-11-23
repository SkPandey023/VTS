import React from "react";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/pic1.jpg";
type Props = {};

function header({}: Props) {
  return (
    <header
      className="bg-[#3667a6] text-gray-300 hover:text-white Sticky top-0 flex flex-row
     justify-around items-center"
    >
      <div>
        <Link href="/">
          {" "}
          <button className="Button"> Home </button>
        </Link>
      </div>
      <div className="flex flex-row ">
        <Link href="./DutyCalculation">
          {" "}
          <button className="Button  "> Duty Calculation</button>
        </Link>
        <Link href="./DifferentialDuty">
          {" "}
          <button className="Button"> Differential Duty </button>
        </Link>
        <Link href="#Duty Calculation">
          {" "}
          <button className="Button"> More </button>
        </Link>
      </div>
      <div className="">
        <Link href="#Profile">
          <Image
            className="w-[80px] rounded-full  h-auto hover:scale-125 ease-in duration-300 "
            src={profilePic}
            alt="picture of the author"
          />
        </Link>
      </div>
    </header>
  );
}

export default header;
