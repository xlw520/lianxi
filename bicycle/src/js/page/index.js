require(["/js/config.js"], function () {
    require(["bscroll"], function (bscroll) {
        var myscroll1 = new bscroll(".left");
        var myscroll2 = new bscroll(".every");
    })
})