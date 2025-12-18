import PageLayout from "../components/layout/PageLayout";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { BsSliders } from "react-icons/bs";

export default function SystemInformation() {
  return (
    <PageLayout>
      <div className="bg-white/5 rounded-2xl p-6">

        {/* TITLE */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <BsSliders className="text-orange-300 text-xl" />
          <p className="text-lg font-medium">System Information</p>
          <p className="text-xs opacity-70 text-center">
            View software, hardware, and connectivity details
          </p>
        </div>

        {/* DEVICE DETAILS */}
        <Section title="Device Details">
          <InfoRow label="System Status" value="Online" green />
          <InfoRow label="Version" value="v2.1.4" />
          <InfoRow label="Last Update" value="2 hours ago" />
        </Section>

        {/* NETWORK STATUS */}
        <Section title="Network Status">
          <InfoRow label="Wi-Fi" value="Connected" green />
          <InfoRow label="IP Address" value="192.168.1.24" />
          <InfoRow label="Signal Strength" value="80%" />
        </Section>

        {/* SOFTWARE UPDATE */}
        <Section title="Software Update">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm opacity-80">Current Version</span>
            <span className="text-sm">v2.1.4</span>
          </div>

          <button className="w-full py-3 rounded-md bg-gray-600/70 flex items-center justify-between px-4 text-sm">
            Check for Updates
            <FiArrowRight />
          </button>
        </Section>

        {/* EXPORT */}
        <button className="w-full mt-6 py-3 rounded-lg bg-white/10 flex items-center justify-center gap-2">
          <FiDownload />
          Export Report
        </button>
      </div>
    </PageLayout>
  );
}

/* ===== UI Helpers ===== */

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <p className="text-sm font-medium mb-3">{title}</p>
      {children}
    </div>
  );
}

function InfoRow({ label, value, green }) {
  return (
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm opacity-80">{label}</span>
      <span className={`text-sm ${green ? "text-green-500" : ""}`}>
        {value}
      </span>
    </div>
  );
}
