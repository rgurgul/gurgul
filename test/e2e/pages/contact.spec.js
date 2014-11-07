var helpers = require('./../helpers');

describe('contact page', function() {

    var page = new helpers();

    it('should make btn active', function() {
        page.get('contact');
        expect(browser.getTitle()).toBe('Robert Gurgul | contact');

        browser.findElement(by.css('.btn')).then(function(el) {
            expect(el.getAttribute('disabled')).toBe('true');
        })

        var name = element(by.model('user.name'));
        name.sendKeys('Robert');
        var email = element(by.model('user.email'));
        email.sendKeys('robert@robert.pl');
        var message = element(by.model('user.message'));
        message.sendKeys('lorem ipsum is...');
        //name.clear();

        expect(name.getAttribute('type')).toBe('text');
        expect(name.getAttribute('autofocus')).toBe('true');
        expect(name.getAttribute('value')).toBe('Robert');

        browser.findElement(by.css('.btn')).then(function(el) {
            expect(el.getAttribute('disabled')).toBe(null);
        })
    })
})