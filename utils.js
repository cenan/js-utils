define([], function () {

    var Utils = {
        slugify: function (str) {
            return str
                .toLowerCase()
                .replace(/[^\w ]+/g, '')
                .replace(/ +/g, '-');
        }
    };

    return Utils;
});