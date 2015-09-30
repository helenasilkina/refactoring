// After
function renderBanner(self) {
    if ((navigator.platform.indexOf("Win") !== -1) &&
       (navigator.userAgent.indexOf("MSIE") !== -1) &&
       self.wasInitialized() && (self.resize > 0) ) {
        // do something
    }    
}        
        
// Refactoring
function renderBanner(self) {
    var isWindowOs = navigator.platform.indexOf("Win") !== -1;
    var isIE = navigator.userAgent.indexOf("MSIE") !== -1;
    var wasResized = self.resize > 0;

    if (isMacOs && isIE && self.wasInitialized() && wasResized) {
      // do something
    }    
}        
