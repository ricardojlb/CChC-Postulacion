module.exports = {
    'Text Subtitle middle body': function(browser) {

        const middleTitleSt = '#app > div > div > main > div > div > div > div.col-sm-12.col-md-6.c-login__st > div > h2';


        browser
            .url('https://postulacionwebqa.cchc.cl/')
            .windowMaximize()
            .waitForElementVisible('body')
            .assert.visible(middleTitleSt)
            .saveScreenshot('tests/nuevosSocios/img/TC06.png')
            .pause(3 * 1000)
            .end()
    }

};