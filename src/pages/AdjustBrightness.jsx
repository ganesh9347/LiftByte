import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { FiSave } from "react-icons/fi";
import { BsSun } from "react-icons/bs";

export default function AdjustBrightness() {
  const [brightness, setBrightness] = useState(20);

  return (
    <PageLayout>
      <div className="bg-white/5 rounded-2xl p-6">

        {/* TITLE */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <BsSun className="text-orange-300 text-xl" />
          <p className="text-lg font-medium">Adjust Brightness</p>
          <p className="text-xs opacity-70 text-center">
            Adjust screen brightness for better visibility
          </p>
        </div>

        {/* LABEL */}
        <p className="text-sm mb-3">Brightness</p>

        {/* VALUES */}
        <div className="flex justify-between text-[10px] opacity-60 mb-2">
          {[0, 20, 40, 60, 80, 100].map(val => (
            <span
              key={val}
              className={val === brightness ? "text-white font-medium" : ""}
            >
              {val}%
            </span>
          ))}
        </div>

        {/* SLIDER */}
        <div className="relative mb-4">
          <input
            type="range"
            min="0"
            max="100"
            step="20"
            value={brightness}
            onChange={e => setBrightness(Number(e.target.value))}
            className="w-full accent-red-500"
          />
        </div>

        <p className="text-xs opacity-70 mb-6">
          Brightness has been set to {brightness} percent
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
