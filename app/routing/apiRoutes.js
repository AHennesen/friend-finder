var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

      app.post("/api/friends", function(req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
          };
    
        var userData = req.body;
        var userScores = userData.scores;

        var totalDifference;

        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0;
      
            console.log(currentFriend.name);

            for (var k = 0; k < currentFriend.scores.length; k++) {
                var currentFriendScore = currentFriend.scores[k];
                var currentUserScore = userScores[k];

                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }
            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
              }
        }

        friends.push(userData);
        res.json(bestMatch);
    });
};