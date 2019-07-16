var path = require("path");


module.exports = function(app) {

    // takes you to the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
      });
    //   takes you to the homepage where you intially will land
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
      });
};