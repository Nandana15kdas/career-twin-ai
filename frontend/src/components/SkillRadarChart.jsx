import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement } from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement);

const SkillRadarChart = () => {
  const data = {
    labels: ["React", "TypeScript", "GraphQL", "CSS", "JavaScript"],
    datasets: [
      {
        label: "Skill Level",
        data: [8, 7, 6, 9, 8], 
        backgroundColor: "rgba(34, 202, 236, 0.2)",
        borderColor: "rgba(34, 202, 236, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <h2>Skill Radar Chart</h2>
      <Radar data={data} />
    </div>
  );
};

export default SkillRadarChart;
