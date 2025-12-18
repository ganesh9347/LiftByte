import { Routes, Route } from "react-router-dom";
import ActiveHome from "./pages/ActiveHome";
import SettingsDashboard from "./pages/SettingsDashboard";
import SetScreenSaver from "./pages/SetScreenSaver";
import ScreenSleepTimer from "./pages/ScreenSleepTimer";
import RGBLightingControl from "./pages/RGBLightingControl";
import LightFanSettings from "./pages/LightFanSettings";
import FloorPasswordSettings from "./pages/FloorPasswordSettings";
import NameplateSettings from "./pages/NameplateSettings";
import AdjustBrightness from "./pages/AdjustBrightness";
import DateTimeSettings from "./pages/DateTimeSettings";
import AccessibilityOptions from "./pages/AccessibilityOptions";
import SystemInformation from "./pages/SystemInformation";
import SelectTheme from "./pages/SelectTheme";
import EmergencyOptions from "./pages/EmergencyOptions";
import LanguageRegion from "./pages/LanguageRegion";
import HomeActive from "./pages/ActiveHome";
import HomeIdle from "./pages/HomeIdle";




export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeIdle />} />
      <Route path="/active" element={<ActiveHome />} />
      <Route path="/settings" element={<SettingsDashboard />} />
      <Route path="/screen-sleep" element={<SetScreenSaver />} />
      <Route path="/screensleeptimer" element={<ScreenSleepTimer />} />
      <Route path="/rgb-lighting" element={<RGBLightingControl />} />
      <Route path="/light-fan" element={<LightFanSettings />} />
      <Route path="/floor-password" element={<FloorPasswordSettings />}/>
      <Route path="/nameplate" element={<NameplateSettings />} />
      <Route path="/adjust-brightness" element={<AdjustBrightness />} />
      <Route path="/date-time" element={<DateTimeSettings />} />
      <Route path="/accessibility" element={<AccessibilityOptions />} />
      <Route path="/system-info" element={<SystemInformation />} />
      <Route path="/select-theme" element={<SelectTheme />} />
      <Route path="/emergency" element={<EmergencyOptions />} />
      <Route path="/language-region" element={<LanguageRegion />} />
    </Routes>
  );
}
