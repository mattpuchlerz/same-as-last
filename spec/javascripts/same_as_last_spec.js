Array.prototype.include = function(val) {
  for (var i = this.length - 1; i >= 0; i--){
    if ( this[i] === val ) return true;
  };
  return false;
};



describe('Same as Last', function() {
  
  describe('when the game hasn’t yet started', function() {
    
    it('knows that it hasn’t yet started', function() {
      expect( S.started ).toBe(false);
    });
    
    it('has cards', function() {
      expect( S.cards ).toEqual([]);
    });
    
  });
  
  describe('when starting the game', function() {
    
    beforeEach( function() {
      S.start();
    });
    
    it('can be started', function() {
      expect( S.started ).toBe(true);
    });
    
    it('generates 20 cards', function() {
      expect( S.cards.length ).toBe(20);
    });
    
    it('has a value between 0 and 3 for each card', function() {
      for (var i = S.cards.length - 1; i >= 0; i--) {
        expect( S.cards[i] ).toBeWithin(0, 3);
      }
    });
    
    it('has at least 1 card with each value', function() {
      var values = [];
      
      for (var i = S.cards.length - 1; i >= 0; i--) {
        if ( values.include( S.cards[i] ) ) continue;
        values.push( S.cards[i] );
      }
      
      expect( values.sort() ).toEqual([ 0, 1, 2, 3 ]);
    });
    
    it('does NOT begin with a fully successive section of cards', function() {
      expect( S.cards.splice(0, 4) ).not.toEqual([ 0, 1, 2, 3 ]);
    });
    
  });
  
});