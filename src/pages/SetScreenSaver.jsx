import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { FiSave } from "react-icons/fi";
import { MdOutlineSlideshow } from "react-icons/md";

const SCREENSAVERS = [
  { id: 1, label: "Nature", img: "/assets/screensaver/nature.jpg" },
  { id: 2, label: "Abstract", img: "/assets/screensaver/abstract.jpg" },
  { id: 3, label: "City", img: "/assets/screensaver/city.jpg" }
];

export default function ScreenSaver() {
  const [enabled, setEnabled] = useState(true);
  const [selected, setSelected] = useState(1);

  const activeSaver = SCREENSAVERS.find(s => s.id === selected);

  return (
    <PageLayout>
      <div className="bg-white/5 rounded-2xl p-6">

        {/* TITLE */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <MdOutlineSlideshow className="text-orange-300 text-xl" />
          <p className="text-lg font-medium">Screen Saver</p>
          <p className="text-xs opacity-70 text-center">
            Choose what appears when the screen is idle
          </p>
        </div>

        {/* ENABLE TOGGLE */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm">Enable Screen Saver</p>
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

        {/* PREVIEW */}
        <div className="rounded-xl overflow-hidden mb-4">
          <img
            src={activeSaver?.img}
            alt="Screen Saver Preview"
            className={`w-full h-40 object-cover transition
              ${!enabled ? "opacity-50" : ""}`}
          />
        </div>

        {/* OPTIONS */}
        <p className="text-sm mb-3">Select Screen Saver</p>

        <div className="flex gap-3 overflow-x-auto pb-2 mb-6">
          {SCREENSAVERS.map(item => (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              disabled={!enabled}
              className={`min-w-[90px] h-20 rounded-lg overflow-hidden border-2 transition
                ${
                  selected === item.id
                    ? "border-green-400"
                    : "border-transparent"
                }
                ${!enabled ? "opacity-50" : ""}`}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover"
              />
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
