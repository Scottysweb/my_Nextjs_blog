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
import { color } from 'chart.js/helpers';

// Register the required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartPage() {
    // 1. Set up state for the 4 text boxes
    const [FirstSong, setFirstSong] = useState<number>(12);
    const [SecSong, setSecSong] = useState<number>(19);
    const [ThirdSong, setThirdSong] = useState<number>(3);
    const [FourthSong, setFourthSong] = useState<number>(5);

    // 2. Construct the Chart.js data object using your state variables
    const data = {
        labels: ['Pink Floyd', 'GunsNRoses', 'Motley Crue', 'Poison'],
        datasets: [
            {
                label: 'Favorite Hair Band',
                data: [FirstSong, SecSong, ThirdSong, FourthSong],
                backgroundColor: 'rgb(38, 209, 116)', // 
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1,
            },
        ],
    };

    // 3. Define basic configuration options for the chart
    const options = {
        plugins: {
            legend: {
                labels: {
                    // This changes the color of the legend text ("Favorite Hair Band")
                    color: 'Blue', // Set your desired color here (e.g., white)
                    font: {
                        size: 14 // Optional: change font size
                    }
                }
            }
        },
        scales: {
            // This changes the color of the axis labels ('Pink Floyd', 'GunsNRoses', etc.)
            x: {
                ticks: {
                    color: 'Blue', // Color of X-axis labels
                }
            },
            y: {
                ticks: {
                    color: 'Blue', // Color of Y-axis labels
                }
            }
        }
    };

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '700px', margin: '0 auto' }}>
            <h2>Next.js + Chart.js Dynamic Inputs</h2>

            {/* Grid layout for the 4 text box inputs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {[
                    { label: 'Pink Floyd', value: FirstSong, setter: setFirstSong, color: 'red'},
                    { label: 'GunsNRoses', value: SecSong, setter: setSecSong },
                    { label: 'Motley Crue', value: ThirdSong, setter: setThirdSong },
                    { label: 'Poison', value: FourthSong, setter: setFourthSong },
                ].map((input, idx) => (
                    <div key={idx}>
                        <label style={{ display: 'block', color: 'green', marginBottom: '0.5rem', fontWeight: 'bold' }}>{input.label}:</label>
                        <input
                            type="number"
                            value={input.value}
                            onChange={(e) => input.setter(Number(e.target.value) || 0)}
                            style={{
                                width: '100%',
                                padding: '0.6rem',
                                borderRadius: '6px',
                                border: '1px solid #ccc',
                                fontSize: '1rem',
                                color: 'blue'
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