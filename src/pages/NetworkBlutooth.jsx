import PageLayout from "../components/layout/PageLayout";
import { Wifi, Bluetooth, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function NetworkBluetooth() {
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);

  return (
    <PageLayout>
      <div className="bg-white/5 rounded-2xl p-6 max-w-3xl mx-auto">

        {/* ===== TITLE ===== */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <Wifi className="text-orange-300" />
          </div>
          <h2 className="text-lg font-medium">Network & Bluetooth</h2>
          <p className="text-xs opacity-70">
            Manage connectivity options
          </p>
        </div>

        {/* ===== WIFI SECTION ===== */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Wifi size={18} />
              <span className="text-sm">Wi-Fi</span>
            </div>

            <Toggle
              enabled={wifiEnabled}
              onChange={() => setWifiEnabled(!wifiEnabled)}
            />
          </div>

          {/* Connected Network */}
          {wifiEnabled && (
            <div className="bg-white/10 rounded-xl p-4 text-sm">
              <div className="flex items-center justify-between">
                <span>LiftByte_Network</span>
                <span className="flex items-center gap-1 text-green-400">
                  <CheckCircle size={14} /> Connected
                </span>
              </div>

              <p className="text-xs opacity-60 mt-1">
                Signal Strength: 80%
              </p>
            </div>
          )}
        </div>

        {/* ===== BLUETOOTH SECTION ===== */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Bluetooth size={18} />
              <span className="text-sm">Bluetooth</span>
            </div>

            <Toggle
              enabled={bluetoothEnabled}
              onChange={() => setBluetoothEnabled(!bluetoothEnabled)}
            />
          </div>

          {bluetoothEnabled && (
            <div className="bg-white/10 rounded-xl p-4 text-xs opacity-70">
              Searching for nearby devices…
            </div>
          )}
        </div>

        {/* ===== SAVE BUTTON ===== */}
        <button className="w-full bg-white/10 hover:bg-white/15 transition rounded-xl py-3 text-sm">
          Save
        </button>
      </div>
    </PageLayout>
  );
}

/* ===== TOGGLE COMPONENT (same style as other pages) ===== */
function Toggle({ enabled, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`w-12 h-6 rounded-full flex items-center px-1 transition
        ${enabled ? "bg-green-500" : "bg-white/20"}
      `}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full transition
          ${enabled ? "translate-x-6" : ""}
        `}
      />
    </button>
  );
}
