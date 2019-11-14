require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game')
require_relative('../card')

class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new('Spades', 2)
    @card2 = Card.new('Spades', 10)
    @card3 = Card.new('Hearts', 1)
    @cardgame = CardGame.new()
  end

  def test_check_for_ace
    assert_equal(true, @cardgame.check_for_ace(@card3))
  end

  def test_highest_card
    assert_equal(@card2, @cardgame.highest_card(@card1, @card2))
  end

  def test_cards_total
    hand = [@card1, @card2, @card3]
    assert_equal("You have a total of 13", CardGame.cards_total(hand))
  end

end
