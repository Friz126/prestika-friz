import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function LineTimeline({ timeline = null }) {
  const labels = timeline?.labels ?? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
  const values = timeline?.values ?? [30, 40, 50, 60, 55, 70, 90, 100, 120, 150];

  const data = {
    labels,
    datasets: [{
      label: "Prestasi per Bulan",
      data: values,
      fill: true,
      backgroundColor: "rgba(99,102,241,0.12)",
      borderColor: "rgba(99,102,241,1)",
      tension: 0.3
    }]
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-3">Timeline Prestasi (Bulanan)</h3>
      <Line data={data} />
    </div>
  );
}
