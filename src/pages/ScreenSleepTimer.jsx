import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { FiSave } from "react-icons/fi";
import { MdOutlineTimer } from "react-icons/md";

const TIMERS = [
  "30 Seconds",
  "1 Minute",
  "2 Minutes",
  "5 Minutes",
  "10 Minutes"
];

export default function ScreenSleepTimer() {
  const [enabled, setEnabled] = useState(true);
  const [timer, setTimer] = useState("2 Minutes");

  return (
    <PageLayout>
      <div className="bg-white/5 rounded-2xl p-6">

        {/* TITLE */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <MdOutlineTimer className="text-orange-300 text-xl" />
          <p className="text-lg font-medium">Screen Sleep Timer</p>
          <p className="text-xs opacity-70 text-center">
            Set inactivity duration before the screen turns off
          </p>
        </div>

        {/* ENABLE TOGGLE */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm">Enable Screen Sleep</p>
          <button
            onClick={() => setEnabled(!enabled)}
            className={`w-12 h-6 rounded-full relative transition
              ${enabled ? "bg-green-400" : "bg-gray-600"}`}
          >
            <span
              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition
                ${enabled ? "right-1" : "left-1"}`}
            />
          </button>
        </div>

        {/* TIMER OPTIONS */}
        <p className="text-sm mb-4">Sleep Duration</p>

        <div className="space-y-3 mb-6">
          {TIMERS.map(option => (
            <button
              key={option}
              onClick={() => setTimer(option)}
              disabled={!enabled}
              className={`w-full flex justify-between items-center px-4 py-3 rounded-md text-sm transition
                ${
                  timer === option
                    ? "bg-green-400 text-black"
                    : "bg-white/10"
                }
                ${!enabled ? "opacity-50" : ""}`}
            >
              {option}
              {timer === option && <span>✓</span>}
            </button>
          ))}
        </div>

        {/* SAVE */}
        <button
          className="w-full py-3 rounded-lg bg-white/10 flex items-center justify-center gap-2"
        >
          <FiSave />
          Save
        </button>
      </div>
    </PageLayout>
  );
}
