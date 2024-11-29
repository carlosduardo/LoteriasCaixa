const resultadoMega = document.getElementById("resultadoMega");
// const botaoJogarMega = document.getElementById("botaoJogarMega"); 
const resultadoLotoFacil = document.getElementById("resultadoLotoFacil");
// const botaoJogarLotoFacil = document.getElementById("botaoJogarLotoFacil");
const resultadoQuina = document.getElementById("resultadoQuina");

const deInicialMega = document.getElementById("deInicialMega");
const ateFinalMega = document.getElementById("ateFinalMega");

const deInicialLoto = document.getElementById("deInicialLoto");
const ateFinalLoto = document.getElementById("ateFinalLoto");

const deInicialQuina = document.getElementById("deInicialQuina");
const ateFinalQuina = document.getElementById("ateFinalQuina");

const deInicialMaisMilionariaNum = document.getElementById("deInicialMaisMilionariaNum");
const ateFinalMaisMilionariaNum = document.getElementById("ateFinalMaisMilionariaNum");
const deInicialMaisMilionariaTrevo = document.getElementById("deInicialMaisMilionariaTrevo");
const ateFinalMaisMilionariaTrevo = document.getElementById("ateFinalMaisMilionariaTrevo");

const resultadoMaisMilionariaNum = document.getElementById("resultadoMaisMilionariaNum");
const resultadoMaisMilionariaTrevo = document.getElementById("resultadoMaisMilionariaTrevo")

let rangeMegaSena = 60;
let rangeLotoFacil = 25;
let rangeQuina = 80;
let rangeMaisMilionariaMatrizNum = 50;
let rangeMaisMilionariaMatrizTrevo = 6;

const maisMilionariaMatrizNumQtdTotal = 6;
const maisMilionariaMatrizTrevoQtdTotal = 2;
const megaSenaQtdTotal = 6;
const lotoFacilQtdTotal = 15;
const quinaQtdTotal = 5;

function compareNumeros(a, b) {
    return a - b;
}
  
function geradorMegaSena(){ 
    let de = Number(deInicialMega.value);
    let ate = Number(ateFinalMega.value);    
    if(de == '' || ate == ''){
        return resultadoMega.textContent = "Escolha um número válido!";
    }
    else if(de < 1 || ate > rangeMegaSena){
        return resultadoMega.textContent = "Escolha uma faixa disponível!";
    }
    else if(ate - de <= (megaSenaQtdTotal - 2)) {
        return resultadoMega.textContent = "Escolha uma faixa disponível!"
    }  
    const megaSena = [];
    for(let i = 0; i < megaSenaQtdTotal; i++){ 
            let numeroSorteado = Math.floor(Math.random() * (ate + 1 - de)) + de;
            while(megaSena.indexOf(numeroSorteado) != -1){
                numeroSorteado = Math.floor(Math.random() * (ate + 1 - de) 
            ) + de;                                    
            }   
            megaSena.push(numeroSorteado);            
    }
    megaSena.sort(compareNumeros);
   
    return resultadoMega.innerHTML = `MegaSena:<br> <b>${megaSena.join(" - ")}<b/>`;
}

function geradorLotoFacil(){ 
    let de = Number(deInicialLoto.value);
    let ate = Number(ateFinalLoto.value);  
     
    if(de == '' || ate == ''){
        return resultadoLotoFacil.textContent = "Escolha um número válido!";
    }
    else if(de < 1 || ate > rangeLotoFacil){
        return resultadoLotoFacil.textContent = "Escolha uma faixa disponível!";
    }
    else if(ate - de <= (lotoFacilQtdTotal - 2)) {
        return resultadoLotoFacil.textContent = "Escolha uma faixa disponível!"
    }   
    const lotoFacil = [];
    for(let i = 0; i < lotoFacilQtdTotal; i++){ 
            let numeroSorteado = Math.floor(Math.random() * (ate + 1 - de)) + de;
            while(lotoFacil.indexOf(numeroSorteado) != -1){
                numeroSorteado = Math.floor(Math.random() * (ate + 1 - de)) + de;                                    
            }   
            lotoFacil.push(numeroSorteado);            
    }
    lotoFacil.sort(compareNumeros);
    
    return resultadoLotoFacil.innerHTML = `LotoFácil:<br> <b>${lotoFacil.join(" - ")}<b/>`;
}
   
