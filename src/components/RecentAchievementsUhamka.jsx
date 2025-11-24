export default function RecentAchievementsFakultas({ rows = null }) {
  const data = rows ?? [
    { id: 1, name: "Syaiful", fakultas: "FTII", prodi: "TI", title: "Kaspersky SAS CTF 2025", level: "internasional", date: "2025-10-30", status: "Approved" },
    { id: 2, name: "Nina", fakultas: "FEB", prodi: "Akuntansi", title: "Juara 2 Lomba Debat", level: "Provinsi", date: "2025-06-10", status: "Pending" },
    { id: 3, name: "Doni", fakultas: "FFS", prodi: "Farmasi", title: "Paper Award", level: "Internasional", date: "2025-05-21", status: "Approved" },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-3">Recent Achievements</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="p-2">#</th>
              <th className="p-2">Nama</th>
              <th className="p-2">Fakultas / Prodi</th>
              <th className="p-2">Prestasi</th>
              <th className="p-2">Level</th>
              <th className="p-2">Tanggal</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr key={r.id} className="border-t">
                <td className="p-2">{i + 1}</td>
                <td className="p-2 font-medium">{r.name}</td>
                <td className="p-2">{r.fakultas} / {r.prodi}</td>
                <td className="p-2">{r.title}</td>
                <td className="p-2">{r.level}</td>
                <td className="p-2">{r.date}</td>
                <td className="p-2">
                  <span className={`px-3 py-1 rounded-full text-xs ${r.status === "Approved" ? "bg-green-100 text-green-700" : r.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-700"}`}>
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
