import PageLayout from "../components/layout/PageLayout";
import { ArrowUp, Bell } from "lucide-react";
import ScreenSaver from "../assets/Screensaver.png";

export default function HomeActive() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center">

        {/* ===== LIFT STATUS ===== */}
        <div className="bg-white/5 rounded-2xl w-full max-w-3xl p-6 text-center mb-8">

          {/* FLOOR + DIRECTION */}
          <div className="flex items-center justify-center gap-6 mb-4">
            <ArrowUp className="text-orange-300 w-10 h-10" />
            <span className="text-8xl font-semibold leading-none">3</span>
          </div>

          {/* DESTINATION */}
          <p className="text-sm opacity-80">
            Destination: <span className="font-medium">5th Floor</span>
          </p>
          <p className="text-sm opacity-60">
            Estimated Arrival: <span className="font-medium">20 seconds</span>
          </p>
        </div>

        {/* ===== SCREENSAVER PREVIEW ===== */}
        <div className="relative w-full max-w-3xl rounded-xl overflow-hidden mb-6">
          <img
            src={ScreenSaver}
            alt="Screensaver"
            className="w-full h-56 object-cover"
          />

          <button className="absolute top-4 right-4 bg-white/80 text-black px-4 py-1 rounded-md text-sm">
            Change Screensaver
          </button>
        </div>

        {/* ===== EMERGENCY NOTE ===== */}
        <p className="text-xs opacity-60 mb-10 flex items-center gap-2">
          <Bell size={14} />
          In case of emergency, press the alarm button or use the intercom
        </p>

        {/* ===== FLOOR GRID ===== */}
        <div className="grid grid-cols-3 gap-x-20 gap-y-10 text-center mb-12">
          {[
            ["8", "Eighth Floor"],
            ["7", "Seventh Floor"],
            ["6", "Sixth Floor"],
            ["5", "Fifth Floor"],
            ["4", "Fourth Floor"],
            ["3", "Third Floor", true],
            ["2", "Second Floor"],
            ["1", "First Floor"],
            ["G", "Ground Floor"],
          ].map(([floor, label, active], i) => (
            <div key={i}>
              <p
                className={`text-5xl font-light ${
                  active ? "text-green-500" : ""
                }`}
              >
                {floor}
              </p>
              <p className="text-xs opacity-60">{label}</p>
            </div>
          ))}
        </div>

        {/* ===== CONTROLS ===== */}
        <div className="flex items-center gap-20 mb-10">
          <ControlButton label="◀" />
          <div className="flex flex-col items-center text-sm opacity-70">
            <Bell />
            Alert
          </div>
          <ControlButton label="▶" />
        </div>

        {/* ===== QUICK ACTIONS ===== */}
        <div className="flex justify-center gap-12 text-xs opacity-70">
          <span>Change Theme</span>
          <span>Emergency</span>
          <span>Language</span>
          <span>Settings</span>
        </div>
      </div>
    </PageLayout>
  );
}

/* ===== Reusable Control Button ===== */
function ControlButton({ label }) {
  return (
    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-2xl">
      {label}
    </div>
  );
}

