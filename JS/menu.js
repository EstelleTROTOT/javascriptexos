$(document).ready(function(){
    $('#menuToggle').click(function(){
        $('.menu').stop(true, true).slideToggle(300);
    });
});