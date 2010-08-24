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
    
    it('has a random value between 1 and 5 for each card', function() {
      for (var i = S.cards.length - 1; i >= 0; i--) {
        expect( S.cards[i] ).toBeWithin(1, 5);
      }
    });
    
  });
  
  describe('when resetting', function() {
    
    it('changes the game to be not started', function() {
      S.reset();
      expect( S.started ).toBe(false);
    });
    
  });
  
});