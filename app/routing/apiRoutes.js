//Load Data

var path = require("path");
var friendsData = require("../data/friends.js");

//Routing

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        var userInput = req.body;
        var userResponse = userInput.scores;
        var match = {
            name: "",
            photo: "",
            difference: 500
        };
        for (let i = 0; i < friendsData.length; i++) {
            var totalDifference = 0;
            for (let j = 0; j < userResponse.length; j++) {
                totalDifference += Math.abs(friendsData[i].scores[j] - userResponse[j]);

                if (totalDifference <= match.difference) {
                    match.name = friendsData[i].name;
                    match.photo = friendsData[i].photo;
                    match.difference = totalDifference;
                }

            }

        }
        friendsData.push(userInput);

        res.json(match);
    });

};
