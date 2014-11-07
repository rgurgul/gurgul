var helpers = require('./helpers');

describe('menu', function() {

    var page = new helpers();

    it('should show menu', function(){
        page.get('about');
        var menu = element.all(by.repeater('i in m')).then(function(rows){
            return rows.length;
        })

        expect(menu).toBe(4);
    })
})