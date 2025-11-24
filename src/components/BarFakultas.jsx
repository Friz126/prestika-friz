import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
);

import { Bar } from 'react-chartjs-2';

export default function BarFakultas({ data = null }) {
  const labels = data?.labels ?? ["FTII","FKIP","FEB","FFS","FAI","FPSI","FIK","FISIP","FK","Pascasarjana","FH"];
  const values = data?.values ?? [420, 320, 210, 150, 120, 95, 65, 43, 21,82,29];
  const chartData = {
    labels,
    datasets: [
      {
        label: "Jumlah Prestasi",
        data: values,
        backgroundColor: "rgba(59,130,246,0.7)",
        borderColor: "rgba(59,130,246,1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className='bg-white p-4 rounded-xl shadow'>
      <h3 className='font-semibold mb-3'>Prestasi per Fakultas</h3>
      <Bar data={chartData} options={{ responsive: true, plugins:{legend:{display:false}}}} />
    </div>
  );
}
