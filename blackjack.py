from random import randint


class Card:
    suit_symbols = {
        "Spades": "\u2660",
        "Clubs": "\u2663",
        "Diamonds": "\u2666",
        "Hearts": "\u2665"
    }

    def __init__(self, suit, val) -> None:
        self.suit = suit
        self.value = val
        self.suit_symbol = self.suit_symbols[self.suit]
        self.face = self.assignFace()

    def show(self):
        print(self.face)


    def assignFace(self):
        card_face = {
            'A': f"\n _______\n|A      |\n|{self.suit_symbols[self.suit]}      |\n|   {self.suit_symbols[self.suit]}   |\n|      {self.suit_symbols[self.suit]}|\n|      A|\n \u203e\u203e\u203e\u203e\u203e\u203e\u203e",
            2: f"\n _______\n|2  {self.suit_symbols[self.suit]}   |\n|{self.suit_symbols[self.suit]}      |\n|       |\n|      {self.suit_symbols[self.suit]}|\n|   {self.suit_symbols[self.suit]}  2|\n \u203e\u203e\u203e\u203e\u203e\u203e\u203e",
            3: f"\n _______\n|3  {self.suit_symbols[self.suit]}   |\n|{self.suit_symbols[self.suit]}      |\n|   {self.suit_symbols[self.suit]}   |\n|      {self.suit_symbols[self.suit]}|\n|   {self.suit_symbols[self.suit]}  3|\n \u203e\u203e\u203e\u203e\u203e\u203e\u203e",
            4: f"\n _______\n|4{self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]} |\n|{self.suit_symbols[self.suit]}      |\n|       |\n|      {self.suit_symbols[self.suit]}|\n| {self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]}4|\n \u203e\u203e\u203e\u203e\u203e\u203e\u203e",
            5: f"\n _______\n|5{self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]} |\n|{self.suit_symbols[self.suit]}      |\n|   {self.suit_symbols[self.suit]}   |\n|      {self.suit_symbols[self.suit]}|\n| {self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]}5|\n \u203e\u203e\u203e\u203e\u203e\u203e\u203e",
            6: f"\n _______\n|6{self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]} |\n|{self.suit_symbols[self.suit]}      |\n| {self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]} |\n|      {self.suit_symbols[self.suit]}|\n| {self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]}6|\n \u203e\u203e\u203e\u203e\u203e\u203e\u203e",
            7: f"\n _______\n|7{self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]} |\n|{self.suit_symbols[self.suit]}  {self.suit_symbols[self.suit]}   |\n| {self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]} |\n|      {self.suit_symbols[self.suit]}|\n| {self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]}7|\n \u203e\u203e\u203e\u203e\u203e\u203e\u203e",
            8: f"\n _______\n|8{self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]} |\n|{self.suit_symbols[self.suit]}  {self.suit_symbols[self.suit]}   |\n| {self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]} |\n|   {self.suit_symbols[self.suit]}  {self.suit_symbols[self.suit]}|\n| {self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]}8|\n \u203e\u203e\u203e\u203e\u203e\u203e\u203e",
            9: f"\n _______\n|9{self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]} |\n|{self.suit_symbols[self.suit]}{self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]} |\n| {self.suit_symbols[self.suit]} {self.suit_symbols[self.suit]} {self.suit_symbols[self.suit]} |\n| {self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]}{self.suit_symbols[self.suit]}|\n| {self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]}9|\n \u203e\u203e\u203e\u203e\u203e\u203e\u203e",
            10: f"\n _______\n|10{self.suit_symbols[self.suit]}  {self.suit_symbols[self.suit]} |\n|{self.suit_symbols[self.suit]}{self.suit_symbols[self.suit]} {self.suit_symbols[self.suit]} {self.suit_symbols[self.suit]} |\n| {self.suit_symbols[self.suit]}   {self.suit_symbols[self.suit]} |\n| {self.suit_symbols[self.suit]} {self.suit_symbols[self.suit]} {self.suit_symbols[self.suit]}{self.suit_symbols[self.suit]}|\n| {self.suit_symbols[self.suit]}  {self.suit_symbols[self.suit]}10|\n \u203e\u203e\u203e\u203e\u203e\u203e\u203e",
            'J': f"\n _______\n|J{self.suit_symbols[self.suit]}     |\n|\u0245     ||\n||  J  ||\n||     V|\n|     {self.suit_symbols[self.suit]}J|\n \u203e\u203e\u203e\u203e\u203e\u203e\u203e",
            'Q': f"\n _______\n|Q{self.suit_symbols[self.suit]}     |\n|       |\n|   Q   |\n|       |\n|     {self.suit_symbols[self.suit]}Q|\n \u203e\u203e\u203e\u203e\u203e\u203e\u203e",
            'K': f"\n _______\n|K{self.suit_symbols[self.suit]}     |\n|       |\n|   K   |\n|       |\n|     {self.suit_symbols[self.suit]}K|\n \u203e\u203e\u203e\u203e\u203e\u203e\u203e"
        }
        return card_face[self.value]


class Deck:
    def __init__(self) -> None:
        self.cards = []
        self.build()

    def build(self):
        for s in ["Spades", "Diamonds", "Clubs", "Hearts"]:
            for v in ["A", *range(2, 11), "J", "Q", "K"]:
                self.cards.append(Card(s, v))

    def show(self):
        for c in self.cards:
            c.show()

    def shuffle(self):
        for i in range(len(self.cards)-1, 0, -1):
            r = randint(0, i)
            self.cards[i], self.card[r] = self.cards[r], self.cards[i]

    def drawCard(self):
        return self.cards.pop()


deck = Deck()
deck.show()
