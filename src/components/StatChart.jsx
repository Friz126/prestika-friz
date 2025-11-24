import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);
export default function StatChart() {
  const data = {
    labels: [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8"
    ],
    datasets: [
      {
        label:"Jumlah Prestasi",
        data: [12, 9, 8, 5, 7, 2, 1, 4],
        backgroundColor: "rgba(54,162,235,0.5)",
        borderColor: "rgba(54,162,235,1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      }
    }
  }
  return (
    <div className='bg-white p-5 rounded-xl shadow'>
      <h2 className='text-xl font-bold mb-4'> 📊 Statistik Prestasi Pribadi</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
