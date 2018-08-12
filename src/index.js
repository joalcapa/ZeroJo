var zerojo = require("./zerojo/")();

module.exports = function () {

    var _app;

    var run = function() {
        _app = require('express')();

        _app.get('/zj', function (req, res) {
            zerojo.init(req);
            var response = zerojo.response();
            res.send(response);
        });

        _app.listen(3000, function () {
            console.log('server ZeroJo listening on port 3000');
        });
    }

    return {
        run : run
    }
}