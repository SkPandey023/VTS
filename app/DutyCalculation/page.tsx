"use client";
import { sendRenderResult } from "next/dist/server/send-payload";
import React from "react";
import { useState } from "react";
type Props = {};

function DutyCalculation({}: Props) {
  const [av, setAV] = useState("");
  const [bcd, setBCD] = useState("");
  const [igst, setIGST] = useState("");
  const [cess, setCess] = useState("");
  const [duty, setDuty] = useState("");

  function Dutycalculator() {
    const totalbcd = av * bcd;
    const totalcess = totalbcd * cess;
    const avbcdcess = Number(av) + Number(totalbcd) + Number(totalcess);
    const totaligst = avbcdcess * igst;
    const Duty = Number(avbcdcess) + Number(totaligst);
    setDuty(Duty);
  }
  return (
    <div className="  ">
      <div className="grid auto-rows-[minmax(0,_2fr)] max-w-[800px] gap-x-[50px] gap-y-[10px] bg-slate-700">
        <label className="Label"> Assessable Value(INR)</label>
        <input
          // placeholder="0"
          type="number"
          min={0}
          onChange={(event) => setAV(event.target.value)}
          className="Input"
          id="assessableValue"
        />{" "}
        <label className="Label"> Basic Duty(%)</label>
        <input
          // placeholder="0"
          type="number"
          min={0}
          // value={bcd}
          onChange={(event) => setBCD(event.target.value / 100)}
          className="Input"
          id="BCD"
        />
        <label className="Label"> Cess(%)</label>
        <input
          // placeholder="0"
          type="number"
          min={0}
          // value={cess}
          onChange={(event) => setCess(event.target.value / 100)}
          className="Input"
          id="cess"
        />
        <label className="Label">IGST (%)</label>
        <input
          // placeholder="0"
          type="number"
          min={0}
          // value={igst}
          onChange={(event) => setIGST(event.target.value / 100)}
          className="Input"
          id="igst"
        />{" "}
        <label className="bg-slate-500  p-2"> Total Duty</label>
        <input
          // placeholder="0"
          type="text"
          // min={0}
          value={duty}
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
    </div>
  );
}

export default DutyCalculation;
