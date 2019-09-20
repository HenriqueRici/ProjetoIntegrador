function plot() {
  var func = document.getElementById('function').value;
  var xMin = document.getElementById('lower').value;
  var xMax = document.getElementById('higher').value;
  var yMin = evaluate(func, xMin);
  var yMax = evaluate(func, xMax);

  functionPlot({
        target: '#myFunction',
          data: [{
            fn: func,
            color: 'DodgerBlue'
         }],
          grid: true,
          yAxis: {domain: [yMin, yMax]},
          xAxis: {domain: [xMin, xMax]}
    });
}
