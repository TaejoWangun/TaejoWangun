import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

type Props = {
  data: {
    label: string,
    value: number,
  }[]
};

export default function LineChart({ data }: Props) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  const standard = 0.05;

  const [chart, setChart] = useState<Chart<'line', number[], string> | null>(null);

  if (chart) {
    chart.data.datasets[0].data = data.map((e) => e.value);
    chart.data.datasets[1].data = data.map(() => standard);
    chart.data.labels = data.map((e) => e.label);
    chart.update();
  }

  useEffect(() => {
    if (chartRef.current === null) return () => {};
    Chart.register();
    const ctx = chartRef.current;
    // eslint-disable-next-line no-new
    const aChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:30'],
        datasets: [
          {
            label: '데시벨 그래프',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.5,
          }, {
            data: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
            borderColor: 'red',
            borderWidth: 1.5,
            pointStyle: false,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
    setChart(aChart);
    return () => {
      aChart.destroy();
    };
  }, []);
  return (
    <section>
      <canvas ref={chartRef} />
    </section>
  );
}
