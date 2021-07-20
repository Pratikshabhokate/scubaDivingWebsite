$(document).ready(function(){
    $('button').click(function(e){
        $(this).append('<span></span>');
        var top=e.pagey;
        var left =e.pagex;
        $(this).children().offset({top:top,left:left}).fadeout(100);
    })

})