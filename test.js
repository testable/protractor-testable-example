const fs = require('fs');

describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.takeScreenshot().then(function(base64Data) {
      fs.writeFileSync((process.env.OUTPUT_DIR || '') + '/HomePage.png', base64Data, 'base64');
    });
    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});