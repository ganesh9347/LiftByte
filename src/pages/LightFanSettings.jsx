import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { FiSave } from "react-icons/fi";
import { BsLightning } from "react-icons/bs";

const TEMPERATURES = ["Warm", "Neutral", "Cool"];

export default function LightFanSettings() {
  const [temperature, setTemperature] = useState("Warm");
  const [fanOn, setFanOn] = useState(true);
  const [fanSpeed, setFanSpeed] = useState(60);

  return (
    <PageLayout>
      <div className="bg-white/5 rounded-2xl p-6">

        {/* TITLE */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <BsLightning className="text-orange-300 text-xl" />
          <p className="text-lg font-medium">Light & Fan Settings</p>
          <p className="text-xs opacity-70 text-center">
            Adjust cabin lighting and airflow
          </p>
        </div>

        {/* COLOUR TEMPERATURE */}
        <p className="text-sm mb-3">Colour Temperature</p>
        <div className="flex gap-3 mb-6">
          {TEMPERATURES.map(option => (
            <button
              key={option}
              onClick={() => setTemperature(option)}
              className={`flex-1 py-2 rounded-full text-sm transition
                ${
                  temperature === option
                    ? "bg-green-400 text-black"
                    : "bg-white/10"
                }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* FAN POWER */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm">Fan Power</p>
          <button
            onClick={() => setFanOn(!fanOn)}
            className={`w-12 h-6 rounded-full relative transition
              ${fanOn ? "bg-green-400" : "bg-gray-600"}`}
          >
            <span
              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition
                ${fanOn ? "right-1" : "left-1"}`}
            />
          </button>
        </div>

        {/* FAN SPEED */}
        <p className="text-sm mb-3">Fan Speed</p>

        <div className="flex justify-between text-[10px] opacity-60 mb-2">
          {[0, 20, 40, 60, 80, 100].map(val => (
            <span
              key={val}
              className={val === fanSpeed ? "text-white font-medium" : ""}
            >
              {val}%
            </span>
          ))}
        </div>

        <input
          type="range"
          min="0"
          max="100"
          step="20"
          value={fanSpeed}
          onChange={e => setFanSpeed(Number(e.target.value))}
          className="w-full accent-red-500 mb-2"
          disabled={!fanOn}
        />

        <p className="text-xs opacity-70 mb-6">
          Fan Speed has been set to {fanSpeed} percent
        </p>

        {/* SAVE */}
        <button className="w-full py-3 rounded-lg bg-white/10 flex items-center justify-center gap-2">
          <FiSave />
          Save
        </button>
      </div>
    </PageLayout>
  );
}
