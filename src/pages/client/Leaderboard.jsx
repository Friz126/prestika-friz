import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import All from "./client-layout/All";

export default function Leaderboard() {
  const data = [
    { id: 1, name: "Syaiful", prodi: "Teknik Informatika", fakultas: "FTII", score: 12 },
    { id: 2, name: "Ikhsan", prodi: "Teknik Informatika", fakultas: "FTII", score: 9 },
    { id: 3, name: "Adit", prodi: "Teknik Informatika", fakultas: "FTII", score: 8 },
  ];
  const notif = [
    {
      id: 1,
      pin: "https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png",
      status: "Accepted",
      description: "Your Achievement has been approved",
      durasi: "2 Days Ago"
    }
  ];
  return (
    <All>
      <div className="flex flex-col lg:gap-10">
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">🏆 Leaderboard</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20 text-center">Rank</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Prodi</TableHead>
                <TableHead>Fakultas</TableHead>
                <TableHead className="text-center">Jumlah Prestasi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell className="text-center font-bold">
                    {index + 1}
                  </TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="font-medium">{item.prodi}</TableCell>
                  <TableCell className="font-medium">{item.fakultas}</TableCell>
                  <TableCell className="text-center font-semibold text-blue-700">
                    {item.score}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-3">🔔 Notification</h3>
          <div className="bg-white rounded-xl shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-20 text-center font-semibold">Pin</TableHead>
                  <TableHead className="font-semibold">Status & Description</TableHead>
                  <TableHead className="font-semibold">Duration</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {notif.map((n) => (
                  <TableRow key={n.id}>
                    <TableCell className="text-center">
                      <img
                        src={n.pin}
                        alt="pin"
                        className="w-12 h-12 rounded-md mx-auto"
                      />
                    </TableCell>
                    <TableCell>
                      <p className="font-bold text-green-600">{n.status}</p>
                      <p className="text-gray-600 text-sm">{n.description}</p>
                    </TableCell>
                    <TableCell className="font-medium">{n.durasi}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

      </div>
    </All>
  );
}
