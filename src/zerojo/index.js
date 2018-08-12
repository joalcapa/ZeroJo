module.exports = function () {

    var init = function(request) {
        console.log("init");
    }

    var response = function() {
        return 'response ZeroJo';
    }

    return {
        init : init,
        response : response
    }
}