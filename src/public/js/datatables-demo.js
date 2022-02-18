// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({   
    language: {
      url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json',   
    },
    order: [[0, 'desc'], [4, 'desc']]   
  });  
});

