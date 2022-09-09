const SUITS = ["♠", "♡", "♦", "♣"]
//const SUITS = ["S", "H","D", "C"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

const CARD_VALUE_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
}

class Card {
constructor(suit, value) {
    this.suit = suit;
    this.value = value;
}
}

class Player {
    constructor(playerName) {
      this.name = playerName;
      this.playerDeck = [];
      this.playerScore = 0;
    }

    addPlayerDeck (deck) {
        this.playerDeck = deck;
    }
    }

class Deck {

    constructor(cards = freshDeck()) {
      this.cards = cards;
    }
 
    get numberOfCards() {
       return this.cards.length;
    }

shuffle() {  
    for (let i = this.numberOfCards - 1; i > 0; i--) {
    const newCardIndex = Math.floor(Math.random() * (this.numberOfCards));
    const oldCardValue = this.cards[newCardIndex];
    this.cards[newCardIndex] = this.cards[i]
    this.cards[i] = oldCardValue

}
}
}

function freshDeck() {
       return SUITS.flatMap(suit => {
      return VALUES.map(value => {
        return new Card(suit, value);
      });
    });
}
  
//function freshDeck() { 
  //  var deck = [];
    //for (var S=0; S < SUITS.length; S++) {
    //for (var V=0; V < VALUES.length; V++) {
      // // return new Card(SUITS[S], VALUES[V]);
    // deck.push(new Card(SUITS[S], VALUES[V]))
   // }
   // } 
  //  console.log(deck)
  //return deck;
//}

function newGame (p1, p2) {
    const deck = new Deck();
    deck.shuffle();

const midDeck = (deck.numberOfCards / 2);
p1.addPlayerDeck(deck.cards.slice(0, midDeck));
p2.addPlayerDeck(deck.cards.slice(midDeck, deck.numberOfCards));
}

function roundOutput(p1, p2, roundNum) {
    console.log(`${p1.name} plays: ${p1.playerDeck[roundNum].value} ${p1.playerDeck[roundNum].suit}
    `);
    console.log(`${p2.name} plays: ${p2.playerDeck[roundNum].value} ${p2.playerDeck[roundNum].suit}
    `);
  }

  function playRoundResults(p1, p2) {
    for (let i = 0; i < p1.playerDeck.length; i++) {
        roundOutput(p1, p2, i);
      if (CARD_VALUE_MAP[p1.playerDeck[i].value] > CARD_VALUE_MAP[p2.playerDeck[i].value]) {
        p1.playerScore += 1;
            } else if (CARD_VALUE_MAP[p1.playerDeck[i].value] < CARD_VALUE_MAP[p2.playerDeck[i].value]) {
        p2.playerScore += 1;
            } else {
       // console.log("Tie!");
      }
    }
  }

  function finalScore(p1, p2) {
    if (p1.playerScore > p2.playerScore) {
      console.log(`${p1.name} Won!`);
    } else if (p1.playerScore < p2.playerScore) {
      console.log(`${p2.name} Won!`);
    } else {
      console.log(`${p1.name} and ${p2.name} Tie!`);
    }
  } 
let A = new Player("Snoopy");
let B = new Player("Woodstock");
let C = new Player("Charlie");
let D = new Player("Sally");

newGame(A, B);
playRoundResults(A, B);
finalScore(A, B);


//newGame(C, D);
//playRoundResults(C, D);
//finalScore(C, D);

//newGame(A, C);
//playRoundResults(A, C);
//finalScore(A, C);

//newGame(B, C);
//playRoundResults(B, C);
//finalScore(B, C);

//newGame(A, D);
//playRoundResults(A, D);
//finalScore(A, D);

//newGame(B, D);
//playRoundResults(B, D);
//finalScore(B, D);

