import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { FiSave } from "react-icons/fi";
import { MdOutlineColorLens } from "react-icons/md";

const COLORS = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#ff00ff",
  "#00ffff"
];

export default function RGBLightingControl() {
  const [enabled, setEnabled] = useState(true);
  const [color, setColor] = useState(COLORS[0]);
  const [intensity, setIntensity] = useState(60);

  return (
    <PageLayout>
      <div className="bg-white/5 rounded-2xl p-6">

        {/* TITLE */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <MdOutlineColorLens className="text-orange-300 text-xl" />
          <p className="text-lg font-medium">RGB Lighting Control</p>
          <p className="text-xs opacity-70 text-center">
            Customize ambient lighting inside the cabin
          </p>
        </div>

        {/* RGB POWER */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm">Enable RGB Lighting</p>
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

        {/* COLOR SELECTION */}
        <p className="text-sm mb-3">Select Colour</p>
        <div className="flex gap-3 mb-6 flex-wrap">
          {COLORS.map(c => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`w-10 h-10 rounded-full border-2 transition
                ${color === c ? "border-green-400" : "border-transparent"}`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        {/* INTENSITY */}
        <p className="text-sm mb-3">Intensity</p>

        <div className="flex justify-between text-[10px] opacity-60 mb-2">
          {[0, 20, 40, 60, 80, 100].map(val => (
            <span
              key={val}
              className={val === intensity ? "text-white font-medium" : ""}
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
          value={intensity}
          onChange={e => setIntensity(Number(e.target.value))}
          className="w-full accent-red-500 mb-6"
          disabled={!enabled}
        />

        {/* SAVE */}
        <button className="w-full py-3 rounded-lg bg-white/10 flex items-center justify-center gap-2">
          <FiSave />
          Save
        </button>
      </div>
    </PageLayout>
  );
}
