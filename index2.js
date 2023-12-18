//Função que classifica o estado da lâmpada com base na luz ambiente e no status atual da lâmpada.
function classificarEstadoDaLampada(statusLampada, luzAmbiente){
    if (statusLampada === "desligada" && luzAmbiente < 100){
        return "Ligue a lâmpada.";
    } else if (statusLampada === "desligada" && luzAmbiente >= 100){
        return "Lâmpada desligada. A quantidade de luz é adequada.";
    } else if (statusLampada === "ligada" && luzAmbiente <= 200){
        return "Lâmpada ligada";
    } else {return "Lâmpada piscando para alertar sobre a quantidade excessiva de luz";
}
}

//exemplo de uso
const statusLampada = "ligada"; // Altere o status da lâmpada conforme necessário ("ligada" ou "desligada")
const luzAmbiente = 100; //Altere a quantidade de luz ambiente em lux conforme necessário.
const resultado = classificarEstadoDaLampada(statusLampada, luzAmbiente);
document.write(`Estado da lâmpada: ${resultado}`);