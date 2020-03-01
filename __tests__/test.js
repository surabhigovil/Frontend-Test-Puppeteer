const timeout = 10000
// typingSpeed value is set for wait time between keystrokes. Simulates realistic typing.
const typingSpeed = 50
const credentials = require('./credentials');

describe(
  'LinkedIn search test',
  () => {
    let page
    beforeAll(async () => {
      jest.setTimeout(timeout)
      page = await global.__BROWSER__.newPage() //initialize a new browser session everytime a test starts
      await page.setViewport({ width: 0, height: 0 }) // the page viewport size becomes equal to size of the browser with height as 0
      await page.goto('https://www.linkedin.com') //navigate to url
    }, timeout)

    afterEach(async () => {
      await page.waitFor(1000) //default time to wait after each test
    })

    afterAll(async () => {
      await page.close() //quit browser session after tests finished
    })

    it('LinkedIn homepage loads and log into account', async () => {
      await page.waitForSelector('input[type="text"]', { visible: true }) //check in element present on DOM
      await page.type('input[type="text"]', credentials.username)
      await page.waitFor(1000)
      await page.waitForSelector('input[type="password"]', { visible: true }) //check in element present on DOM
      await page.type('input[type="password"]',credentials.password)
      await page.waitFor(1000)
      await page.click('.sign-in-form__submit-btn')
    })

    it('Using the search box on the home page, perform a search for ​Automation engineer', async () => {
      await page.waitForSelector('.search-global-typeahead__input')//wait for search bar to be vsible in the DOM
      await page.type('.search-global-typeahead__input', 'Automation Engineer') //click and type in the search bar
      await page.waitFor(5000)
    })

    it('Select the ​Automation engineer​ under jobs category from the auto-suggestions dropdown', async () => {
      await page.hover('div.basic-typeahead__triggered-content > div :nth-child(2) > div')
      await page.waitFor(1000)
      await page.click('div.basic-typeahead__triggered-content > div :nth-child(2) > div')//click on jobs category auto-suggestions
      await page.waitFor(6000)
    })
  },
  timeout
)
