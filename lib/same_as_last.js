var S = {
  
  cards: [],
  started: false,
  
  start: function() {
    this.started = true;
    
    this.cards = [ 0, 1, 2, 3 ];
    for (var i = 19; i >= 4; i--) {
      this.cards[i] = Math.floor( Math.random() * 4 );
    }

    this.cards.sort( function() {
      return Math.round( Math.random() ) - 0.5;
    });
  }
  
};