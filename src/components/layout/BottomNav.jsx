import { FiChevronLeft, FiHome, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between px-10 mt-14 pb-6">
      <NavItem
        icon={<FiChevronLeft size={17} />}
        label="Go Back"
        onClick={() => navigate(-1)}
      />
      <NavItem
        icon={<FiHome size={17} />}
        label="Go Home"
        onClick={() => navigate("/")}
      />
      <NavItem
        icon={<FiLogOut size={17} />}
        label="Logout"
        onClick={() => alert("Logout action")}
      />
    </div>
  );
}

function NavItem({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 text-xs opacity-80"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
