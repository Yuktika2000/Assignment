import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DonutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current;

    const data = {
      datasets: [
        {
          data: [35, 50, 15],
          backgroundColor: [
            " rgb(240, 152, 165)",
            "blue",
            "rgb(223, 228, 230)",
          ],
        },
      ],
    };

    new Chart(ctx, {
      type: "doughnut",
      data,
      options: {
        cutout: "60%",
        animation: {
          animateRotate: false,
        },
      },
    });
  }, []);

  return (
    <div className="donut-chart-container">
      <canvas ref={chartRef} className="canvas" />
      <div className="donut-chart-text">
        <div className="donut-chart-inner">
          <h4>65%</h4>
          <p>Total new customers</p>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
