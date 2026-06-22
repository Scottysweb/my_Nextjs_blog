'use client';

import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartPage() {
    // 1. Set up state for the 4 text boxes
    const [FirstSong, setSong1] = useState<Number>(12);
    const [SecSong, setSong2] = useState<Number>(8);
    const [ThridSong, setSong3] = useState<Number>(3);
    const [FourthSong, setSong4] = useState<Number>(5);

    // 2. Construct the Chart.js data object using your state variables
    const data = {
        labels: ['Pink Floyd', 'GunsNRoses', 'Motley Crue', 'Poison'],
        datasets: [
            {
                label: 'What is your favorite Hair Band',
                data: [FirstSong, SecSong, ThirdSong, FourthSong],
                    backgroundColor: 'rgba(74, 183, 118, 0.8)', 
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1,
            },
        ],
    };

    // 3. Define basic configuration options for the chart
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '700px', margin: '0 auto' }}>
            <h2>Next.js + Chart.js Dynamic Inputs</h2>

            {/* Grid layout for the 4 text box inputs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {[
                    { label: 'Box 1', value: FirstSong, setter: setSong1 },
                    { label: 'Box 2', value: SecSong, setter: setSong2 },
                    { label: 'Box 3', value: ThirdSong, setter: setSong3 },
                    { label: 'Box 4', value: FourthSong, setter: setSong4 },
                ].map((input, idx) => (
                    <div key={idx}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>{input.label}:</label>
                        <input
                            type="number"
                            value={input.value}
                            onChange={(e) => input.setter(Number(e.target.value) || 0)}
                            style={{
                                width: '100%',
                                padding: '0.6rem',
                                borderRadius: '6px',
                                border: '1px solid #ccc',
                                fontSize: '1rem'
                            }}
                        />
                    </div>
                ))}
            </div>

            <hr style={{ border: '0', borderTop: '1px solid #e5e7eb', marginBottom: '2rem' }} />

            {/* Container for the Chart.js Canvas */}
            <div style={{ height: '350px', position: 'relative', width: '100%' }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}