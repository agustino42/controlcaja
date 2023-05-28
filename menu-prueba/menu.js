
 var ctx = document.getElementById('myChart');
 var myGrafico = document.getElementById('myGrafico');
  
  new Chart(ctx, {
    type: 'doughnut',
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



  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });




  
