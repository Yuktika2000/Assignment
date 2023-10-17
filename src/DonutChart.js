import React, { useEffect, useRef } from "react";

const DonutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const data = [22, 40, 43];
    const colors = [
      "rgb(252, 85, 163)",
      "rgb(47, 38, 180)",
      "rgb(223, 228, 230)",
    ];
    const total = data.reduce((acc, value) => acc + value, 0);
    const radius = 95; // Adjust as needed
    let startAngle = -Math.PI / 2;

    const widths = [53, 43, 25]; // Adjust these values for the desired widths

    data.forEach((value, index) => {
      const segmentWidth = (value / total) * (Math.PI * 2);
      ctx.beginPath();
      ctx.arc(150, 150, radius, startAngle, startAngle + segmentWidth);
      ctx.lineWidth = widths[index];
      ctx.strokeStyle = colors[index];
      ctx.stroke();
      startAngle += segmentWidth;
    });
  }, []);

  return (
    <div className="donut-chart-container">
      <canvas ref={chartRef} width="300" height="300" />
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
