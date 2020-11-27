module.exports = {
    'How to Postulate Text': function(browser) {

        const page = browser.page.webPostulationPJ();

        page
            .navigate()
            .maximizeWindow()
            .waitForElementVisible('body')
            .assert.visible('@howToPost')

        browser
            .saveScreenshot('tests/nuevosSocios/img/TC11.png')
            .pause(3 * 1000)
            .end()

    }
}