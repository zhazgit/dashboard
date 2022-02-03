// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


const totalAguardandoVistoria = document.getElementById('totalAguardandoVistoria').innerText;
const totalVistoriado = document.getElementById('totalVistoriado').innerText;
const totalAguardandoAprovacao = document.getElementById('totalAguardandoAprovacao').innerText;
const totalAprovado = document.getElementById('totalAprovado').innerText;
const totalEmManutencao = document.getElementById('totalEmManutencao').innerText;
const totalManutencaoConcluida = document.getElementById('totalManutencaoConcluida').innerText;
const totalReprovado = document.getElementById('totalReprovado').innerText;
const totalExpedicao= document.getElementById('totalExpedicao').innerText;



// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Ag. Vistoria", "Vistoriado", "Ag. Aprovação", "Aprovados", "Em Manutenção", "Man. Concluida", "Reprovados", "Em Expedição"],
    datasets: [{
      data: [
        totalAguardandoVistoria, 
        totalVistoriado, 
        totalAguardandoAprovacao, 
        totalAprovado, 
        totalEmManutencao, 
        totalManutencaoConcluida,
        totalReprovado,
        totalExpedicao
      ],
      backgroundColor: [
        '#7B68EE',
        '#9370DB',
        '#8A2BE2',
        '#00FF7F',
        '#9400D3',
        '#A020F0',
        '#DC143C',
        '#8B008B'
      ],
      hoverBackgroundColor: [
        '#7B68EE',
        '#9370DB',
        '#8A2BE2',
        '#00FF7F',
        '#9400D3',
        '#A020F0',
        '#DC143C',
        '#8B008B'
      ],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 20,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});


