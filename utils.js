define([], function () {

    var Utils = {
        slugify: function (str) {
        	if (typeof str !== "string") {
        		return str;
        	}
            return str
                .toLowerCase()
                .replace(/[^\w ]+/g, '')
                .replace(/ +/g, '-');
        }
    };

    return Utils;
});