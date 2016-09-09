$(document).ready(function(){
    for(var i=1980;i<2016;i++) {
        $('.year').append("<option value="+i+">"+i+"</option>");
    }
    for(var i=1;i<13;i++) {
        $('.month').append("<option value="+i+">"+i+"</option>");
    }
    for(var i=1;i<30;i++) {
        $('.dey').append("<option value="+i+">"+i+"</option>");
    }
});
