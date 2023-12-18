function avaliarElegibilidade(idade, anosExperiencia){
    if (idade < 18){
        return "Desculpe você é muito jovem para se candidatar.";
    } else if (anosExperiencia < 4)
    {return "Desculpe, você não possui experiencia suficiente para se candidatar.";
} else {
    return "Parabéns,você é elegível para se candidatar ao emprego!";
} 
} 
//exemplo de uso.
const idadeDoCandidato = 18;
//altere a idade conforme necessário
const anosDeExperiencia = 8
//altere a experiência em anos conforme necessário.
const resultado = avaliarElegibilidade(idadeDoCandidato, anosDeExperiencia);
document.write(resultado);