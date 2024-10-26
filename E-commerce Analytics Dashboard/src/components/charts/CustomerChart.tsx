import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const data = {
  labels,
  datasets: [
    {
      label: 'New Customers',
      data: [150, 180, 160, 200, 180, 220],
      backgroundColor: 'rgba(139, 92, 246, 0.8)',
      borderRadius: 4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.05)',
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export function CustomerChart() {
  return <Bar options={options} data={data} />;
}