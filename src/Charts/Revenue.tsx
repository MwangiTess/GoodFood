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
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const labels = ['01', '02', '03', '04', '05y', '06', '07', '08', '09', '10', '11', '12',];

export const data = {
  labels,
  datasets: [
    {
      label: 'Last 6 days',
      data: labels.map(() => faker.datatype.number({ min: 400, max: 800 })),
      backgroundColor: '#5A6ACF',
    },
    {
      label: 'Last week',
      data: labels.map(() => faker.datatype.number({ min: 400, max: 800 })),
      backgroundColor: '#E6E8EC',
    },
  ],
};

export function Revenue() {
  return <Bar options={options} data={data} />;
}
