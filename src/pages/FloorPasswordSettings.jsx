import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { FiSave, FiEye, FiEyeOff } from "react-icons/fi";
import { BsKey } from "react-icons/bs";

const FLOORS = [
  "Floor 1",
  "Floor 2",
  "Floor 3",
  "Floor 4",
  "Floor 5",
  "Floor 6",
  "Floor 7"
];

export default function FloorPasswordSettings() {
  const [activeFloor, setActiveFloor] = useState("Floor 1");
  const [enabledFloors, setEnabledFloors] = useState({ "Floor 1": true });
  const [passwords, setPasswords] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const toggleFloor = floor => {
    setEnabledFloors(prev => ({
      ...prev,
      [floor]: !prev[floor]
    }));
    setActiveFloor(floor);
  };

  return (
    <PageLayout>
      <div className="bg-white/5 rounded-2xl p-6">

        {/* TITLE */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <BsKey className="text-orange-300 text-xl" />
          <p className="text-lg font-medium">Floor Password Settings</p>
          <p className="text-xs opacity-70 text-center">
            Set or update passwords for individual floors
          </p>
        </div>

        {/* FLOOR LIST */}
        {FLOORS.map(floor => {
          const enabled = !!enabledFloors[floor];
          const isActive = activeFloor === floor;

          return (
            <div key={floor} className="mb-5">

              {/* FLOOR HEADER */}
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm">{floor}</p>

                <button
                  onClick={() => toggleFloor(floor)}
                  className={`w-12 h-6 rounded-full relative transition
                    ${enabled ? "bg-green-400" : "bg-gray-600"}`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition
                      ${enabled ? "right-1" : "left-1"}`}
                  />
                </button>
              </div>

              {/* PASSWORD INPUT */}
              {enabled && isActive && (
                <>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      value={passwords[floor] || ""}
                      onChange={e =>
                        setPasswords({
                          ...passwords,
                          [floor]: e.target.value
                        })
                      }
                      className="w-full bg-gray-600/70 rounded-md px-4 py-3 text-sm outline-none"
                    />

                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70"
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>

                  <p className="text-xs opacity-60 mt-1">
                    Password required to access this floor
                  </p>
                </>
              )}
            </div>
          );
        })}

        {/* SAVE */}
        <button className="w-full mt-4 py-3 rounded-lg bg-white/10 flex items-center justify-center gap-2">
          <FiSave />
          Save
        </button>
      </div>
    </PageLayout>
  );
}
