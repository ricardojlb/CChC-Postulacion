module.exports = {
    'How To Post Click': function(browser) {

        const page = browser.page.webPostulationPJ();

        page
            .navigate()
            .maximizeWindow()
            .waitForElementVisible('body')
            .saveScreenshot('tests/nuevosSocios/img/TC12A.png')
            .assert.visible('@howToPost')
            .click('@howToPost')

        browser
            .saveScreenshot('tests/nuevosSocios/img/TC12B.png')
            .pause()
            .end()
    }
}