const SUITS= ["♠", "♡", "♦", "♣"]
//const SUITS= ["S", "H","D", "C"]
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
    this.suit = suit
    this.value = value
}


}

function shuffle(deckO) {  
    var deck = deckO
    for (let i = deck.length - 1; i > 0; i--) {
    const newIndex = Math.floor(Math.random() * (i + 1))
    const oldValue = deck[newIndex]
    deck[newIndex] = deck[i]
    deck[i] = oldValue
}
return deck
}


function freshDeck() {
    var deck = [];
    for (var S=0; S < SUITS.length; S++) {
    for (var V=0; V < VALUES.length; V++) {
    deck.push(new Card(SUITS[S], VALUES[V]))
    }
    } 
    console.log(deck)
    return deck;
}




var deck = shuffle(freshDeck());
console.log(deck[0])

var p1=[]
var p2=[]

while (deck.length >0) {
    p1.push(deck.pop())
    console.log(p1[p1.length-1])
    p2.push(deck.pop())
    console.log(p2[p2.length-1])
}

var score = 0
while (p1.length >0 && p2.length >0) {
    var card1 = p1.pop().value;
    var card2 = p2.pop().value;
    if (card1> card2) {
        score ++ 
    } 
    else if (card2 > card1) {score --} 
}

if (score > 0) {
    console.log("Player 1 Wins!")
} else if (score < 0) {
    console.log ("Player 2 Wins!")
} else { 
console.log ("Tie")
}