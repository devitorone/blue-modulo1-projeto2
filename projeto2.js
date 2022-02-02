var prompt = require('prompt-sync')();

console.log(`
Bem vindo ao Jokenpo
`)

do {
    var rounds = +prompt(`Escolha quantas rodas quer jogar (0-100) => `);
} while (rounds==null || rounds<0 || rounds>100 || Number.isInteger(rounds) == false);

var choices = [
    "Pedra",
    "Papel",
    "Tesoura"
];

var pcWins = 0;
var userWins = 0;
for (let i=0; i<rounds; i++) { 
    //.ceil não funciona
    var randomChoice = choices[Math.floor(Math.random()*choices.length)];

    do {
        var userChoice = +prompt(`Pedra [1] , Papel [2] ou Tesoura [3]? =>`);
    } while(userChoice!=1 && userChoice!=2 && userChoice!=3);

    console.log(`
    User:${choices[userChoice-1]} contra  pc:${randomChoice}
    `);
}

