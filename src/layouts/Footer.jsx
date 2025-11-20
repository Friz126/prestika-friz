export default function Footer() {
  return (
    <div className="bg-white p-1">
      <div className="flex items-center justify-between bg-[#e9f1f4]">
        <div className="flex items-center space-x-2 px-3 py-2">
          <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "#1f6b82" }}></div>
          <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "#63b29c" }}></div>
          <div className="w-5 h-5 rounded-full" style={{ backgroundColor: "yellow" }}></div>
          <span className="font-semibold italic text-black">
            INTEGRITY, TRUST, COMPASSION
          </span>
        </div>
        <div className="w-2 h-full bg-black text-black">1</div>
        <div className="px-4 py-2 text-right font-semibold text-black">
          Uhamka.id
        </div>
      </div>
    </div>
  );
}
