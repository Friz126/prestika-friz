export default function KpiCards({stats={}}){
  const items=[
    {
      judul:"Total Achievements",
      value:stats.total || 1428,
      accent:"bg-blue-500",
      icon:"🏆"
    },
    {
      judul:"Mahasiswa Aktif",
      value:stats.mahasiswa||2812,
      accent:"bg-green-500",
      icon:"👥",
    },
    {
      judul:"Fakultas Terbanyak",
      value:stats.topFakultas||"FTII",
      accent:"bg-indigo-500",
      icon:"🏛️"
    },
    {
      judul:"Terbaru minggu ini",
      value:stats.weekly||31,
      accent:"bg-yellow-500",
      icon:"📆"
    }
  ];
  return(
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {items.map((it)=>(
    <div key={it.judul} className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
      <div className={`p-3 rounded-lg text-white ${it.accent} text-xl`}>{it.icon}</div>
      <div>
        <div className="text-xs text-gray-500">{it.judul}</div>
        <div className="text-2xl font-bold">{it.value}</div>
      </div>
    </div>
    ))}
  </div>
  );
}
