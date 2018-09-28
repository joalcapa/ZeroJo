module.exports = function () {
    var _schema;

    var init = function(req) {
        _schema = 'schema';
    }

    var makeResponse = function() {
        return require("./http/response")()
            .makeResponse(_schema);
    }

    return {
        init : init,
        makeResponse : makeResponse
    }
}