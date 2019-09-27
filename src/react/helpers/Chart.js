import Chart from 'chart.js'

let data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
}

export const getDoughnut = new Chart(document.getElementById('chart').getContext('2d'), {
    type: 'pie',
    data: data,
    options: options
});