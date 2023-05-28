const grafico = document.getElementById('grafico');
 
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Productos Activos', 'Total Empleados', 'Productos Vencidos', 'Total Transferencias'],
      datasets: [{
        label: 'Sistema Administrativo',
        data: [154, 19, 18, 40,],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
    }
  });
  