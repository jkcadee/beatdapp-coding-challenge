const express = require('express');
const port = process.env.PORT || 5000;
const mySQL = require("mysql");
const parser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(parser.urlencoded({
  extended: false
}));
app.use(parser.json());
app.use(express.json({
  type: ['application/json', 'text/plain']
}));

// setting up the connection to the database
const connection = mySQL.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root",
        database: "expenses"
    }
);

// connected to the database
connection.connect(function(err) {
  if(err) {
    console.log("Error connecting.");
  } else {
    console.log("Success!")
  } 
});

// creates a POST route that inserts data into the database
app.post("/express_backend", function(req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  let newData = req.body;
  console.log(newData);

  let values = [];
  values.push(newData.name, newData.cost, newData.category);
  console.log(values);

  connection.query("INSERT INTO expenseTracker(name, item_cost, category) VALUES (?)", [values], function(err, res) {

  });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// creates a GET route to grab data from the database
app.get('/express_backend', (req, res) => {
  try {
    const sqlQuery = 'SELECT * FROM expenseTracker';
    connection.query(sqlQuery, function(err, result) {
      res.end(JSON.stringify(result));
    });
  } catch (err) {
      throw err;
}
  // res.send({ express: 'It works!'});
});

// deletes an item from the expense database using a DELETE route 
app.delete('/express_backend', (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  let dataID = req.body;
  console.log(dataID);

  let id = [];
  id.push(dataID.id);
  console.log(id);

  connection.query("DELETE FROM expenseTracker WHERE id = ?", [id], function(err, res) {
    if (err) {
      throw err;
    }
  });
});