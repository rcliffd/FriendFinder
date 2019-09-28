var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var userInput=req.body;
    console.log(userInput)

    for (var i=0; i< userInput.scores.length; i++) {
        userInput[i]=parseInt(userInput.scores[i]);
    }

    var best=0;
    var minimumDifference=40;

    for (var i=0; i<friends.length; i++) {
        var totalDifference=0;
        for (var j=0; j<friends[i].scores.length; j++) {
        var difference=Math.abs(userInput[j]-friends[i].scores[j]);
        totalDifference += difference;
        }

        if (totalDifference < minimumDifference) {
            best=i;
            minimumDifference=totalDifference
        }
    }

friends.push(userInput)

res.json(friends[best]);

  });
}
 
 

 

  