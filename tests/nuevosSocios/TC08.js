module.exports = {
    'Begin Process Button': function(browser) {

        const beginProcessButton = '#app > div > div > main > div > div > div > div.col-sm-12.col-md-6.c-login__st > div > a.btn-red.btn-login'



        browser
            .url('https://postulacionwebqa.cchc.cl/')
            .windowMaximize()
            .waitForElementVisible('body')
            .assert.visible(beginProcessButton)
            .pause(3 * 1000)
            .saveScreenshot('tests/nuevosSocios/img/TC08.png')

    }
}