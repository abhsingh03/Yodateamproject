module.exports = (cheesehead, email, password, title, description, recVehicle, strAddress, city, state, zipCode, rate) => {
    cheesehead

        .click('@siteLogin')
        .click('@email')
        .setValue('@email', email)
        .waitForElementVisible('@password', 5000)
        .setValue('@password', password)
        .click('@logIn')
        .waitForElementVisible('@listProduct', 5000)
        .click('@listProduct')
        .waitForElementVisible('@guideMe', 5000)
        .click('@guideMe')
        .waitForElementVisible('@titleInput', 5000)
        .setValue('@titleInput', title)
        .expect.element('@titleInput').value.to.equal(title),
        cheesehead
        .setValue('@enterDescription', description)
        .expect.element('@enterDescription').value.to.equal(description)
    cheesehead
        .click('@catField')
        .click('@recVehicle')
        .expect.element('@recVehicle').value.to.equal(recVehicle)
    cheesehead
        .waitForElementVisible('@nextPhoto', 5000)
        .click('@nextPhoto')
    // location info
        .click('@nextAddress')
        .setValue('@strAddress', strAddress)
        .expect.element('@strAddress').value.to.equal(strAddress)
    cheesehead
        .setValue('@city', city)
        .expect.element('@city').value.to.equal(city)
    cheesehead
        .waitForElementVisible('@state', 5000)
        .setValue('@state', state)
        .expect.element('@state').value.to.equal(state).after(5000)
    cheesehead
         .waitForElementVisible('@zipCode', 5000)
        .setValue('@zipCode', zipCode)
        .expect.element('@zipCode').value.to.equal(zipCode).after(5000)
    // availability 
    cheesehead
        .click('@nextAvailability')
        .click('@nextPrice')
        .waitForElementVisible('@dailyRate', 5000)
        .setValue('@dailyRate', rate)
        .expect.element('@dailyRate').value.to.equal(rate).after(5000)
    // house rules
    cheesehead
        .click('@houseRules')
        .click('@nextReview')
        .waitForElementVisible('@publishNow', 5000)
        .click('@publishNow')



}