function functionRoot(method) {
    var func = document.getElementById("function").value;
    var lower = parseFloat(document.getElementById("lower").value);
    var higher = parseFloat(document.getElementById("higher").value);
    var precision = parseFloat(document.getElementById("precision").value);

    method(func, lower, higher, precision);
}

function evaluate(func, number) {
    var x = number;
    return parseFloat(eval(func));
}

function plot(func, xMin, xMax) {
    functionPlot({
        target: '#myFunction',
        data: [{
            fn: func,
            color: 'DodgerBlue'
        }],
        grid: true,
        yAxis: {domain: [evaluate(func, xMin), evaluate(func, xMax)]},
        xAxis: {domain: [xMin, xMax]}
    });
}
