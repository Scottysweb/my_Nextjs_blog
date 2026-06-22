"use client"; // Required for Next.js App Router
import { useState } from 'react';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // Automatically registers scales and elements

const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
        {
            label: "Favorite Song",
            data: [FormData],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
        },
    ],
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
};

export default function BarChart() {
    return (
        <div style={{ width: "100%", height: "400px" }}>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
}
