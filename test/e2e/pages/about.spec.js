var helpers = require('./../helpers');

describe('about page', function() {

    var page = new helpers();

    beforeEach(function(){

    })

    it('should proper display logo and return to about after logo click', function() {
        page.get('contact');
        expect(browser.getCurrentUrl()).toContain('contact');
        var logo = element(by.css('.rg'));
        expect(logo.getCssValue('font-size')).toBe('40px');
        expect(logo.isDisplayed()).toBe(true);
        expect(logo.getText()).toBe('ROBERT GURGUL');
        logo.click();
        /*browser.waitForAngular();
         browser.sleep(5000);
         expect(browser.getCurrentUrl()).toMatch(/\/about/);*/

        browser.wait(function() {
            return browser.getCurrentUrl().then(function(url) {
                return /about/.test(url);
            });
        }, 2000, 'It\'s taking too long to load url !');

        expect(browser.getCurrentUrl()).toContain('about');
    })

})