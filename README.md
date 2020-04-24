## beatdapp-coding-challenge

### SETUP
Make sure you have these frameworks/ technologies installed:
- Node.js
- React
- Express
- MySQL and SQL

This setup will assume that you understand/ know how to set up a React application with an Express server.

1. Open MySQL on the command line or other IDE.
2. Create a database called `expenses`.
3. Create a table called `expenseTracker` with the given `schema.sql` inside the database.

### RUNNING
1. Clone the repository and make sure to have the code in here on hand https://github.com/jkcadee/expense-beatdapp, this repository contains the create-react-app code.

Your directory should look like this:

- beatdapp-coding-challenge
    - node_modules
    - package.json
    - package-lock.json
    - schema.sql
    - server.js
    
- expense-beatdapp

2. Once all the files are in the correct places, open up your IDE of choice or command line and run the `server.js` file
3. When opening up the `server.js` file, make sure to change your user and password values.
4. Open up command line and navigate to `expense-beatdapp`, run the command `npm start` in that directory. This will initialize the React application. 

This application will be viewable on localhost port 3000, and express is run on port 5000.
You should be good to go after that.
