import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getTodos, getResolvedTodosCount } from "@/store/slices/todoSlice";
import Chart from "chart.js/auto";

const BarChart = () => {
  const chartRef = useRef(null);
  const todos = useSelector(getTodos);
  const resolvedCount = useSelector(getResolvedTodosCount);
  console.log("todos", todos);

  const unresolvedCount = todos.length - resolvedCount;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: ["Resolved", "Unresolved"],
          datasets: [
            {
              label: "Todo Count",
              data: [resolvedCount, unresolvedCount],
              backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(255, 99, 132, 0.2)",
              ],
              borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      return () => {
        chartInstance.destroy();
      };
    }
  }, [resolvedCount, unresolvedCount]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
