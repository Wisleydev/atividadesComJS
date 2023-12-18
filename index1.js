function verificarNivelDePoluicao(aqi){
    if (aqi >= 0 && aqi <= 50){
        return "Bom - Qualidade do ar é boa.";
    } else
    if (aqi > 50 && aqi <= 100){
        return "Moderado - Qualidade do ar rasoável.";
    } else if (aqi > 100 && aqi <= 150){
        return "Prejudicial a grupos sensiveis.";
    } else if (aqi > 150 && aqi <= 200){
        return "Prejudicial á saude.";
    } else if (aqi > 200 && aqi <= 300){
        return "Muito prejudicial á saúde.";
    }
    else
    { return "Perigoso - Evite atividades ao ar livre.";}
}
//exemplo de uso "const aqi = 120;".
//altere o valor do AQI conforme necesário.
const aqi = 301
const nivelDePoluicao = verificarNivelDePoluicao(aqi);
document.write(`Nivel de Poluição: ${nivelDePoluicao}`);