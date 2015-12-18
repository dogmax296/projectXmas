// Progress for textarea

jQuery(document).ready(function() {
    
    $('.form__textarea--bottom').keyup(function() {
        var box = $(this).val();
        var main = box.length * 100;
        var value = (main / 130);
        var count = 0 + box.length;
        var reverse_count = 130 - box.length;
        
        if(box.length >= 0){

            $('.progress-bar').css('width', count + '%');
            $('.current-value').text(count + '%');
            $('.count').text(reverse_count);    
        }
        return false;
    });
});


// TODAYS DATE

$(document).ready(function() {

    var now = moment();

    $(".date-now__month").text(now.format("MMM"));
    $(".date-now__day").text(now.format("D"));
    $(".date-now__year").text(now.format("YYYY"));

});