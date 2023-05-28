
const myChart = document.getElementById('myChart');

  new Chart(myChart, {
    type: 'line',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre', 'Diciembre'],
      datasets: [
        {
        label: 'Gastos',
        data: [100, 42, 211, 900, 411,211,110,99,201,900, 500, 1500],
        borderWidth: 1,
        color:'red',
      },
      {
        label: 'Ganancias',
        data: [400, 150, 100, 1500, 600, 300, 700,600,800,1900, 700,6000],
        borderWidth: 4,
        color: 'blue',
      }
    ]
    },
    options: {
      responsive: true,
    }
  });
  
  const grafico = document.getElementById('grafico');

  new Chart(grafico, {
    type: 'bar',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre', 'Diciembre'],
      datasets: [
        {
        label: 'Gastos',
        data: [100, 42, 211, 900, 411,211,110,99,201,900, 500, 1500],
        borderWidth: 1,
        color:'red',
      },
      {
        label: 'Ganancias',
        data: [400, 150, 100, 1500, 600, 300, 700,600,800,1900, 700,6000],
        borderWidth: 4,
        color: 'blue',
      }
    ]
    },
    options: {
      responsive: true,
    }
  });


  const torta = document.getElementById('torta');

  new Chart(torta, {
    type: 'polarArea',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre', 'Diciembre'],
      datasets: [
        {
        label: 'Ganancias',
        data: [100, 42, 211, 900, 411,211,110,99,201,900, 500, 1500],
        borderWidth: 1,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
       
        ]
      },
   
    ]
    },
    options: {
      responsive: true,
    }
  });

  const productos = document.getElementById('productos');

  new Chart(productos, {
    type: 'bar',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre', 'Diciembre'],
      datasets: [
        {
        label: 'Ganancias',
        data: [100, 42, 211, 900, 411,211,110,99,201,900, 500, 1500],
        borderWidth: 1,
        backgroundColor: [
          'rgb(34, 202, 75)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(34, 202, 75)',
          'rgb(54, 162, 235)',
          'rgb(34, 202, 75)',
       
        ]
      },
   
    ]
    },
    options: {
      responsive: true,
      scales: {
        y:{
          beginAtZore: true
        }
      }
    },
    
  });
