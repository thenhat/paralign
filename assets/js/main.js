jQuery.fn.exists = function(){return this.length>0;}
var main = {
    ScrollToTop:function(){
        $("#scroll-top").click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    },
    Start:function(){
        this.ScrollToTop();
    }
};
$(document).ready(function(){
    main.Start();
});
