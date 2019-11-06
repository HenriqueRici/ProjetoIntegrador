function plot() {
  var func1 = document.getElementById('function1').value;
  var func2 = document.getElementById('function2').value;
  var func3 = document.getElementById('function3').value;
  var func4 = document.getElementById('function4').value;

  if (func1 != "" && func2 == "" && func3 == "" && func4 == "") {
    functionPlot({
      target: '#myFunction',
      grid: true,
      yAxis: { domain: [-5, 5] },
      xAxis: { domain: [-10, 10] },
      data: [
        { fn: func1.trim(), color: 'DodgerBlue' },
      ],
    });
  } else if (func1 != "" && func2 != "" && func3 == "" && func4 == "") {
    functionPlot({
      target: '#myFunction',
      grid: true,
      yAxis: { domain: [-5, 5] },
      xAxis: { domain: [-10, 10] },
      data: [
        { fn: func1.trim(), color: 'DodgerBlue' },
        { fn: func2.trim(), color: 'FireBrick' },
      ],
    });
  } else if (func1 != "" && func2 != "" && func3 != "" && func4 == "") {
    functionPlot({
      target: '#myFunction',
      grid: true,
      yAxis: { domain: [-5, 5] },
      xAxis: { domain: [-10, 10] },
      data: [
        { fn: func1.trim(), color: 'DodgerBlue' },
        { fn: func2.trim(), color: 'FireBrick' },
        { fn: func3.trim(), color: 'Goldenrod' },
      ],
    });
  } else if (func1 != "" && func2 != "" && func3 != "" && func4 != "") {
    functionPlot({
      target: '#myFunction',
      grid: true,
      yAxis: { domain: [-5, 5] },
      xAxis: { domain: [-10, 10] },
      data: [
        { fn: func1.trim(), color: 'DodgerBlue' },
        { fn: func2.trim(), color: 'FireBrick' },
        { fn: func3.trim(), color: 'Goldenrod' },
        { fn: func4.trim(), color: 'DarkGreen' },
      ],
    });
  } else {
    alert("Nenhuma Função Inserida");
  }
}
