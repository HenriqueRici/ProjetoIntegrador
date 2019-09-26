function plot() {
  var func = document.getElementById('function').value;
  functionPlot({
        target: '#myFunction',
          data: [{
            fn: func,
            color: 'DodgerBlue'
         }],
          grid: true,
    });
}

