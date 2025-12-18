import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { FiSave } from "react-icons/fi";
import { MdAccessibilityNew } from "react-icons/md";

const TEXT_SIZES = [
  { id: "normal", label: "Normal Text" },
  { id: "large", label: "Large Text" },
  { id: "xlarge", label: "Extra Large Text" }
];

export default function AccessibilityOptions() {
  const [textSize, setTextSize] = useState("normal");
  const [audioAlerts, setAudioAlerts] = useState(true);
  const [vibration, setVibration] = useState(true);

  return (
    <PageLayout>
      <div className="bg-white/5 rounded-2xl p-6">

        {/* TITLE */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <MdAccessibilityNew className="text-orange-300 text-xl" />
          <p className="text-lg font-medium">Accessibility Options</p>
          <p className="text-xs opacity-70 text-center">
            Customize visibility, sound, and touch feedback for better comfort
          </p>
        </div>

        {/* TEXT VISIBILITY */}
        <p className="text-sm mb-3">Text Visibility</p>

        <div className="flex gap-3 mb-4">
          {TEXT_SIZES.map(option => (
            <SegmentButton
              key={option.id}
              active={textSize === option.id}
              label={option.label}
              onClick={() => setTextSize(option.id)}
            />
          ))}
        </div>

        {/* PREVIEW */}
        <div className="bg-gray-600/60 rounded-md py-4 text-center mb-6">
          <span
            className={`${
              textSize === "normal"
                ? "text-sm"
                : textSize === "large"
                ? "text-base"
                : "text-lg"
            }`}
          >
            Aa Preview Text
          </span>
        </div>

        {/* AUDIO & HAPTIC */}
        <p className="text-sm mb-4">Audio & Haptic Feedback</p>

        <ToggleRow
          label="Enable Audio Alerts"
          enabled={audioAlerts}
          onToggle={() => setAudioAlerts(!audioAlerts)}
        />

        <ToggleRow
          label="Enable Vibration Feedback"
          enabled={vibration}
          onToggle={() => setVibration(!vibration)}
        />

        {/* SAVE */}
        <button className="w-full mt-6 py-3 rounded-lg bg-white/10 flex items-center justify-center gap-2">
          <FiSave />
          Save
        </button>
      </div>
    </PageLayout>
  );
}

/* ===== UI Helpers ===== */

function SegmentButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-2 rounded-full text-sm transition
        ${active ? "bg-green-400 text-black" : "bg-white/10"}`}
    >
      {label}
    </button>
  );
}

function ToggleRow({ label, enabled, onToggle }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <span className="text-sm">{label}</span>

      <button
        onClick={onToggle}
        className={`w-12 h-6 rounded-full relative transition
          ${enabled ? "bg-green-400" : "bg-gray-600"}`}
      >
        <span
          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition
            ${enabled ? "right-1" : "left-1"}`}
        />
      </button>
    </div>
  );
}
