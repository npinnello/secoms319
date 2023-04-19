var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";

app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
    });

    app.get("/listUsers", (req, res) => {
        fs.readFile(__dirname + "/" + "users.json", "utf8", (err, data) => {
        console.log(data);
        res.status(200);
        res.send(data);
        });
        });

        app.get("/:id", function (req, res) {
            // First read existing users.
            fs.readFile(__dirname + "/" + "users.json", "utf8", (err, data) => {
            var users = JSON.parse(data); // convert string to JSON
            var user = users["user" + req.params.id];
            console.log(user);
            res.end(JSON.stringify(user)); // Convert data to string and response
            });
            });

           
        