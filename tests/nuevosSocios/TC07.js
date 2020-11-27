module.exports = {
    'SubTitles Middle body': function(browser) {

        const page = browser.page.webPostulationPJ();

        page
            .navigate()
            .maximizeWindow()
            .waitForElementVisible('body')
            .assert.visible('@middleTitleCon')

        browser
            .saveScreenshot('tests/nuevosSocios/img/TC07.png')
            .pause(3 * 1000)
            .end()
    }
}