/*Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

let difficultyRange = "";

document
  .getElementById("difficultyRange")
  .addEventListener("click", function () {
    console.log(this.value);
    difficultyRange = this.value;
  });

// Griglia basic
document.getElementById("click_me").addEventListener("click", function () {
  function generateField(domElement, limit) {
    console.log(this);

    for (let i = 0; i < limit; i++) {
      const cellElement = document.createElement("div");
      cellElement.className = "cell";
      if (difficultyRange == 1) {
        cellElement.classList.add("easy");
      } else if (difficultyRange == 2) {
        cellElement.classList.add("medium");
      } else if (difficultyRange == 3) {
        cellElement.classList.add("hard");
      }
      cellElement.append(i + 1);
      domElement.append(cellElement);
      cellElement.addEventListener("click", function () {
        this.classList.toggle("bg-blue");
        console.log(cellElement.innerText);
      });
    }
  }

  let limit = 0;
  const fieldElement = document.querySelector(".filed");

  console.log(difficultyRange);
  if (difficultyRange == 1) {
    limit = 100;
  } else if (difficultyRange == 2) {
    limit = 81;
  } else if (difficultyRange == 3) {
    limit = 49;
  }

  generateBombs(limit);
  console.log(limit);
  generateField(fieldElement, limit);
  let click_me = document.getElementById("click_me");
  click_me.classList.add("d-none");
});

function generateBombs(limit) {
  for (let i = 0; i < 16; i++) {
    let bomb = Math.floor(Math.random() * limit + 1);
    console.log(bomb);
  }
}

// generateField(fieldElement, limit);
// let click_me = document.getElementById("click_me");
// click_me.classList.add("d-none");
// "medium".addEventListener("click", function medium() {
//   let limit = 81;
//   function generateField(domElement, limit) {
//     console.log(this);

//     for (let i = 0; i < limit; i++) {
//       const cellElement = document.createElement("div");
//       cellElement.className = "cell";
//       cellElement.append(i + 1);
//       domElement.append(cellElement);
//       cellElement.addEventListener("click", function () {
//         this.classList.toggle("bg-blue");
//         console.log(cellElement.innerText);
//       });
//     }
//   }
//   generateField(fieldElement, limit);
//   let click_me = document.getElementById("click_me");
//   click_me.classList.add("d-none");
//   generateField(fieldElement, limit);
//   let difficultyange = document.getElementById("difficultyRange");
//   difficultyRange.classList.add();
// });
