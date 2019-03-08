require(["/js/config.js"], function () {
    require(["bscroll","mui"], function (bscroll,mui) {
        var myscroll1 = new bscroll(".left");
        var myscroll2 = new bscroll(".every");
        mui.ajax("/list",{
            type:"get",
            success:function (data) {
                var data = JSON.parse(data)
                
              }
        })

    })
})