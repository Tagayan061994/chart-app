import { useEffect, useRef } from "react";

import Chart from "chart.js/auto";
import { useSelector } from "react-redux";
import { getTodos, getResolvedTodosCount } from "@/store/slices/todoSlice";

export default function PieCharts() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const todos = useSelector(getTodos);

  const resolvedTodosCount = useSelector(getResolvedTodosCount);
  const totalTodosCount = todos.length;

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Resolved", "Unresolved"],
          datasets: [
            {
              data: [resolvedTodosCount, totalTodosCount - resolvedTodosCount],
              backgroundColor: ["#4CAF50", "#FFC107"],
            },
          ],
        },
      });
    }
  }, [resolvedTodosCount, totalTodosCount]);

  return <canvas ref={canvasRef} width="400" height="400"></canvas>;
}
