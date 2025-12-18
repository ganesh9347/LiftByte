import Header from "./Header";
import SystemInfo from "./SystemInfo";
import BottomNav from "./BottomNav";

export default function PageLayout({ children }) {
  return (
    <>
    <div className="fixed inset-0 bg-stars" />
      <div className="min-h-screen w-full flex justify-center bg-black text-white">
      <div className="w-full max-w-[420px] min-h-screen bg-gradient-to-b from-[#2d1b52] via-[#102544] to-black relative">
       
        <Header />
        <SystemInfo />

        {/* PAGE CONTENT */}
        <div className="px-6 mt-8">
          {children}
        </div>

        <BottomNav />
      </div>
      </div>
    </>
  );
}
