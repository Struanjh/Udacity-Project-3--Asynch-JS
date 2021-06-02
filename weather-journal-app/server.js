// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

//Dependencies //
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware - I don't know why bodyParser text has a line through it in my IDE//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 8000;

const server = app.listen(port, listening);

function listening() {
    console.log("server running");
    console.log(`running on local host: ${port}`);
};

// Callback to debug

// Initialize all route with a callback function


//GET ROUTE//
//When a GET request is made to the '/all' route, send the response to the projectData object = API endpoint//
app.get('/all', function(req, res) {
    res.send(projectData);
})

// Post Route//
//When a POST request is made to the '/addPost' route, call the addData function//
app.post('/addPost', addData);


function addData (req, res) {
    let data = req.body;
    //Properties within projectData object - "temperature", "data", "userResponse"
    //Assign those properties the values from the POST Request//
    projectData["temperature"] = data.temperature;
    projectData["date"] = data.newDate;
    projectData["userresponse"] = data.userresponse;
    res.send(projectData);
}