function geradorQuina(){
    let de = Number(deInicialQuina.value);
    let ate = Number(ateFinalQuina.value);  
    
    if(de == '' || ate == ''){
        return resultadoQuina.textContent = "Escolha um número válido!";
    }
    else if(de < 1 || ate > rangeQuina){
        return resultadoQuina.textContent = "Escolha uma faixa disponível!";
    }
    else if(ate - de <= (quinaQtdTotal - 2)) {
        return resultadoQuina.textContent = "Escolha uma faixa disponível!"
    }   
    const quina = [];
    for(let i = 0; i < quinaQtdTotal; i++){ 
            let numeroSorteado = Math.floor(Math.random() * (ate + 1 - de)) + de;
            while(quina.indexOf(numeroSorteado) != -1){
                numeroSorteado = Math.floor(Math.random() * (ate + 1 - de)) + de;                                    
            }   
            quina.push(numeroSorteado);            
    }
    quina.sort(compareNumeros);

    return resultadoQuina.innerHTML = `Quina:<br> <b>${quina.join(" - ")}<b/>`;
}
    //--------------------------------------------------------------------------------
function geradorMaisMilionaria(){
    let deNum = Number(deInicialMaisMilionariaNum.value);
    let ateNum = Number(ateFinalMaisMilionariaNum.value);  
    //--------------------------------------------------------------------------------
    let deTrevo = Number(deInicialMaisMilionariaTrevo.value);
    let ateTrevo = Number(ateFinalMaisMilionariaTrevo.value);
    //--------------------------------------------------------------------------------  
    if(deNum == '' || ateNum == ''){
        resultadoMaisMilionariaTrevo.textContent = "";
        return resultadoMaisMilionariaNum.textContent = "Escolha um número válido!";
    }
    else if(deNum < 1 || ateNum > rangeMaisMilionariaMatrizNum){
        resultadoMaisMilionariaTrevo.textContent = "";
        return resultadoMaisMilionariaNum.textContent = "Escolha uma faixa disponível!";
    }
    else if(ateNum - deNum <= (maisMilionariaMatrizNumQtdTotal - 2)) {
        resultadoMaisMilionariaTrevo.textContent = "";
        return resultadoMaisMilionariaNum.textContent = "Escolha uma faixa disponível!"
    }      
    //--------------------------------------------------------------------------------       
    if(deTrevo == '' || ateTrevo == ''){
        resultadoMaisMilionariaNum.textContent = "";
        return resultadoMaisMilionariaTrevo.textContent = "Escolha um número válido!";
    }
    else if(deTrevo < 1 || ateTrevo > rangeMaisMilionariaMatrizTrevo){
        resultadoMaisMilionariaNum.textContent = "";
        return resultadoMaisMilionariaTrevo.textContent = "Escolha uma faixa disponível!";
    }
    else if(ateTrevo - deTrevo <= (maisMilionariaMatrizTrevoQtdTotal - 2)) {
        resultadoMaisMilionariaNum.textContent = "";
        return resultadoMaisMilionariaTrevo.textContent = "Escolha uma faixa disponível!"
    }
    //--------------------------------------------------------------------------------
    const maisMilionariaNum = [];
    for(let i = 0; i < maisMilionariaMatrizNumQtdTotal; i++){ 
            let numeroSorteado = Math.floor(Math.random() * (ateNum + 1 - deNum)) + deNum;
            while(maisMilionariaNum.indexOf(numeroSorteado) != -1){
                numeroSorteado = Math.floor(Math.random() * (ateNum + 1 - deNum)) + deNum;                                    
            }   
            maisMilionariaNum.push(numeroSorteado);            
    }
    //--------------------------------------------------------------------------------
    const maisMilionariaTrevo = [];
    for(let i = 0; i < maisMilionariaMatrizTrevoQtdTotal; i++){ 
            let numeroSorteado = Math.floor(Math.random() * (ateTrevo + 1 - deTrevo)) + deTrevo;
            while(maisMilionariaTrevo.indexOf(numeroSorteado) != -1){
                numeroSorteado = Math.floor(Math.random() * (ateTrevo + 1 - deTrevo)) + deTrevo;                                    
            }   
            maisMilionariaTrevo.push(numeroSorteado);            
    }
    //--------------------------------------------------------------------------------
    maisMilionariaNum.sort(compareNumeros);
    maisMilionariaTrevo.sort(compareNumeros);
    //--------------------------------------------------------------------------------
    resultadoMaisMilionariaNum.innerHTML = `<br>Matriz de Números: <b>${maisMilionariaNum.join(" - ")}<b/>\n`;
    resultadoMaisMilionariaTrevo.innerHTML = `<br>Matriz de Números: <b>${maisMilionariaTrevo.join(" - ")}<b/>`;
}