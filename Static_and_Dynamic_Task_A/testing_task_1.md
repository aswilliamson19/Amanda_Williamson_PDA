### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

# The card file is not required into this file.

class CardGame


  def checkforAce(card)
# The method name is not written by convention as 3 words as put all together and ace has a capital letter.
    if card.value = 1
# It should be == instead of =
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
# It states 'dif' above instead of 'def' and within the parameters specific cards are passed in rather than values. There is also a comma missing between the 2 parameters.
  if card1.value > card2.value
    return card
# The card number to be returned is not specified above.
  else
    return card2
  end
end
end
# There is an additional 'end' that is not required here.

def self.cards_total(cards)
  total
# There is no total specified
  for card in cards
    total += card.value
    return "You have a total of" + total
# The total is a value and so cannot be added to a string in this way, it should be interpolated into the sentence instead.
  end
end

# The class CardGame requires an 'end' after all of the methods.

```
