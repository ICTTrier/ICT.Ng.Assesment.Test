# IctNgTest
## Introduction
This small test requires just a basic knowledge of JS/TS, CSS, HTML and Angular.
You free to use any help you can find on the internet to complete the tasks.
If you are stuck at any point please contact your contact person at ICT AG to get a little help.
Its not mandatoried to solve all tasks. We are just using this little test to measure your skills.
## Run the project
- Use "npm run start" to start the local server
## (Basic) 1: Getting started
- install the latest version of Git, Node JS and NPM (Node Package Manager)
- install angular cli by calling "npm install -g @angular/cli"
- pull the repository with git to your computer or download it manually as .zip file
- open the project folder with your favourite IDE (for example "Visual Code")
- open the terminal and run "npm install" to getting all packages installed
- run "npm run start" or "ng serve" to start the local web server
- open the url (http://localhost:4200/) of the webapplication in your favourite browser
- if the websites shows up you are ready to go. Stop the development server by pressing CTRL+ALT+C inside the terminal.
## (Basic) 2: Service
- create a service with angular cli called "solution-service"
- the service will implement one method called "getExchangeRate(from_currency: string, to_currency: string)" which is calling the REST Endpoint from www.alphavantage.com to get the exchange rate from the givin parameters
- check if your service gets imported correctly by the app.module.ts
## (Basic) 3: Component
- create a component with angular cli called "solution-cmp"
- the component recieves 3 inputs "fromCurrency", "toCurrency" and "delay"
- the component needs to import and use your service "SolutionService" as a provider
- after the component initiated it will wait for the as "delay" givin amount of time and call the "getExchangeRate" method from your service
- the HTML template will display the result as a tile (as shown on the screenshot)
- (optional) implement a "loading.." screen (background:green) for the tile which is shown as long as the REST Request is running
- (optional) implement a "unable to load" screen (background:red) for the tile which is shown when the API delivers anything else then the espected result
- (optional) when the request failes wait the givin delay * 4 and send the request again.
- (optional) implement a "Waiting.." screen (background:yellow) which displays the next delay periot
## (Advanced) 4: Add Button
- create a "Add" button in the header-cmp that will pop up a small form with the fields "From Currency Code:" and "To Currency Code:" and another button "add exchange rate"
- after the clicking the button in the form the currency pair gets added to the "exchangeRates" array in the app component
## (Advanced) 4: Remove Button
- create a remove button in the top-right corner of the tile. The button is just displaying a simple "X". When clicking the button the tile will be removed from the exchangeRates array.
# Information you will need
- API Key: 
- API https://www.alphavantage.co/documentation/
- Example: https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=XVG&to_currency=EUR&apikey=apikey
# How the solution could look like
