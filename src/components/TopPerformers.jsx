export default function TopPerformers({ items = null }) {
  const data = items ?? [
    { id: 1, name: "Syaiful Y.", prodi: "TI", fakultas: "FTII", score: 24, avatar: "/mnt/data/69013793-c98c-4f05-a2e6-42f9933ebe51.png" },
    { id: 2, name: "Dewi A.", prodi: "Manajemen", fakultas: "FEB", score: 18, avatar: "/mnt/data/69013793-c98c-4f05-a2e6-42f9933ebe51.png" },
    { id: 3, name: "Ilham R.", prodi: "Farmasi", fakultas: "FFS", score: 15, avatar: "/mnt/data/69013793-c98c-4f05-a2e6-42f9933ebe51.png" },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-3">Top Performers</h3>
      <ul className="space-y-3">
        {data.map((d, i) => (
          <li key={d.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={d.avatar} alt={d.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-medium">{d.name}</div>
                <div className="text-sm text-gray-500">{d.prodi} • {d.fakultas}</div>
              </div>
            </div>
            <div className="text-lg font-bold text-blue-600">{d.score}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
