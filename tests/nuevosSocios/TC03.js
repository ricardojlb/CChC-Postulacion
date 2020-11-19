module.exports = {
    'Top Banner Elements Top Title': function(browser) {

        const cchcLogo = '#app > div > header > div > div > a > img';
        const titleTop = '#app > div > header > div > div > div > p';
        const spanTop = '#app > div > header > div > div > div > span'

        browser
            .url('https://postulacionwebqa.cchc.cl/')
            .maximizeWindow()
            .assert.elementPresent(cchcLogo)
            .assert.elementPresent(titleTop)
            .assert.elementPresent(spanTop)
            .saveScreenshot('tests/nuevosSocios/img/TC03.png')
            .pause(3 * 1000)
            .end()
    }
}