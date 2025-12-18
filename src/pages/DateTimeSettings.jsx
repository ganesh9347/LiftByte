import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { FiSave } from "react-icons/fi";
import { BsCalendar } from "react-icons/bs";

export default function DateTimeSettings() {
  const [format, setFormat] = useState("24");
  const [time, setTime] = useState({
    hour: "06",
    minute: "28",
    second: "55"
  });

  return (
    <PageLayout>
      <div className="bg-white/5 rounded-2xl p-6">

        {/* TITLE */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <BsCalendar className="text-orange-300 text-xl" />
          <p className="text-lg font-medium">Date & Time Settings</p>
          <p className="text-xs opacity-70 text-center">
            Configure system clock and time zone
          </p>
        </div>

        {/* TIME FORMAT */}
        <p className="text-sm mb-3">Time Format</p>
        <div className="flex gap-3 mb-6">
          <FormatButton
            active={format === "24"}
            label="24-Hours"
            onClick={() => setFormat("24")}
          />
          <FormatButton
            active={format === "12"}
            label="12-Hours"
            onClick={() => setFormat("12")}
          />
        </div>

        {/* TIME ZONE */}
        <div className="mb-8">
          <p className="text-sm mb-2">Time Zone</p>
          <div className="w-full bg-gray-600/70 rounded-md px-4 py-3 text-sm flex justify-between items-center">
            <span>(UTC+05:30) India Standard Time</span>
            <span className="opacity-70">▾</span>
          </div>
        </div>

        {/* TIME PICKER */}
        <div className="mb-10 text-center">

          {/* faded top */}
          <TimeRow faded time={time} />

          {/* active */}
          <div className="my-4 border-y border-white/20 py-4">
            <div className="flex justify-center gap-8 text-4xl font-semibold">
              <span>{time.hour}</span>
              <span>:</span>
              <span>{time.minute}</span>
              <span>:</span>
              <span>{time.second}</span>
            </div>
          </div>

          {/* faded bottom */}
          <TimeRow faded time={time} />
        </div>

        {/* SAVE */}
        <button className="w-full py-3 rounded-lg bg-white/10 flex items-center justify-center gap-2">
          <FiSave />
          Save
        </button>
      </div>
    </PageLayout>
  );
}

/* ===== UI Helpers ===== */

function FormatButton({ label, active, onClick }) {
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

function TimeRow({ time, faded }) {
  return (
    <div
      className={`flex justify-center gap-8 text-3xl
        ${faded ? "opacity-20" : ""}`}
    >
      <span>{time.hour}</span>
      <span>:</span>
      <span>{time.minute}</span>
      <span>:</span>
      <span>{time.second}</span>
    </div>
  );
}
