$(document).ready(function(){
  $('#birth-date').mask('00/00/0000');
  $('#phone-number').mask('0000-0000');
 })

 const totalAguardandoVistoria = document.getElementById('totalAguardandoVistoria').innerText;
 const totalVistoriado = document.getElementById('totalVistoriado').innerText;
 const totalAguardandoAprovacao = document.getElementById('totalAguardandoAprovacao').innerText;
 const totalAprovado = document.getElementById('totalAprovado').innerText;
 const totalEmManutencao = document.getElementById('totalEmManutencao').innerText;
 const totalManutencaoConcluida = document.getElementById('totalManutencaoConcluida').innerText;
 const totalReprovado = document.getElementById('totalReprovado').innerText;
 const totalExpedicao= document.getElementById('totalExpedicao').innerText;

 console.log(totalAguardandoVistoria);
 console.log(totalVistoriado);
 console.log(totalAguardandoAprovacao);
 console.log(totalAprovado);
 console.log(totalEmManutencao);
 console.log(totalManutencaoConcluida);
 console.log(totalReprovado);
 console.log(totalExpedicao);

 const ctx = document.getElementById('myChart').getContext('2d');
 const myChart = new Chart(ctx, {
     type: 'pie',
     data: {
         labels: ['Aguardando Vistoria', 'Vistoriado', 'Aguardando Aprovação', 'Aprovados', 'Em Manutenção', 'Manutenção Concluida', 'Reprovados','Expedição'],
         datasets: [{
             label: '# of Votes',
             data: [totalAguardandoVistoria, totalVistoriado, totalAguardandoAprovacao, totalAprovado, totalEmManutencao, totalManutencaoConcluida,
                   totalReprovado,totalExpedicao],
             backgroundColor: [
                 'rgba(29, 101, 209, 0.8)',
                 'rgba(29, 209, 110, 0.8)',
                 'rgba(235, 220, 16, 0.8)',
                 'rgba(189, 186, 28, 0.8)',
                 'rgba(28, 178, 189, 0.8)',
                 'rgba(230, 105, 22, 0.8)',
                 'rgba(189, 47, 28, 0.8)',
                 'rgba(44, 28, 189, 0.8)'

             ],
             borderColor: [
                 'rgba(255, 255, 255)',
                 'rgba(255, 255, 255)',
                 'rgba(255, 255, 255)',
                 'rgba(255, 255, 255)',
                 'rgba(255, 255, 255)',
                 'rgba(255, 255, 255)',
                 'rgba(255, 255, 255)',
                 'rgba(255, 255, 255)'
             ],
             borderWidth: 1
         }]
     },
     options: {
      responsive: false,         
     },
});



