import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"
import All from "./client-layout/All";

export default function Leaderboard() {
  const data =
    [
      { id: 1, name: "Syaiful", prodi: "Teknik Informatika", fakultas: "FTII", score: 12 },
      { id: 2, name: "Ikhsan", prodi: "Teknik Informatika", fakultas: "FTII", score: 9 },
      { id: 3, name: "Adit", prodi: "Teknik Informatika", fakultas: "FTII", score: 8 },
    ];
  return (
    <All>
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
    </All>
  );
}
