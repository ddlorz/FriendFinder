var bodyParse = require('body-parser');

module.exports = function(app, people) {
    app.use(bodyParse.json());

    app.get('/api/friends', function(req, res) {
        return res.json(people);
    });
}