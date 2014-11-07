var helpers = require('./../helpers');

describe('folio page', function() {
    var page = new helpers();

    it('should go to folio', function() {
        page.get('folio');
        expect(browser.getTitle()).toBe('Robert Gurgul | folio');
    })
})