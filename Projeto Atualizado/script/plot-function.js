function plot() {
  var func1 = document.getElementById('function1').value;
  var func2 = document.getElementById('function2').value;
  var func3 = document.getElementById('function3').value;
  var func4 = document.getElementById('function4').value;

  functionPlot({
    target: '#myFunction',
    height: 450,
    width: 700,
    data: [
      { fn: func1, color: 'DodgerBlue' },
      { fn: func2, color: 'FireBrick' },
      { fn: func3, color: 'Goldenrod' },
      { fn: func4, color: 'DarkGreen' }
    ],
    grid: true,
  });
}

function lagrange() {
  var d = [Number(document.getElementById('x0').value), Number(document.getElementById('x1').value), Number(document.getElementById('x2').value)];
  var fd = [Number(document.getElementById('fx0').value), Number(document.getElementById('fx1').value), Number(document.getElementById('fx2').value)];
  var P = 0;
  var x = -3; //transformar essa variavel dinamica

  for (var k = 0; k < d.length; k++) {
    var L = 1;
    for (var j = 0; j < d.length; j++) {
      if (k != j) {
        L = L / (d[k] - d[j]) * (x - d[j]);
      }
    }
    P = P + (L * fd[k]);
  }
  document.getElementById("myFunction").innerHTML = P;

  var func = P.toString();
  functionPlot({
    target: '#myGraphic',
    data: [{
      fn: func,
      color: 'DodgerBlue'
    }],
    grid: true,
  });
}