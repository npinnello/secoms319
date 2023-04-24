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

            app.post("/addUser", (req, res) => {
                console.log(req.body);
                // const dataUser = req.body;
                const keys = Object.keys(req.body);
                const values = Object.values(req.body);
                console.log("Keys :", keys);
                console.log("Values :", values);
                // First read existing users.
                fs.readFile(__dirname + "/" + "users.json", "utf8", (err, data) => {
                data = JSON.parse(data);
                //
                data[keys[0]] = values[0];
                console.log(data);
                // Write new data
                data = JSON.stringify(data);
                fs.writeFile(__dirname + "/" + "users.json", data, "utf8", (err) => {
                if (err) console.log("Some error:" + err);
                });
                res.status(200);
                res.end(data);
                });
                });
                
app.delete("/deleteUser", function (req, res) {
console.log(req.body);
const dataUser = req.body;
const keys = Object.keys(req.body);
console.log("The user is :", dataUser);
// First read existing users.
fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
data = JSON.parse(data);
delete data[keys[0]];
console.log(data);
// Write new data
data = JSON.stringify(data);
fs.writeFile(__dirname + "/" + "users.json", data, "utf8", (err) => {
if (err) console.log("Some error:" + err);
});
// response
res.status(200);
res.end(data);
});
});


           
        