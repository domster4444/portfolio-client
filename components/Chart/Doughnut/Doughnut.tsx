import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: ['#FDEAD3', '#FDE5F9', '#D0F7FF', '#E7FDE5'],
      borderColor: ['#FDEAD3', '#FDE5F9', '#D0F7FF', '#E7FDE5'],
      borderWidth: 1,
    },
  ],
};

export function DynamicDoughnut() {
  return <Doughnut data={data} />;
}
