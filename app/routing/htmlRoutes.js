var path = require('path');

module.exports = function(app, __dirname) {
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, 'app/public/survey.html'));
    })
}