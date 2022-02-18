// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontColor = '#252323';

const jan = document.getElementById('jan').innerText;
const fev = document.getElementById('fev').innerText;
const mar = document.getElementById('mar').innerText;
const abr = document.getElementById('abr').innerText;
const mai = document.getElementById('mai').innerText;
const jun = document.getElementById('jun').innerText;
const jul = document.getElementById('jul').innerText;
const ago = document.getElementById('ago').innerText;
const set = document.getElementById('set').innerText;
const out = document.getElementById('out').innerText;
const nov = document.getElementById('nov').innerText;
const dez = document.getElementById('dez').innerText;

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Janeiro", "fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    datasets: [{
      label: "Qtd",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 12
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 400,
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 16,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#252323",
      borderColor: '#252323',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
        }
      }
    },
  }
});



const janA = document.getElementById('janA').innerText;
const fevA = document.getElementById('fevA').innerText;
const marA = document.getElementById('marA').innerText;
const abrA = document.getElementById('abrA').innerText;
const maiA = document.getElementById('maiA').innerText;
const junA = document.getElementById('junA').innerText;
const julA = document.getElementById('julA').innerText;
const agoA = document.getElementById('agoA').innerText;
const setA = document.getElementById('setA').innerText;
const outA = document.getElementById('outA').innerText;
const novA = document.getElementById('novA').innerText;
const dezA = document.getElementById('dezA').innerText;


// Bar Chart Example
var ctx2 = document.getElementById("myBarChart2");
var myBarChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ["Janeiro", "fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    datasets: [{
      label: "Qtd",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [janA,fevA,marA,abrA,maiA,junA,julA,agoA,setA,outA,novA,dezA],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 12
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 400,
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 16,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#252323",
      borderColor: '#252323',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
        }
      }
    },
  }
});
