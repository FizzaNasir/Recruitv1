export const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [10, 20, 30, 40, 50, 60],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        lineTension: 0.1
      }
    ]
  };
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  