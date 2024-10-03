// 1 - variaveis

let nome = "Fabio";
console.log(nome);
// let pode ser alterado
nome = "Fabio Rober";
console.log(nome);

const idade = 47;
console.log(idade)

// const não pode ser alterado
//idade = 48;
//console.log(idade)

// 2 - mais sobre variaveis
//let 2teste = "invalido"
let a = 10,
    b = 20,
    c = 30;
console.log(a, b, c)    
const nomecompleto = "Fabio Rober";
const nomeCompleto = "Fabio Rober";
console.log(nomecompleto);
console.log(nomeCompleto);
//simbolos permitidos para criar variaveis
let _teste = "ok"
let $teste = "ok"
console.log(_teste, $teste)

// 3 - prompt
// const age = prompt("Digite sua idade:");
// console.log(`Você tem ${age} quanos anos?`)

// 4 - alert
// alert("testando");

// 5 - Math

console.log(Math.max(10, 5, 8, 3))
console.log(Math.floor(6.15))
console.log(Math.ceil(5.14))

// 7 - if executa se condição é verdadeira

const m = 10;
if(m>5) {
    console.log("m é maior que cinco")
}
const user = "joão"
if(user ==="joão") {
    console.log("ola joão")
}

const texto = "5"
if(texto === "5") {
    console.log("tipo de texto string")    
}

// 8 - else executa se falsa
const loggedin = false
if(loggedin) {
    console.log("Esta autenticado");
} else {
    console.log("não esta autenticado");
}
const q = 10;
const w = 15;
if (q > 5 && w > 20) {
    console.log("Numeros mais altos")
} else {
    console.log("Os numeros não são mais altos")
}

// 9 - else if
if(1 > 2) {
   console.log("teste"); 
} else if (2 > 3) {
    console.log("teste2");
} else if (5 > 1) {
    console.log("Agora sim");
}

const userName = "Fabio"
const userAge = 47

if (userName === "José") {
    console.log("Bem vindo José");
} else if(userName === "Fabio" && userAge === 47) {
    console.log("OLa baio voce tem 47 anos");
} else {
    console.log("Nenhuma condição é verdadeira")
}

// 10 - while # p++ é moesmo que p = p + 1
let p = 0;
while(p < 5) {
    console.log(`Repetindo ${p}`);
    p++;
}

// 11 - do while
let o = 10;
do {
    console.log(`Valor de o: ${o}`);
    o--;
} while(o > 1);

// 12- for
for(let t = 0; t < 10; t++) {
    console.log("Repetindo algo...");
}

let r = 10
for(r; r > 0; r = r - 1) {
    console.log(`O r esta diminuindo: ${r}`);
}

// 13 - Identação = legibilidade do codigo
for (let u = 0; u < 10; u++){
    if (u * 2 > 10){
        console.log(`Maior que 10! ${u}`);
    } else {
        if (u / 2 === 0) {
            console.log("Deu 0")
        }
    }
}

// 14 - break

for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`)
    if (g === 12) {
        console.log("O g é igual a 12");
        break;
    }
}

// 15 - continue
for (let s = 0; s < 10; s++) {
    //opŕador de resto = %
    if (s % 2 === 0){
        console.log("Numero par");
        continue;
    }
    console.log(s)
}

// 16 - switch

const job = "Advogado"

switch(job) {
    case "Programador":
        console.log("Você é programador"); 
            break;   
    case "Advogado":
        console.log("Você é advogado"); 
        break;
    case "Engenheiro":
        console.log("Você é engenheiro"); 
        break; 
    default:
        console.log("Profissão não encontrada");
}





