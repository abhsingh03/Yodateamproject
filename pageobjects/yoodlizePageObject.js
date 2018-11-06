module.exports =
{
    url:'https://alpha.yoodlize.com/',
    elements:{
                titleHeader:'img[src="/images/logo/blueRaw.png"]',
                loginButton:'span[data-reactid="50"]',
                emailInput:'input[name="email"]',
                passwordInput:'input[name="password"]',
                signInButton:'button[class="_138K6 _1tVae btn btn-lg btn-default btn-block"]',
                iconButton:'a[id="basic-nav-dropdown"]',
                editButton:'a[href="/user/edit"]',
                editFirstName:'input[name="firstName"]',
                editLastName:'input[name="lastName"]',
                editLocation:'input[name="location"]',
                reviewButton:'div[class="sc-dNLxif PRjKB sc-gqjmRU gbowmt"]',
                profileButton:'div[class="sc-dNLxif PRjKB sc-gqjmRU gbowmt"]',
                saveButton:'button[class="_35yKS op6Sv _24SJV btn btn-sm btn-default"]',
                accountButton:{ selector:'(//div[@class="sc-dNLxif PRjKB sc-gqjmRU gbowmt"])[6]',
                                locateStrategy:'xpath'

                },
                transactionHistoryButton:{ selector:'(//span[@data-reactid="98"])', 
                                           locateStrategy:'xpath'               }
    }

                                        };