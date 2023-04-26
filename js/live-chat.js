(function () {
    var APP_UUID = "4a9f97f5-9cd3-47f8-923c-0c1f8f493128";
    var BASE_COLOR = "#3091f2";
    var CONTAINER_ELEMENT = "iframe";

    var process = void 0;
    var _typeofThat =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (o) {
                return typeof o;
            }
            : function (o) {
                return o &&
                    "function" == typeof Symbol &&
                    o.constructor === Symbol &&
                    o !== Symbol.prototype
                    ? "symbol"
                    : typeof o;
            };
    function insertLivechatJS() {
        var e = document.createElement("script");
        (e.type = "text/javascript"),
            (e.async = "true"),
            (e.src =
                ((process && process.env && process.env.DOMAIN) ||
                    "https://livechat.connexease.com") + "/l/embed-js/livechat.js");
        var t = document.createElement("link");
        (t.rel = "stylesheet"),
            (t.href =
                ((process && process.env && process.env.DOMAIN) ||
                    "https://livechat.connexease.com") +
                "/l/embed-css/livechat_embed.css");
        var n = document.getElementsByTagName("script")[0];
        document.head.appendChild(t), n.parentNode.insertBefore(e, n);
    }
    window.attachEvent
        ? window.attachEvent("onload", insertLivechatJS)
        : window.addEventListener("load", insertLivechatJS, !1),
        (window.initLivechat = function () {
            "object" === _typeofThat(window.LiveChat) &&
                window.LiveChat.boot({
                    uuid: APP_UUID,
                    baseColor: BASE_COLOR,
                    containerElement: CONTAINER_ELEMENT,
                });
        });
})();


// canlı destek click olursa

$("#liveChatActive").click(function () {
    $('.tusla-livechat__launcher').click();
});