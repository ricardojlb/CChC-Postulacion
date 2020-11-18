module.exports = {
    'TC01-home page': function(browser) {
        const logoPage = '#app > div > header > div > div > a > img';
        const sendButton = '[class="btn-red btn-login"]';
        const basicData = '#app > div > div > div > div > div > div.col-md-6.col-lg-5.offset-lg-2 > h2';

        browser
            .url('https://postulacionwebqa.cchc.cl/')
            .maximizeWindow()
            .waitForElementVisible(logoPage)
            .click(sendButton)
            .waitForElementVisible(basicData)
            .saveScreenshot('tests_output/homepage.png')
            .pause(3 * 1000)
            .end()
    }
};