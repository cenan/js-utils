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
        },
        reloadStylesheets: function () {
            var queryString = '?reload=' + new Date().getTime();
            $('link[rel="stylesheet"]').each(function () {
                this.href = this.href.replace(/\?.*|$/, queryString);
            });
        }
    };

    return Utils;
});