### Installation and running

1. Install dependencies:

`npm install`

2. Run the tests:

`npm run test:chrome`

Passing `--headless` will force the browser to be hidden.

3. Open the cypress test editor

`npm run debug:chrome`


## Reporting of failed run
The testing framework will automatically take a picture when an error occurs. Optinally you can enable the recording by changing: 
`"video": false,` 
to `true` in the cypress.json file.

For local test runs, cypress puts screenshots in the cypress/screenshots, and videos to cypress/videos folders. 


## Page object

We are using Page Object Method (POM) for almost all of our projects. POM is a design pattern that helps to enhance test maintenance and reduce code duplication. A few benefits of the POM pattern are given below.
* POM helps in diminishing the level of code duplication.
* POM encourages better upkeep of test information, locators and test capacities.
* POM helps in less upkeep of test structure where we store locators and capacities independently from test contents for the simplicity of progress the executives in code.
* Implementation of articles and capacities are isolated from one another, builds the comprehensibility of the code. There are two ways of creating page objects in Cypress.


## Restricting which tests to run

You can restrict which tests run by appending ".only" to either the
test suite ("describe") or the test ("it"). 


## Docker

1. Create image

`docker build -t cypress-ready .`

2. Run image

`docker run --rm cypress-ready`