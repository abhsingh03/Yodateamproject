var yodapageobjects

module.exports = {
    
        beforeEach: browser => {
            yodapageobjects = browser.page.yodapageobjects()
            yodapageobjects.navigate()
        },
    
        after: browser => {
            browser.end()
        },

    'Check Categories' : browser => {
            
                yodapageobjects
                .waitForElementPresent('@businessequipment', 10000)
                .click('@businessequipment'),
                browser.assert.urlEquals('https://alpha.yoodlize.com/s?category=89')
                yodapageobjects.navigate()
                
                .click('@electronics'),
                browser.assert.urlEquals('https://alpha.yoodlize.com/s?category=85')
                yodapageobjects.navigate()
                
                .click('@recreationalvehicles'),
                browser.assert.urlEquals('https://alpha.yoodlize.com/s?category=91')
                yodapageobjects.navigate()
            
                .click('@fashion')
                browser.assert.urlEquals('https://alpha.yoodlize.com/s?category=74')
                yodapageobjects.navigate()
            
                .click('@homegarden')
                browser.assert.urlEquals('https://alpha.yoodlize.com/s?category=77')
                yodapageobjects.navigate()
                
                .click('@outdoorgear')
                browser.assert.urlEquals('https://alpha.yoodlize.com/s?category=84')
                yodapageobjects.navigate()
                
                .click('@party'),
                browser.assert.urlEquals('https://alpha.yoodlize.com/s?category=88')
                yodapageobjects.navigate()
                
                .click('@properties'),
                browser.assert.urlEquals('https://alpha.yoodlize.com/s?category=92')
                yodapageobjects.navigate()
            
                .click('@experiences')
                browser.assert.urlEquals('https://alpha.yoodlize.com/s?category=90')
                yodapageobjects.navigate()
            
                .click('@sportinggoods')
                browser.assert.urlEquals('https://alpha.yoodlize.com/s?category=76')
                yodapageobjects.navigate()
                
                .click('@tools')
                browser.assert.urlEquals('https://alpha.yoodlize.com/s?category=86')
                yodapageobjects.navigate()
                
                .click('@toysandgames')
                browser.assert.urlEquals('https://alpha.yoodlize.com/s?category=87')
              
    },

    'Check Categories at the bottom' : browser => {
            
                yodapageobjects
                .waitForElementPresent('@bebottom', 10000)
                .click('@bebottom'),
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()
        
                .click('@elbottom'),
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()
        
                .click('@rvbottom'),
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()
    
                .click('@fsbottom')
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()
    
                .click('@hgbottom')
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()
        
                .click('@ogbottom')
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects
                
                .click('@pebottom'),
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()
        
                .click('@pbottom'),
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()
        
                .click('@ebottom'),
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()
    
                .click('@sebottom')
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()
    
                .click('@tbottom')
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()
        
                .click('@tgbottom')
                browser.assert.urlEquals('https://alpha.yoodlize.com/')

        },

    'Check Categories at the bottom' : browser => {
            
               // yodapageobjects
               // .waitForElementVisible('@businessequipment1', 10000)
               // .click('@businessequipment1'),
               // browser.assert.urlEquals('https://alpha.yoodlize.com/')
               // yodapageobjects.navigate()

                yodapageobjects
                .waitForElementVisible('@electronics1', 10000)
                .click('@electronics1'),
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()

                .click('@recreationalvehicles1'),
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()

                .click('@fashion1')
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()

                .click('@homegarden1')
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()

                .click('@outdoorgear1')
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects

                .click('@party1'),
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()

                .click('@properties1'),
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()

                .click('@sportinggoods1')
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()

                .click('@tools1')
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()

                .click('@toysandgames1')
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
                yodapageobjects.navigate()
                
                .click('@experiences1')
                browser.assert.urlEquals('https://alpha.yoodlize.com/')
            },

    'Browser Button' : browser => {
            yodapageobjects
                .waitForElementPresent('@browse', 10000)
                .click('@browse')
                browser.assert.urlEquals('https://alpha.yoodlize.com/s')
            },
        
}
