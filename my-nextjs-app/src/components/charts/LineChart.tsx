import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getResolvedTodos } from "@/store/slices/todoSlice";
import Chart from "chart.js/auto";

const LineChart = () => {
  const chartRef = useRef(null);
  const resolvedTodos = useSelector(getResolvedTodos);
  const resolvedTodosWithIds = resolvedTodos.map((todo) => todo.id);

  useEffect(() => {
    const categories = Object.keys(resolvedTodosWithIds);

    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: categories,
          datasets: [
            {
              label: "Resolved Todos Ids",
              data: resolvedTodosWithIds,
              borderColor: "rgba(75, 192, 192, 1)",
              fill: false,
            },
          ],
        },
      });
      return () => {
        chartInstance.destroy();
      };
    }
  }, [resolvedTodosWithIds]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
