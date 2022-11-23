"use client";
import { sendRenderResult } from "next/dist/server/send-payload";
import React from "react";
import { useState } from "react";
type Props = {};

function DutyCalculation({}: Props) {
  const [av, setAV] = useState("");
  const [bcd, setBCD] = useState("");
  const [correctbcd, setCorrectBCD] = useState("");
  const [igst, setIGST] = useState("");
  const [correctigst, setCorrectIGST] = useState("");
  const [cess, setCess] = useState("");
  const [duty, setDuty] = useState("");
  const [correctduty, setCorrectDuty] = useState("");
  const [differentialduty, setDifferentialDuty] = useState("");

  // function Dutycalculator() {
  //   const totalbcd = av * bcd;
  //   const totalcess = totalbcd * cess;
  //   const avbcdcess = Number(av) + Number(totalbcd) + totalcess;
  //   const totaligst = avbcdcess * igst;
  //   const Duty = Number(avbcdcess) + totaligst;
  //   setDuty(Duty);
  // }
  function Dutycalculator() {
    // Claimed Duty
    const totalbcd = av * bcd;
    const totalcess = totalbcd * cess;
    const avbcdcess = Number(av) + Number(totalbcd) + totalcess;
    const totaligst = avbcdcess * igst;
    const Duty = Number(avbcdcess) + Number(totaligst);
    //Correct BCD
    const totalbcd1 = av * correctbcd;
    const totalcess1 = totalbcd1 * cess;
    const avbcdcess1 = Number(av) + Number(totalbcd1) + Number(totalcess1);
    const totaligst1 = avbcdcess1 * correctigst;
    const CorrectDuty = Number(avbcdcess1) + Number(totaligst1);
    const DifferentialDuty = Number(CorrectDuty) - Number(Duty);
    setDifferentialDuty(Math.trunc(DifferentialDuty * 100) / 100);
  }
  return (
    <div className="  ">
      <div className="grid auto-rows-[minmax(0,_2fr)] max-w-[800px] gap-x-[50px] gap-y-[10px] bg-slate-700">
        <label className="Label"> Assessable Value(INR)</label>
        <input
          placeholder="0"
          type="number"
          min={0}
          onChange={(event) => setAV(event.target.value)}
          className="Input"
          id="assessableValue"
        />{" "}
        <label className="Label"> Claimed Basic Duty(%)</label>
        <input
          placeholder="0"
          type="number"
          min={0}
          // value={bcd}
          onChange={(event) => setBCD(event.target.value / 100)}
          className="Input"
          id="BCD"
        />
        <label className="Label"> Correct Basic Duty(%)</label>
        <input
          placeholder="0"
          type="number"
          min={0}
          // value={bcd}
          onChange={(event) => setCorrectBCD(event.target.value / 100)}
          className="Input"
          id="BCD"
        />
        <label className="Label"> Cess(%)</label>
        <input
          placeholder="0"
          type="number"
          min={0}
          // value={cess}
          onChange={(event) => setCess(event.target.value / 100)}
          className="Input"
          id="cess"
        />
        <label className="Label">Claimed IGST (%)</label>
        <input
          placeholder="0"
          type="number"
          min={0}
          // value={igst}
          onChange={(event) => setIGST(event.target.value / 100)}
          className="Input"
          id="igst"
        />{" "}
        <label className="Label">Correct IGST (%)</label>
        <input
          placeholder="0"
          type="number"
          min={0}
          // value={igst}
          onChange={(event) => setCorrectIGST(event.target.value / 100)}
          className="Input"
          id="igst"
        />{" "}
        <label className="bg-slate-500  p-2"> Differential Duty</label>
        <input
          placeholder="0"
          type="text"
          min={0}
          value={differentialduty}
          className="Input"
          id="totalDuty"
        />{" "}
        <button
          type="button"
          onClick={() => Dutycalculator()}
          className="bg-sky-600"
        >
          Click Here
        </button>
      </div>
      <h3 className="mt-5 max-w-[800px]">
        {" "}
        <strong> Note:</strong> if claimed BCD and Correct BCD or Claimed IGST
        or Correct IGST are same , then input the same values instead of leaving
        them blank.{" "}
      </h3>
    </div>
  );
}

export default DutyCalculation;
