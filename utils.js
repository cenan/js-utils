(function (factory) {
    "use strict";

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        self.Utils = factory(jQuery);
    }
}(function (jQuery) {
    "use strict";

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
            jQuery('link[rel="stylesheet"]').each(function () {
                this.href = this.href.replace(/\?.*|$/, queryString);
            });
        }
    };

    return Utils;

}));
