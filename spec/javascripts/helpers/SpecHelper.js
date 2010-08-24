beforeEach( function() {
  
  this.addMatchers({
    
    toBeWithin: function(lowest, highest) {
      return ( this.actual >= lowest && this.actual <= highest );
    }
    
  });
  
});
