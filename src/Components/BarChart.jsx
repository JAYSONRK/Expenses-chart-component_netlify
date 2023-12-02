import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'; 

const BarChart = (prop) => {
    console.log(ChartJS);
    const options = {
        plugins: {
          legend: {
            display: false, // Remove legend
          },
        },
        scales: {
          x: {
            grid: {
              display: false, // Remove vertical grid lines
            },
          },
          y: {
            display: false, // Remove y-axis scale
          },
        },
      };

    return(<>
        <div className="barchart">
            <Bar className= "bar" data={prop.chartData} options={options}/>
        </div>
    </>)
}

export default BarChart;
