import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto'

const LineGraph = ({data, options}) => {
  const chartRef = useRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    var myChart = new Chart(myChartRef, {
      type: "line",
      data: data,
      data: {
        ...data,
        datasets: [{
          ...data.datasets[0],
          fill: true, // Add fill color to area under line
          borderColor: "rgba(0, 0, 255, 1)", // Set line color
          backgroundColor: "rgba(0, 0, 255, 0.2)" // Set fill color
        }]
      },
      options: {
        ...options,
        maintainAspectRatio: false,
        responsive: false,
        backgroundColor: 'white'
      }
    });

    return () => {
      myChart.destroy()
    }
  }, [data, options]

  )
  
  

  return (
    
    <canvas
    id="myChart"
    ref={chartRef}
    width={600}
    height={400}
    style={{ backgroundColor: 'white', borderRadius: '10px' }} 
    />
  );
}

export default LineGraph;
