import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { FiSave } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";

const LANGUAGES = [
  { id: "en", label: "English (India)" },
  { id: "hi", label: "Hindi (भारत)" },
  { id: "ar", label: "Arabic (العربية)" },
  { id: "zh", label: "Chinese (中文)" },
  { id: "fr", label: "French (Français)" }
];

export default function LanguageRegion() {
  const [selectedLang, setSelectedLang] = useState("en");

  return (
    <PageLayout>
      <div className="bg-white/5 rounded-2xl p-6">

        {/* TITLE */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <MdLanguage className="text-orange-300 text-xl" />
          <p className="text-lg font-medium">Language & Region</p>
          <p className="text-xs opacity-70 text-center">
            Configure the branding and basic information shown on the cabin display.
          </p>
        </div>

        {/* REGION FORMAT */}
        <div className="mb-6">
          <p className="text-sm mb-2">Region Format</p>
          <div className="w-full bg-gray-600/70 rounded-md px-4 py-3 text-sm flex justify-between items-center">
            <span>India</span>
            <span className="opacity-70">▾</span>
          </div>
        </div>

        {/* LANGUAGE SELECTION */}
        <p className="text-sm mb-4">Select Display Language</p>

        <div className="space-y-4">
          {LANGUAGES.map(lang => (
            <LanguageOption
              key={lang.id}
              label={lang.label}
              active={selectedLang === lang.id}
              onClick={() => setSelectedLang(lang.id)}
            />
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

/* ===== Small reusable row ===== */
function LanguageOption({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center"
    >
      <span className="text-sm">{label}</span>

      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
          ${active ? "border-green-400" : "border-white/40"}`}
      >
        {active && (
          <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
        )}
      </div>
    </button>
  );
}
