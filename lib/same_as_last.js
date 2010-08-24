var S = {
  
  cards: [],
  started: false,
  
  reset: function() {
    this.started = false;
  },
  
  start: function() {
    this.started = true;
    
    for (var i = 20 - 1; i >= 0; i--) {
      this.cards[i] = 1;
    }
  }
  
};