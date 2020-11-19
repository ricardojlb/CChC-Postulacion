module.exports = {
    'Top Banner Elements Logo': function(browser) {

        const cchcLogo = '#app > div > header > div > div > a > img';


        browser
            .url('https://postulacionwebqa.cchc.cl/')
            .maximizeWindow()
            .assert.elementPresent(cchcLogo)
            .saveScreenshot('tests/nuevosSocios/img/TC02.png')
            .pause(3 * 1000)
            .end()
    }
}