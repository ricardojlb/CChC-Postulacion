module.exports = {
    'Open Home Page': function(browser) {



        browser
            .url('https://postulacionwebqa.cchc.cl/')
            .maximizeWindow()
            .assert.title('postulacion-pj-2')
            .saveScreenshot('tests/nuevosSocios/img/TC01.png')
            .pause(3 * 1000)
            .end()
    }
}