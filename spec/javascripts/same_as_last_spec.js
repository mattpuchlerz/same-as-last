describe('Same as Last', function() {
  
  describe('when the game hasn’t yet started', function() {
    
    it('knows that it hasn’t yet started', function() {
      expect( S.started ).toBe(false);
    });
    
    it('has 20 cards', function() {
      expect( S.cards.length ).toBe(20);
    });
    
  });
  
  describe('when starting the game', function() {
    
    it('can be started', function() {
      S.start();
      expect( S.started ).toBe(true);
    });
    
  });
  
  describe('when resetting', function() {
    
    it('changes the game to be not started', function() {
      S.reset();
      expect( S.started ).toBe(false);
    });
    
  });
  
});