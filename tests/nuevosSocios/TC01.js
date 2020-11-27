module.exports = {
    'Open Home Page': function(browser) {

        const page = browser.page.webPostulationPJ();

        page
            .navigate()

        browser
            .maximizeWindow()
            .assert.title('postulacion-pj-2')
            .saveScreenshot('tests/nuevosSocios/img/TC01.png')
            .pause(3 * 1000)
            .end()
    }
}