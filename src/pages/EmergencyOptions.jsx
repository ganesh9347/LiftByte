import PageLayout from "../components/layout/PageLayout";
import { AiOutlineAlert } from "react-icons/ai";
import { MdOutlinePhoneInTalk, MdLocalFireDepartment } from "react-icons/md";
import { BsDoorOpen } from "react-icons/bs";
import { FiSave } from "react-icons/fi";

export default function EmergencyOptions() {
  return (
    <PageLayout>
      <div className="bg-white/5 rounded-2xl p-6">

        <div className="flex flex-col items-center gap-2 mb-6">
          <AiOutlineAlert className="text-orange-300 text-xl" />
          <p className="text-lg font-medium">Emergency Options</p>
          <p className="text-xs opacity-70">
            Manage your emergency actions
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card icon={<MdOutlinePhoneInTalk />} label="Call Security" />
          <Card icon={<MdOutlinePhoneInTalk />} label="Emergency Phone Number" />
          <Card icon={<MdLocalFireDepartment />} label="Fire Alert" />
          <Card icon={<BsDoorOpen />} label="Manual Door Open" />
        </div>

        <button className="w-full py-3 rounded-lg bg-white/10 flex items-center justify-center gap-2">
          <FiSave /> Save
        </button>
      </div>
    </PageLayout>
  );
}

function Card({ icon, label }) {
  return (
    <div className="h-24 bg-white/10 rounded-xl flex flex-col items-center justify-center gap-2">
      <div className="text-red-400 text-xl">{icon}</div>
      <p className="text-sm text-center">{label}</p>
    </div>
  );
}
