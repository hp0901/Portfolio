export default function LargeProject() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Title */}
      <span className="text-3xl font-bold text-white drop-shadow-md">Large Projects</span>

      {/* Coming Soon Message */}
      <div className="bg-gradient-to-tr from-purple-600 to-indigo-600 px-8 py-6 rounded-2xl shadow-lg text-center max-w-md">
        <h2 className="text-2xl font-semibold text-white mb-2">
          We’re Working On It
        </h2>
        <p className="text-gray-200 text-sm">
          Our large projects section is under development.  
          We’re crafting something exciting and it will be available soon!
        </p>
      </div>
    </div>
  );
}
