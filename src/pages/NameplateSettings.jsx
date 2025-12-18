import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { FiSave, FiPlus, FiMinus, FiEdit2, FiUpload } from "react-icons/fi";
import { BsBraces } from "react-icons/bs";

const FLOORS = ["Floor 1", "Floor 2", "Floor 3", "Floor 4", "Floor 5", "Floor 6", "Floor 7"];

export default function NameplateSettings() {
  const [liftName, setLiftName] = useState("");
  const [persons, setPersons] = useState(8);
  const [load, setLoad] = useState(900);
  const [editingFloor, setEditingFloor] = useState("Floor 1");
  const [floorName, setFloorName] = useState("");

  return (
    <PageLayout>
      <div className="bg-white/5 rounded-2xl p-6">

        {/* TITLE */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <BsBraces className="text-orange-300 text-xl" />
          <p className="text-lg font-medium">Nameplate Settings</p>
          <p className="text-xs opacity-70 text-center">
            Configure branding and information displayed inside the cabin
          </p>
        </div>

        {/* LIFT NAME */}
        <div className="mb-6">
          <p className="text-sm mb-2">Lift Name</p>
          <input
            value={liftName}
            onChange={e => setLiftName(e.target.value.slice(0, 10))}
            placeholder="Enter Lift Name"
            className="w-full bg-gray-600/70 rounded-md px-4 py-3 text-sm outline-none"
          />
          <p className="text-xs opacity-60 mt-1">
            Maximum characters allowed is 10
          </p>
        </div>

        {/* UPLOAD LOGO */}
        <div className="mb-6">
          <p className="text-sm mb-2">Upload Logo</p>
          <div className="w-full h-16 border border-white/20 rounded-md flex items-center justify-center gap-2 text-sm opacity-80">
            <FiUpload />
            Click to upload logo
          </div>
        </div>

        {/* PERSONS & LOAD */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <Counter
            label="Persons"
            value={persons}
            onMinus={() => setPersons(p => Math.max(1, p - 1))}
            onPlus={() => setPersons(p => p + 1)}
          />
          <Counter
            label="Load (+10 kg)"
            value={`${load} Kgs`}
            onMinus={() => setLoad(l => Math.max(100, l - 10))}
            onPlus={() => setLoad(l => l + 10)}
          />
        </div>

        {/* FLOOR NAMES */}
        <div className="mb-6">
          {FLOORS.map(floor => (
            <div key={floor} className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm">{floor}</p>

                {editingFloor === floor ? (
                  <button
                    className="text-sm text-orange-300"
                    onClick={() => setEditingFloor("")}
                  >
                    ✓ Confirm
                  </button>
                ) : (
                  <FiEdit2
                    className="opacity-70"
                    onClick={() => {
                      setEditingFloor(floor);
                      setFloorName("");
                    }}
                  />
                )}
              </div>

              {editingFloor === floor && (
                <>
                  <input
                    value={floorName}
                    onChange={e => setFloorName(e.target.value.slice(0, 10))}
                    placeholder="Enter Floor Name"
                    className="w-full bg-gray-600/70 rounded-md px-4 py-3 text-sm outline-none"
                  />
                  <p className="text-xs opacity-60 mt-1">
                    Maximum characters allowed is 10
                  </p>
                </>
              )}
            </div>
          ))}
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

function Counter({ label, value, onMinus, onPlus }) {
  return (
    <div>
      <p className="text-sm mb-2">{label}</p>
      <div className="flex items-center gap-3">
        <button className="text-orange-300" onClick={onMinus}>
          <FiMinus />
        </button>
        <div className="w-20 text-center py-2 rounded-md bg-gray-600/70">
          {value}
        </div>
        <button className="text-orange-300" onClick={onPlus}>
          <FiPlus />
        </button>
      </div>
    </div>
  );
}
