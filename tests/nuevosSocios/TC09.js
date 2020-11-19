module.exports = {
    'Action Process Button': function(browser) {

        browser

            .url('https://postulacionwebqa.cchc.cl/')
            .windowMaximize()
            .saveScreenshot('tests/nuevosSocios/img/TC09.png')
            .pause()
            .end()
    }
}