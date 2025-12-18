import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { FiSave, FiMonitor } from "react-icons/fi";

const THEMES = [
  { id: 1, img: "/assets/themes/theme1.jpg" },
  { id: 2, img: "/assets/themes/theme2.jpg" },
  { id: 3, img: "/assets/themes/theme3.jpg" },
  { id: 4, img: "/assets/themes/theme4.jpg" },
  { id: 5, img: "/assets/themes/theme5.jpg" }
];

export default function SelectTheme() {
  const [selected, setSelected] = useState(1);

  return (
    <PageLayout>
      <div className="bg-white/5 rounded-2xl p-6">

        {/* TITLE */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <FiMonitor className="text-orange-300 text-xl" />
          <p className="text-lg font-medium">Select Theme</p>
          <p className="text-xs opacity-70 text-center">
            Choose how your panel looks
          </p>
        </div>

        {/* PREVIEW */}
        <div className="rounded-xl overflow-hidden mb-4">
          <img
            src={THEMES.find(t => t.id === selected)?.img}
            alt="Theme Preview"
            className="w-full h-40 object-cover"
          />
        </div>

        {/* THUMBNAILS */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {THEMES.map(theme => (
            <button
              key={theme.id}
              onClick={() => setSelected(theme.id)}
              className={`min-w-[70px] h-16 rounded-md overflow-hidden border-2 transition
                ${selected === theme.id
                  ? "border-green-400"
                  : "border-transparent opacity-70"}`}
            >
              <img
                src={theme.img}
                alt="Theme"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* SAVE */}
        <button className="w-full mt-6 py-3 rounded-lg bg-white/10 flex items-center justify-center gap-2">
          <FiSave />
          Save
        </button>
      </div>
    </PageLayout>
  );
}
