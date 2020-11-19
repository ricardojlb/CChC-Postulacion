module.exports = {
    'SubTitles Middle body': function(browser) {

        const middleTitleCon = '#app > div > div > main > div > div > div > div.col-sm-12.col-md-6.c-login__con > div > h2'


        browser
            .url('https://postulacionwebqa.cchc.cl/')
            .windowMaximize()
            .waitForElementVisible('body')
            .assert.visible(middleTitleCon)
            .saveScreenshot('tests/nuevosSocios/img/TC07.png')
            .pause(3 * 1000)
            .end()
    }
}