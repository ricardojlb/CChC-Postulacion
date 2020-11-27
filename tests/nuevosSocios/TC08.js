module.exports = {
    'Begin Process Button': function(browser) {

        const page = browser.page.webPostulationPJ();

        page
            .navigate()
            .maximizeWindow()
            .waitForElementVisible('body')
            .assert.visible('@beginProcessButton')

        browser
            .pause(3 * 1000)
            .saveScreenshot('tests/nuevosSocios/img/TC08.png')
            .end()

    }
}