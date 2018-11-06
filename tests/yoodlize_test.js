var pageObjectHolder
var websiteData = require('./Yodateamproject/pageobjects/testData/testData')

function applyData(pageObject, login_data, edit_data) {
    pageObject
        .navigate()
        .waitForElementVisible('@titleHeader', 5000)
        .click('@loginButton')
        .setValue('@emailInput', login_data.email)
        .setValue('@passwordInput', login_data.password)
        .click('@signInButton')
        .waitForElementVisible('@iconButton', 5000)
        .click('@iconButton')
        .click('@editButton')
        .waitForElementVisible('@editFirstName', 5000)
        .clearValue('@editFirstName')
        .clearValue('@editLastName')
        .clearValue("@editLocation")
        .setValue('@editFirstName', edit_data.firstName)
        .setValue('@editLastName', edit_data.lastName)
        .setValue('@editLocation', edit_data.location)
        .click('@saveButton')

}

function confirmChange(pageObject, edit_data) {
    pageObject
        .assert.valueContains('@editFirstName', edit_data.firstName)
        .assert.valueContains('@editLastName', edit_data.lastName)
        .assert.valueContains('@editLocation', edit_data.location)

}
function viewTransactions(pageObject) {
    pageObject
        .navigate()
        .waitForElementVisible('@titleHeader', 5000)
        .click('@iconButton')
        .click('@editButton')
        .waitForElementVisible('@iconButton', 5000)
        .waitForElementVisible('@accountButton', 5000)
        .api.pause(100)
    pageObject
        .click('@accountButton')
        .waitForElementVisible('@transactionHistoryButton', 5000)
        .click('@transactionHistoryButton')
        .api.pause(100)




}

module.exports =
    {
        before: browser => { pageObjectHolder = browser.page.yoodlizePageObject() },
        'Ensuring that user can edit information': browser => {
            applyData(pageObjectHolder, websiteData.CreateData, websiteData.EditData)
            confirmChange(pageObjectHolder, websiteData.EditData)
        },

        before: browser => { pageObjectHolder = browser.page.yoodlizePageObject() },
        'Ensuring that user can view transaction history': browser => {
            viewTransactions(pageObjectHolder)

        },

        after: browser => {
            browser.end()
        }




    }