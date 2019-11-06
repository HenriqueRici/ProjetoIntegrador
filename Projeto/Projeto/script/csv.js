function verificaExtensao($input) {
    var extPermitidas = ['csv'];
    var extArquivo = $input.value.split('.').pop();

    if (typeof extPermitidas.find(function (ext) {
        return extArquivo == ext;
    }) == 'undefined') {
        alert('Extensão "' + extArquivo + '" não permitida!');
        $input.value = null;
        return false;
    }
    return true;
}

function pegaCSV(inputFile) {
    var leitorDeCSV = new FileReader();
    leitorDeCSV.onload = this.leCSV;
    if (verificaExtensao(inputFile)) {
        var file = inputFile.files[0];
        leitorDeCSV.readAsText(file);
    } else {
        window.location.reload();
    }
}
var valueXandFX = new Array();
function leCSV(evt) {
    valueXandFX[0] = new Array();
    valueXandFX[1] = new Array();
    var fileArr = evt.target.result.split('\n');
    for (var i = 0; i < fileArr.length; i++) {
        var fileLine = fileArr[i].split('.');
        valueXandFX[0][i] = fileLine.toString().split(",", 1);
        valueXandFX[1][i] = fileLine.toString().substring(fileLine.toString().indexOf(",") + 1);
    }
    document.getElementById("myFunction").innerHTML = "x = " + valueXandFX[0] + "<br><br>"
        + "f(x) = " + valueXandFX[1];
    document.getElementById("myFunction1").innerHTML = null;

}