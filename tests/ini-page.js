module.exports = {
    'Page Intro': function(browser) {
        browser.url('https://postulacionwebqa.cchc.cl/')
        browser.maximizeWindow()
        browser.assert.visible('#app > div > header > div > div > a > img')
        browser.assert.visible('#app > div > header > div > div > div > p')
        browser.assert.visible('#app > div > div > main > div > div > div > div.col-sm-12.col-md-6.c-login__con > div > h2')
        browser.pause(5 * 1000)
        browser.end()
    }
}