export const dbData = {
  labels: ['Idle', 'Used', 'Backup'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#6896f9', '#85c751', '#d97b70'],
      hoverBackgroundColor: ['#6896f9', '#85c751', '#d97b70'],
      borderWidth: 0,
    },
  ],
}

export const dbOptions = {
  legend: { display: false },
  animation: { animateScale: true },
  cutoutPercentage: 80,
}
