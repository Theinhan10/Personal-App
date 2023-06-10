
//Nodemon monitors the files in your application's directory and automatically restarts the Node.js server whenever a file changes. 
//Sequelize is a popular Object-Relational Mapping (ORM) library for Node.js. It provides a simple and powerful way to interact with relational databases by abstracting the database operations into JavaScript code.


require("dotenv").config();

//Express provides a simple and minimalistic set of features to build web servers and APIs.
//Express allows you to define routes for different HTTP methods (GET, POST, PUT, DELETE, etc.) and associate them with corresponding handler functions. 
const express = require('express') //calling express library
const app = express()

app.use(express.json());

const cors = require('cors');
app.use(cors());

//will automatic create table for us in the database
const db = require('./models')

//router
const postRouter = require('./Routes/Posts')
const Todo = require("./Routes/Todo")


app.use("/posts", postRouter);
app.use("/todo", Todo);



//when we runnign the api (app.listen), it will go over the model and create table in our db that is needed
db.sequelize.sync().then(()=>{
    app.listen(process.env.PORT, () => {
        // making sure the server is up and running
        // to start the server use cmd: node server.js
    
        // better way of running the server is using cmd: nodemon server.js (able to make/save changes without closing the server)
        // or you can use: npm start (script in package.json file)
        console.log("Listening on port", process.env.PORT);
      });
})


// middleware: any code that executes between getting request on server and sending response
app.use((req, res, next) => {
    // this function will fire for every request that comes in and basically logs the HTTP requests in terminal/console
    // must run the "next" function at the end of this middleware, in order to go to next piece of middleware/route
    console.log(req.path, req.method);
    next();
  });


