import React, { useEffect, useRef } from "react";

const DonutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const data = [22, 42, 38];
    const total = data.reduce((acc, value) => acc + value, 0);
    const radius = 95;
    let startAngle = -Math.PI / 2;

    const widths = [50, 38, 25];

    data.forEach((value, index) => {
      const segmentWidth = (value / total) * (Math.PI * 2);
      let strokeStyle;

      if (index === 1) {
        const gradient = ctx.createLinearGradient(
          150,
          150 - radius,
          150,
          150 + radius
        );
        gradient.addColorStop(0, "rgb(6, 6, 255)");
        gradient.addColorStop(1, "rgb(154, 101, 253)");
        strokeStyle = gradient;
      } else {
        strokeStyle = index === 0 ? "rgb(252, 73, 156)" : "rgb(223, 228, 230)";
      }

      ctx.beginPath();
      ctx.arc(150, 150, radius, startAngle, startAngle + segmentWidth);
      ctx.lineWidth = widths[index];
      ctx.strokeStyle = strokeStyle;
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
