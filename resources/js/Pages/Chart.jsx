import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Chart = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Dataset',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    });

    useEffect(() => {
        fetch('/chart-data')
            .then((response) => response.json())
            .then((data) => {
                const labels = data.map((item) => item.updated_at);
                const values = data.map((item) => item.count_data);

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Values',
                            data: values,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        },
                    ],
                });
            });
    }, []);

    return (
        <div>
            <h2>Chart Example</h2>
            <Line data={chartData} />
        </div>
    );
};

export default Chart;
