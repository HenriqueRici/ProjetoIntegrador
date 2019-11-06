function method() {
    var x = valueXandFX[0];
    var y = valueXandFX[1];
    var polinomios = 0;
    var z = new Array();
    var q = new Array();

    for (var j = 0; j < x.length; j++) {
        q[j] = 0;
        z[j] = new Array();
        for (var k = 0; k < x.length; k++) {
            z[j][k] = 0;
            for (var i = 0; i < x.length; i++) {
                z[j][k] += Math.pow(x[i], j + k);
            }
        }
        for (var i = 0; i < x.length; i++) {
            q[j] += y[i] * Math.pow(x[i], j);
        }
    }

    polinomios = math.multiply(math.inv(z), q);
    print(polinomios);
}

function print(pol) {
    var func = "";
    for (var cont = pol.length - 1; cont >= 0; cont--) {
        pol[cont] = Math.round(pol[cont] * 100) / 100;
        if (pol[cont] > 0 || pol[cont] < 0) {
            if (pol[cont - 1] < 0) {
                if (cont == 1) {
                    func += (pol[cont] + "x ").toString();
                } else if (cont == 0) {
                    func += pol[cont].toString();
                } else {
                    func += (pol[cont] + "x^" + cont + " ").toString();
                }
            } else {
                if (cont == 1) {
                    func += (pol[cont] + "x ").toString();
                } else if (cont == 0) {
                    if (pol[cont] < 0) {
                        func += pol[cont].toString();
                    } else {
                        func += " +" + pol[cont].toString();
                    }
                } else {
                    func += (pol[cont] + "x^" + cont + " +").toString();
                }
            }
        }
    }
    document.getElementById("myFunction").innerHTML = func;
    functionPlot({
        target: '#myFunction1',
        grid: true,
        yAxis: { domain: [-20, 20] },
        xAxis: { domain: [-30, 30] },
        data: [
            { fn: func.trim(), color: 'DarkGreen' },
        ],
    });
}