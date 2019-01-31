export const data = {
  labels: [],
  datasets: [
    {
      label: 'Total Peers',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#fff',
      borderColor: '#047bf8',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fff',
      pointBackgroundColor: '#141E41',
      pointBorderWidth: 3,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: '#FC2055',
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 3,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [],
      spanGaps: false,
    },
    {
      label: 'Ohter Graph',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#fff',
      borderColor: '#E47774',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#fff',
      pointBackgroundColor: '#141E41',
      pointBorderWidth: 3,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: '#FC2055',
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 3,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [],
      spanGaps: false,
    },
  ],
}

export const options = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: { parser: 'HH:mm', tooltipFormat: 'll HH:mm' },
        scaleLabel: { display: false },
        ticks: {
          fontSize: '11',
          fontColor: '#969da5',
        },
        gridLines: {
          color: 'rgba(0,0,0,0.05)',
          zeroLineColor: 'rgba(0,0,0,0.05)',
        },
      },
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const ONE_HOUR = 60 * 60 * 1000
const now = Date.now()

export const dataOld = [
  { count: 9287, timestamp: now - 5 * ONE_HOUR },
  { count: 10591, timestamp: now - 4 * ONE_HOUR },
  { count: 9912, timestamp: now - 3 * ONE_HOUR },
  { count: 11111, timestamp: now - 2 * ONE_HOUR },
  { count: 12122, timestamp: now - 1 * ONE_HOUR },
  { count: 12537, timestamp: now - 0 * ONE_HOUR },
]
