// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({   
    language: {
      url: '//cdn.datatables.net/plug-ins/1.11.1/i18n/pt_br.json',   
    },
    dom: 'Bfrtip',
        buttons: [
            { extend: 'copy', footer: true },
            { extend: 'excelHtml5', footer: true },
            { extend: 'csvHtml5', footer: true },
            { extend: 'pdfHtml5', footer: true }
        ]
  });  
});

