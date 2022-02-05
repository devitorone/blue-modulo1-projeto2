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
      var userChoice = prompt(`1.Pedra  , 2.Papel  ou 3.Tesoura ? => `);
      var choiceList = [
        "1",
        "2",
        "3",
        "Pedra",
        "Papel",
        "Tesoura",
        "tesoura",
        "papel",
        "pedra",
      ];
      if (choiceList.includes(userChoice) == false) {
        console.log(`Erro: você deve escolher entre ${choiceList}`);
      }
    } while (choiceList.includes(userChoice) == false);

    switch (userChoice) {
      case "1":
      case "Pedra":
      case "pedra":
        var userChoice = "Pedra";
        break;
      case "2":
      case "Papel":
      case "papel":
        userChoice = "Papel";
        break;
      case "3":
      case "Tesoura":
      case "tesoura":
        userChoice = "Tesoura";
        break;
    }

    console.log(`
        Você escolheu "${userChoice}" contra "${randomChoice}"
        `);

    if (randomChoice == 'Pedra'){

      if (userChoice == 'Papel'){
          userWins++;
      } else if(userChoice == 'Tesoura'){
            pcWins++;
      }
    }else if (randomChoice=='Papel'){

        if (userChoice == 'Tesoura'){
          userWins++;
      } else if(userChoice == 'Pedra'){
            pcWins++;
      }
    }else if (randomChoice=='Tesoura'){
      
        if (userChoice == 'Pedra'){
          userWins++;
      } else if(userChoice == 'Papel'){
            pcWins++;
      }
    }
  }

  console.log("Vitórias do PC =>", pcWins, "Vitórias do usuário =>", userWins);

  if (userWins > pcWins) {
    console.log(`
    Parabéns. Você é um mestre do Jokenpo
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
