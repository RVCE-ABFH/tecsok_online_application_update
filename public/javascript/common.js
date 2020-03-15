$(document).ready(function () {
    var originalFontSize = $("html").css("font-size"); $(".resetFont").click(function () { $("html").css("font-size", originalFontSize) }); $(".increaseFont").click(function () { var currentFontSize = $("html").css("font-size"); var currentFontSizeNum = parseFloat(currentFontSize, 10); var newFontSize = 14; $("html").css("font-size", newFontSize); return false }); $(".decreaseFont").click(function () {
        var currentFontSize = $("html").css("font-size"); var currentFontSizeNum = parseFloat(currentFontSize, 10);
        var newFontSize = 11; $("html").css("font-size", newFontSize); return false
    }); commonload(); if ($.cookie("floatingfooter") != null) if ($.cookie("floatingfooter") == "inactive") { $(".floatingfooterbottom").hide(); $(".floatingfooter .floatingfootertopinner").children("img").attr("src", $(".floatingfooter .floatingfootertopinner").children("img").attr("src").replace(".png", "_active.png")); $(".floatingfooter .floatingfootertopinner").removeClass("active"); $.cookie("floatingfooter", "inactive") } else {
        $(".floatingfooterbottom").slideDown();
        $(".floatingfooter .floatingfootertopinner").children("img").attr("src", $(".floatingfooter .floatingfootertopinner").children("img").attr("src").replace("_active.png", ".png")); $(".floatingfooter .floatingfootertopinner").addClass("active")
    } 
});
function commonload() {
    $(".floatingfooter .floatingfootertopinner").addClass("active"); $(".floatingfooter .floatingfootertopinner").click(function () {
        $(".floatingfooterbottom").slideToggle(); if ($(this).hasClass("active")) { $(this).children("img").attr("src", $(this).children("img").attr("src").replace(".png", "_active.png")); $(this).removeClass("active"); $.cookie("floatingfooter", "inactive") } else {
            $(this).children("img").attr("src", $(this).children("img").attr("src").replace("_active.png", ".png")); $(this).addClass("active");
            $.cookie("floatingfooter", "active")
        } 
    })
}
(function ($) {
    $.cookie = function (key, value, options) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options); if (value === null || value === undefined) options.expires = -1; if (typeof options.expires === "number") { var days = options.expires, t = options.expires = new Date; t.setDate(t.getDate() + days) } value = String(value); return document.cookie = [encodeURIComponent(key), "=", options.raw ? value : encodeURIComponent(value), options.expires ? "; expires=" +
options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join("")
        } options = value || {}; var decode = options.raw ? function (s) { return s } : decodeURIComponent; var pairs = document.cookie.split("; "); for (var i = 0, pair; pair = pairs[i] && pairs[i].split("="); i++) if (decode(pair[0]) === key) return decode(pair[1] || ""); return null
    } 
})(jQuery);
