import React from "react";
import { FiBell, FiSun, FiGlobe, FiSettings } from "react-icons/fi";
import { MdEmergency } from "react-icons/md";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import bgImage from "../assets/Screensaver.png";

const HomeIdle = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-black text-white overflow-y-auto">
      {/* --- TOP GRADIENT AREA --- */}
      <div className="w-full py-10 flex flex-col items-center bg-gradient-to-b from-[#2e1c55] via-[#152d52] to-transparent">

        {/* LOGO */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/liftbyte-logo.svg"
            alt="Logo"
            className="w-40 mb-2"
          />
          <p className="text-sm opacity-80">
            Transforming Ideas into Reality.
          </p>
        </div>

        {/* DATE + TIME PANEL */}
        <div className="w-[90%] md:w-[70%] bg-white/5 backdrop-blur-md rounded-xl px-6 py-4 flex justify-between">
          {/* Left */}
          <div>
            <p className="text-xs opacity-70">Friday, 21st June</p>
            <h2 className="text-3xl font-semibold">14:12</h2>
          </div>

          {/* Right */}
          <div className="text-right">
            <p className="text-xs opacity-70">Temperature</p>
            <h2 className="text-2xl font-semibold">23°C • Clear Skies</h2>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="flex flex-col items-center mt-10 opacity-60">
          <p className="text-xl mb-1">Welcome</p>
          <p className="text-4xl font-bold">to LIFTbyte</p>
        </div>
      </div>


      {/* --- STATUS --- */}
      <p className="text-center text-lg opacity-80 mt-6 mb-4">
        Lift Idle • Awaiting Request
      </p>

      {/* --- SCREEN SAVER IMAGE --- */}
      <div className="flex justify-center">
        <div
          className="w-[90%] md:w-[70%] h-[280px] md:h-[360px] rounded-xl shadow-lg bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <button className="absolute top-4 right-4 bg-white/30 text-black px-4 py-2 rounded-md backdrop-blur-md text-sm">
            Change Screensaver
          </button>
        </div>
      </div>

      {/* EMERGENCY MESSAGE */}
      <p className="text-center text-sm opacity-80 mt-4">
        In case of emergency, press the alarm button or use the intercom to contact support
      </p>

      {/* --- FLOOR BUTTONS GRID --- */}
      <div className="grid grid-cols-3 gap-y-6 w-[80%] md:w-[60%] mx-auto mt-10">
        {[
          { num: "8", label: "Eighth Floor" },
          { num: "7", label: "Seventh Floor" },
          { num: "6", label: "Sixth Floor" },
          { num: "5", label: "Fifth Floor" },
          { num: "4", label: "Fourth Floor" },
          { num: "3", label: "Third Floor" },
          { num: "2", label: "Second Floor" },
          { num: "1", label: "First Floor" },
          { num: "G", label: "Ground Floor" },
        ].map((f, i) => (
          <div key={i} className="flex flex-col items-center">
            <p className="text-5xl font-light">{f.num}</p>
            <p className="text-xs opacity-70 mt-1">{f.label}</p>
          </div>
        ))}
      </div>


      <div className="flex items-center justify-center gap-8 mt-12 mb-6">
        {/* Door Close */}
        <div className="flex flex-col items-center">
          <button
            aria-label="Door Close"
            className="w-28 h-28 md:w-32 md:h-32 bg-white/6 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner"
          >
            <div className="flex items-center justify-center transform scale-125 text-white/95">
              <FaAngleDoubleLeft size={36} />
            </div>
          </button>
          <p className="text-xs opacity-70 mt-3">Door Close</p>
        </div>

        {/* Alert (center small) */}
        <div className="flex flex-col items-center -translate-y-2">
          <div className="w-16 h-16 md:w-18 md:h-18 bg-white/6 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner">
            <FiBell size={22} />
          </div>
          <p className="text-sm opacity-80 mt-3">Alert</p>
        </div>

        {/* Door Open */}
        <div className="flex flex-col items-center">
          <button
            aria-label="Door Open"
            className="w-28 h-28 md:w-32 md:h-32 bg-white/6 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner"
          >
            <div className="flex items-center justify-center transform scale-125 text-white/95">
              <FaAngleDoubleRight size={36} />
            </div>
          </button>
          <p className="text-xs opacity-70 mt-3">Door Open</p>
        </div>
      </div>


      {/* --- BOTTOM ACTION ICONS --- */}
      <div className="w-full flex justify-center gap-14 mb-14">
        {/* Change Theme */}
        <div className="flex flex-col items-center">
          <FiSun size={22} />
          <p className="text-xs mt-2">Change Theme</p>
        </div>

        {/* Emergency */}
        <div className="flex flex-col items-center">
          <MdEmergency size={22} />
          <p className="text-xs mt-2">Emergency</p>
        </div>

        {/* Language */}
        <div className="flex flex-col items-center">
          <FiGlobe size={22} />
          <p className="text-xs mt-2">Language</p>
        </div>

        {/* Settings */}
        <div className="flex flex-col items-center">
          <FiSettings size={22} />
          <p className="text-xs mt-2">Settings</p>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <div className="text-center text-xs opacity-60 pb-6">
        <p>© 2025 LIFTbyte Technologies • All Rights Reserved</p>
        <p>Support: +91-XXXXXXXXXX</p>
      </div>
    </div>
  );
}


export default HomeIdle;