module.exports = {
    'Process Doubt Text': function(browser) {

        const page = browser.page.webPostulationPJ();

        page
            .navigate()
            .maximizeWindow()
            .waitForElementVisible('body')
            .assert.visible('@doubtProsText')

        browser
            .saveScreenshot('tests/nuevosSocios/img/TC10.png')
            .pause(3 * 1000)
            .end()
    }
}