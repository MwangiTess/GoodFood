import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Afternoon', 'Evening', 'Morning'],
  datasets: [
    {
      data: [40, 32, 28],
      backgroundColor: [
        '#5A6ACF',
        '#8593ED',
        '#C7CEFF',
      ],
      borderColor: [
        '#C7CEFF',
        '#8593ED',
        '#5A6ACF',
      ],
      borderWidth: 1,
    },
  ],
};

export function OrderTimePie() {
  return <Doughnut data={data} />;
}
