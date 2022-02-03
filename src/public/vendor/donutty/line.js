const labels = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

const data = {
    labels: labels,
    datasets: [
    {
      label: 'Coletores',
      backgroundColor: '#FFFFFF',
      borderColor: 'rgb(255, 99, 132)',
      data: [25, 0, 100, 45, 322, 85, 75, 5, 24, 12, 58,74],
    },
    {
        label: 'Leitores',
        backgroundColor: '#FFFFFF',
        borderColor: 'rgb(61, 164, 212)',
        data: [25, 0, 10, 75, 200, 85, 2, 5, 88, 12, 16,25],
    },
    {
        label: 'Impressoras',
        backgroundColor: '#FFFFFF',
        borderColor: 'rgb(61, 164, 212)',
        data: [25, 0, 10, 75, 200, 85, 2, 5, 88, 12, 16,25],
    },
    {
        label: 'Busca Preços',
        backgroundColor: '#FFFFFF',
        borderColor: 'rgb(61, 164, 212)',
        data: [25, 0, 10, 75, 200, 85, 2, 5, 88, 12, 16,25],
    },
    {
        label: 'Outros',
        backgroundColor: '#FFFFFF',
        borderColor: 'rgb(61, 164, 212)',
        data: [25, 0, 10, 75, 200, 85, 2, 5, 88, 12, 16,25],
    },

]
};


const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChar'),
    config
);
