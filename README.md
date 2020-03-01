Name: Surabhi Govil

Email: govil.surabhi@gmail.com

Source code:

test.js: This file contains the tests, instructions for setting up and configuring the web driver, and assertions.

puppeteer_environment.js: This file contains configuration for Puppeteer

jest.config.js: This file wires up Jest with Puppeteer, informing Puppeteer where to look for test setup and teardown instructions, and environment functions.

setup.js: This file provides a function for setting up and providing parameter values for Puppeteer’s configuration.

teardown.js: This file contains code that is ran once the tests are complete, this simply logs a closing message and closes the browser.

Description of all the libraries used:

Jest: A very fast and robust test runner by Facebook. https://github.com/facebook/jest
Chalk: A tool for styling terminal output. https://github.com/chalk/chalk
Puppeteer: A headless Chrome Node API developed by the Google Chrome dev team. https://github.com/GoogleChrome/puppeteer
Rimraf: The UNIX command rm -rf for node. https://github.com/isaacs/rimraf
