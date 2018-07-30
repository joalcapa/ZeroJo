module.exports = function () {

    var _app;

    var run = function() {
        _app = require('express')();

        _app.get('/', function (req, res) {
            res.send('Hello World!');
        });

        _app.listen(3000, function () {
            console.log('Example app listening on port 3000!');
        });
    }

    return {
        run : run
    }
}