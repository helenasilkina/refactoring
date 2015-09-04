// After
function renderBanner(self) {
    if ((self.platform.toUpperCase().indexOf("MAC") > -1) &&
       (self.browser.toUpperCase().indexOf("IE") > -1) &&
       self.wasInitialized() && (self.resize > 0) ) {
        // do something
    }    
}        
        
// Refactoring
function renderBanner(self) {
    var isMacOs = self.platform.toUpperCase().indexOf("MAC") > -1
    var isIE = self.browser.toUpperCase().indexOf("IE") > -1
    var wasResized = self.resize > 0

    if (isMacOs && isIE && self.wasInitialized() && wasResized) {
      // do something
    }    
}        
