var pageObjects = {}

var listProductValid = require('../testAssets/listProductValid')

module.exports = {
    beforeEach: browser => {
        pageObjects = browser.page.listProduct()
        pageObjects.navigate()
        console.log()

    },

    after: browser => {
        browser.end()
    },

    'List Product Valid':browser => {
        listProductValid(pageObjects, 'cs.shearer@mail.com', 'LETmein207@', 'Yamaha Dirt Bike', '2009 Brand new. Great bike', '91', '9300 Redwood Rd.', 'West Jordan', 'Utah', '84088', '$100.00')
    }


}