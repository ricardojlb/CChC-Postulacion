module.exports = {
    'Top Banner Elements Top Title': function(browser) {

        const page = browser.page.webPostulationPJ();

        page
            .navigate()
            .maximizeWindow()
            .assert.elementPresent('@cchcLogo')
            .assert.elementPresent('@titleTop')
            .assert.elementPresent('@spanTop')

        browser
            .saveScreenshot('tests/nuevosSocios/img/TC03.png')
            .pause(3 * 1000)
            .end()
    }
}