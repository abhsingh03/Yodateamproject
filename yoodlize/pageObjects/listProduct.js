module.exports = {
    url: 'https://alpha.yoodlize.com/',
    elements: {
        siteLogin: {
            selector: '//span[text()="Login"]',
            locateStrategy: 'xpath'
        },
        email: ('input[name="email"]'),
        password: ('input[name="password"]'),
        logIn: ('button[type="submit"]'),
        listProduct: {
            selector: '//a[@href="/become-a-host?mode=new"]',
            locateStrategy: 'xpath'
        },
        guideMe: {
            selector: '//button[contains(.,"GUIDE ME")]',
            locateStrategy:'xpath'
        },
        titleInput: ('input[name="title"]'),
        enterDescription: ('textarea[name="description"]'),
        catField: ('select[class="sc-emmjRN hdbqCY sc-hMqMXs kEZEVA"]'),
        recVehicle: ('option[value="91"]'),
        nextPhoto: ('button[class="sc-kPVwWT fqLuIb sc-ifAKCX kzsifC"]'),
        nextAddress:('button[class="sc-kPVwWT fqLuIb sc-ifAKCX kzsifC"]'),
        strAddress:('input[name="street"]'),
        city:('input[name="city"]'),
        state:('input[name="state"]'),
        zipCode:('input[name="zipcode"]'),
        nextAvailability:('button[class="sc-kPVwWT fqLuIb sc-ifAKCX kzsifC"]'),
        saveButton: ('button[name="save"]'),
        employeeName: ('p[name="employeeName"]'),
        nextPrice:('button[class="sc-kPVwWT fqLuIb sc-ifAKCX kzsifC"]'),
        dailyRate:('input[name="dailyRate"]'),
        houseRules:('button[class="sc-kPVwWT fqLuIb sc-ifAKCX kzsifC"]'),
        nextReview:('button[class="sc-kPVwWT fqLuIb sc-ifAKCX kzsifC"]'),
        publishNow: {
            selector: '//span[text()="Publish Now"]',
            locateStrategy: 'xpath'
        },
    }
}