module.exports = {
    'Action Process Button': function(browser) {

        const page = browser.page.webPostulationPJ();

        page
            .navigate()
            .maximizeWindow()
            .waitForElementVisible('body')
            .saveScreenshot('tests/nuevosSocios/img/TC09A.png')
            .click('@beginProcessButton')
            .assert.visible('@basicDataTitle')

        browser
            .saveScreenshot('tests/nuevosSocios/img/TC09B.png')
            .pause(3 * 1000)
            .end()
    }
}