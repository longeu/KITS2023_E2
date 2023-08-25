/* eslint-disable react/prop-types */
import { Pie } from "react-chartjs-2";
import { ArcElement, Chart } from "chart.js";
import { Card } from "react-bootstrap";
Chart.register(ArcElement);

const PieChart = ({ teacherPercentage, studentPercentage }) => {
  const data = {
    labels: ["Teachers", "Students"],
    datasets: [
      {
        data: [teacherPercentage, studentPercentage],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  const legendOptions = {
    display: true,
    position: "bottom",
    labels: {
      generateLabels: function (chart) {
        const labels = chart.data.labels;
        const legendItems = chart.legend.legendItems.map((label, index) => {
          return {
            text: `${label.text} - ${labels[index]}`,
            fillStyle: label.fillStyle,
            hidden: label.hidden,
            lineCap: label.lineCap,
            lineDash: label.lineDash,
            lineDashOffset: label.lineDashOffset,
            lineJoin: label.lineJoin,
            lineWidth: label.lineWidth,
            strokeStyle: label.strokeStyle,
          };
        });
        return legendItems;
      },
    },
  };

  return (
    <Card className="chart-card">
      <Card.Body>
        <Card.Title className="chart-title">Users Distribution</Card.Title>
        <Card.Subtitle className="chart-subtitle">
          Teacher vs Student
        </Card.Subtitle>
        <Pie data={data} options={{ legend: legendOptions }} />
      </Card.Body>
    </Card>
  );
};

export default PieChart;
