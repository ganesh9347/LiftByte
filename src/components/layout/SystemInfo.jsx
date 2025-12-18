const SystemInfo = () => {
  return (
    <>
      {/* DATE / TIME / TEMP */}
      <div className="mx-6 mt-6 bg-white/5 backdrop-blur-md rounded-xl p-4 flex justify-between">
        <div>
          <p className="text-xs opacity-70">Friday, 21st June</p>
          <p className="text-2xl font-semibold">14:12</p>
        </div>
        <div className="text-right">
          <p className="text-xs opacity-70">Temperature</p>
          <p className="text-lg">23°C • Clear Skies</p>
        </div>
      </div>

      {/* SYSTEM STATUS */}
      <div className="mx-6 mt-6 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="opacity-70">System Status</span>
          <span className="text-green-500">Online</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-70">Version</span>
          <span>v2.1.4</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-70">Last Update</span>
          <span>2 hours ago</span>
        </div>
      </div>
    </>
  );
}

export default SystemInfo;