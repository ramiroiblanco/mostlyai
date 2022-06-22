##Description

This repository consists of some basic UI tests against the mostly.ai page using the Cypress framework.
The tests are located in the mostly/cypress/e2e/mostly.cy.ts file.

##System requirements

For more information regarding system requirements see the Cypress documentation:
https://docs.cypress.io/guides/getting-started/installing-cypress#Continuous-integration

##How to run the tests

To run the tests, you will first have to install the project dependencies. From the root folder, run:

`npm install`

The above command will install all the required dependencies to run the tests. Installing these dependencies may take a 
few minutes.

###Headless
After installing all the dependencies, you can execute the tests in headless mode from the root folder by executing the 
following command.

`npm run cypress:run`

Once the test run is complete, you can view the execution by opening the video stored in the mostly/cypress/videos directory.

###GUI run
It's also possible to execute the tests using the Cypress GUI. To do this run the following command:

`npm run cypress:open`

The above command will open the Cypress app. In the app, do the following:
* Click the 'E2E Testing' box.
* Select your preferred browser.
* Click on the 'Start E2E Testing in [your browser choice]'.
* Click on the 'mostly.cy.ts' link.

After selecting the file, the tests will execute in the Cypress app. It is possible to rerun and debug the tests using the
GUI offered by the Cypress app.

##Issues
There were some issues found during the development of the tests that could require some improvements:
* The cookies pop-up caused some issues while developing the tests. These were resolved by forcing clicks or handling the popup in specific cases. However, for a proper test suite, this should be resolved in a more scalable way.
* The navigation tabs behavior was not the same when clicking options in the browser and when clicking using the cy.click() command. Therefore, sometimes multiple clicks were necessary. Again, a more scalable solution is needed here.
* The form could sometimes take more than the default 4 second Cypress wait to load, therefore, this waiting period was extended in the Cypress configuration file.

##Learnings
* I had the chance to look into the latest version of Cypress (the last time I had used Cypress was version 4.0).
* I had the chance to use TypeScript with Cypress, before I had only used JavaScript.
