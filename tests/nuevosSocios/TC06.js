module.exports = {
    'Text Subtitle middle body': function(browser) {

        const page = browser.page.webPostulationPJ();


        page
            .navigate()
            .maximizeWindow()
            .waitForElementVisible('body')
            .assert.visible('@middleTitleSt')

        browser
            .saveScreenshot('tests/nuevosSocios/img/TC06.png')
            .pause(3 * 1000)
            .end()
    }

};