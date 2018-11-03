import { HorizontalBar } from 'vue-chartjs';

export default {
  extends: HorizontalBar,
  mounted() {
    this.renderChart({
      labels: ['Trinket 1', 'Trinket 2', 'Trinket 3', 'Trinket 4', 'Trinket 5', 'Trinket 6', 'Trinket 7'],
      datasets: [
        {
          label: '330',
          backgroundColor: '#FC2525',
          data: [40, 39, 10, 40, 39, 80, 40],
        }, {
          label: '345',
          backgroundColor: '#05CBE1',
          data: [60, 55, 32, 10, 2, 12, 53],
        },
      ],
    }, {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true,
        }],
      },
    });
  },
};
