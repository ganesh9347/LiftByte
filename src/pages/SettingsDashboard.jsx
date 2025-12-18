import PageLayout from "../components/layout/PageLayout";
import {
  Monitor,
  Wifi,
  Palette,
  Zap,
  Clock,
  Moon,
  Key,
  Hash,
  Accessibility,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const settingsItems = [
  { label: "Set Screen Saver", icon: Monitor, path: "/screensaver" },
  { label: "Network & Bluetooth", icon: Wifi, path: "/network" },
  { label: "RGB Lighting Control", icon: Palette, path: "/rgb-lighting" },
  { label: "Light & Fan Settings", icon: Zap, path: "/light-fan" },
  { label: "Date & Time Settings", icon: Clock, path: "/date-time" },
  { label: "Set Screen Sleep Timer", icon: Moon, path: "/screen-sleep" },
  { label: "Floor Password Settings", icon: Key, path: "/floor-password" },
  { label: "Nameplate Settings", icon: Hash, path: "/nameplate" },
  { label: "Accessibility Options", icon: Accessibility, path: "/accessibility" },
  { label: "System Information", icon: Info, path: "/system-info" },
];

export default function SettingsDashboard() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="bg-white/5 rounded-2xl p-6">

        {/* TITLE */}
        <div className="text-center mb-6">
          <p className="text-lg font-medium">Settings</p>
          <p className="text-xs opacity-70">
            Configure system preferences
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {settingsItems.map(({ label, icon: Icon, path }) => (
            <button
              key={label}
              onClick={() => navigate(path)}
              className="bg-white/10 hover:bg-white/15 transition rounded-xl p-4 flex items-center gap-4 text-left"
            >
              <Icon className="text-orange-300" />
              <span className="text-sm">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
