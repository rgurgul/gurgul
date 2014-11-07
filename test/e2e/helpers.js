function IndexPage() {
    this.get = function (obj) {
        browser.get('/#/' + obj);
    };
    this.getTitle = function () {
        return browser.getTitle();
    };
}

module.exports = IndexPage;