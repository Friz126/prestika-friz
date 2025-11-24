
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Paikategori({ categories = null }) {
  const labels = categories?.labels ?? ["Akademik", "Olahraga", "Teknologi", "Penelitian", "Lainnya"];
  const values = categories?.values ?? [420, 260, 140, 90, 72];

  const data = {
    labels,
    datasets: [{
      data: values,
      backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"]
    }]
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-3">Distribusi Kategori Prestasi</h3>
      <Doughnut data={data} />
    </div>
  );
}
