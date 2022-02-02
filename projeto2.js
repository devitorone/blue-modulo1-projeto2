var prompt = require("prompt-sync")();
do {
  console.log(`
    Bem vindo ao Jokenpo
    `);

  do {
    var rounds = +prompt(`Escolha quantas rodas quer jogar (0-100) => `);
  } while (
    rounds == null ||
    rounds < 0 ||
    rounds > 100 ||
    Number.isInteger(rounds) == false
  );

  var choices = ["Pedra", "Papel", "Tesoura"];

  var pcWins = 0;
  var userWins = 0;
  for (let i = 0; i < rounds; i++) {
    //.ceil não funciona
    var randomChoice = choices[Math.floor(Math.random() * choices.length)];

    do {
      var userChoice = +prompt(`Pedra [1] , Papel [2] ou Tesoura [3]? =>`);
    } while (userChoice != 1 && userChoice != 2 && userChoice != 3);

    console.log(`
        User:${choices[userChoice - 1]} contra  pc:${randomChoice}
        `);
    switch (randomChoice) {
      case "Pedra":
        switch (choices[userChoice - 1]) {
          case "Papel":
            userWins++;
            break;
          case "Tesoura":
            pcWins++;
            break;
        }
      case "Papel":
        switch (choices[userChoice - 1]) {
          case "Tesoura":
            userWins++;
            break;
          case "Pedra":
            pcWins++;
            break;
        }

      case "Tesoura":
        switch (choices[userChoice - 1]) {
          case "Pedra":
            userWins++;
            break;
          case "Papel":
            pcWins++;
            break;
        }
    }
  }

  console.log("Vitórias do PC =>", pcWins, "Vitórias do usuário =>", userWins);

  if (userWins > pcWins) {
    console.log(`Parabéns. Você é um mestre do Jokenpo
    `);
  } else {
    console.log(
      `Você não é abençoado pelo RNGesus. Tente novamente, seu pé frio
        `
    );
  }
  do {
    var playAgain = prompt(`Jogar novamente? sim [s] ou não [n] => `);
  } while (playAgain == null || (playAgain != "s" && playAgain != "n"));
  if (playAgain == `n`) {
    console.log(`*** Game Over ***`);
  } else if (playAgain == `s`) {
    console.clear();
  }
} while (playAgain == `s`);
