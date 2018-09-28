module.exports = function () {
    let _res = 'response ZeroJo';

    var makeResponse = function(schema) {
        return schema;
    }

    return {
        makeResponse : makeResponse
    }
}