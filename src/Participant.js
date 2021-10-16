
export class Participant {
  // Kollar på summan av de samlade korten
  checkSumOfHand (cards) {
    let sumOfHand = 0
    // Här skulle jag kanske kunna köra en reduce
    for (let i = 0; i < cards.length; i++) {
      const currentCard = cards[i]
      const currentCardValue = currentCard.valueOf()
      sumOfHand += currentCardValue
    }
    return sumOfHand
  }

  evaluate (cards, sum, stop) {
    if ((cards.length === 5 && sum < 21) || sum === 21) {
      outcome = 'WIN'
    } else if (sumOfHand > 21) {
      outcome = 'LOSE'
    }
  }
}
