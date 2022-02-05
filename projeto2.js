const prompt = require("prompt-sync")();

while (true) {
  const elementos = ["PEDRA", "PAPEL", "TESOURA"];
  let vitorias = 0;
  let derrotas = 0;
  let empates = 0;
  let rodadas = 0;
  let escolhaJogador = "";

  console.log();
  let jogador = prompt("Insira o nome do jogador: ");
  console.log();
  console.log(`Olá, ${jogador}!

Vamos jogar Jokenpô?

Você tem que escolher entre [PEDRA], [PAPEL] e [TESOURA], sendo que:
Pedra ganha da tesoura;
Tesoura ganha do papel;
Papel ganha da pedra!

Será que você será capaz de me vencer?`);

  console.log();
  while (true) {
    rodadas = +prompt(
      `${jogador}, quantas rodadas você gostaria de jogar? `
    ).trim();
    if (isNaN(rodadas) || rodadas < 1) {
      console.log(`Número Inválido.`);
    } else {
      break;
    }
  }
  console.log();
  for (let i = 0; i < rodadas; i++) {
    escolhaJogador = prompt("Escolha [PEDRA], [PAPEL] e [TESOURA]: ")
      .toUpperCase()
      .trim();
    while (true) {
      if (
        escolhaJogador != "PEDRA" &&
        escolhaJogador != "PAPEL" &&
        escolhaJogador != "TESOURA"
      ) {
        console.log("Escolha inválida!");
        escolhaJogador = prompt("Escolha [PEDRA], [PAPEL] e [TESOURA]: ")
          .toUpperCase()
          .trim();
      } else {
        break;
      }
    }
    console.log();
    let escolhaPc = elementos[Math.floor(Math.random() * elementos.length)];
    console.log(`A escolha do PC foi: ${escolhaPc}
  A sua escolha foi: ${escolhaJogador}`);
    console.log();
    if (
      (escolhaPc == elementos[0] && escolhaJogador == elementos[1]) ||
      (escolhaPc == elementos[1] && escolhaJogador == elementos[2]) ||
      (escolhaPc == elementos[2] && escolhaJogador == elementos[0])
    ) {
      console.log("Você ganhou!");
      vitorias++;
      console.log();
    } else if (
      (escolhaPc == elementos[1] && escolhaJogador == elementos[0]) ||
      (escolhaPc == elementos[2] && escolhaJogador == elementos[1]) ||
      (escolhaPc == elementos[0] && escolhaJogador == elementos[2])
    ) {
      console.log("O PC ganhou!");
      derrotas++;
      console.log();
    } else if (escolhaPc == escolhaJogador) {
      console.log("Empate!");
      empates++;
      console.log();
    }
  }
  console.log(
    `${jogador}, você ganhou ${vitorias} vezes, eu ganhei ${derrotas} vezes e empatamos ${empates} vezes!`
  );
  console.log();
  if (vitorias > derrotas) {
    console.log(`Parabéns ${jogador}! Você venceu com ${vitorias} vitória(s)!`);
  } else if (vitorias < derrotas) {
    console.log(
      `Que pena ${jogador}! Você perdeu com ${derrotas} derrota(s)! Mais sorte na próxima vez!`
    );
  } else if (vitorias == derrotas) {
    console.log(`Parece que empatamos, ${jogador}!`);
  }
  console.log();
  console.log(`${jogador}, você gostaria de jogar novamente?`);
  let jogarNovamente = prompt(`Responda [SIM] ou [NAO]: `)
    .trim()
    .toLocaleUpperCase();
  if (jogarNovamente == "NAO") {
    break;
  }
}
console.log();
