module.exports = {
    'Top Banner Elements Logo': function(browser) {

        const page = browser.page.webPostulationPJ();

        page
            .navigate()
            .maximizeWindow()
            .assert.elementPresent('@cchcLogo')

        browser
            .saveScreenshot('tests/nuevosSocios/img/TC02.png')
            .pause(3 * 1000)
            .end()
    }
}