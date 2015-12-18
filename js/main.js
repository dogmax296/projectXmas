// Progress for textarea



jQuery(document).ready(function() {

    // TOP

    $('.form__textarea--top').keyup(function() {
        var box = $(this).val();
        var main = box.length * 100;
        var value = parseInt((main / 132),10);
        var count = 0 + value;

        
        if(box.length >= 0){

            $('.form__progress-bar--top').css('width', count + '%');
            $('.form__current--top').text(count + '%');   
        }
        return false;
    });

    // BOTTOM
    
    $('.form__textarea--bottom').keyup(function() {
        var box = $(this).val();
        var main = box.length * 100;
        var value = parseInt((main / 132),10);
        var count = 0 + value;
        var count_lenght = box.length;
        
        if(box.length >= 0){

            $('.form__progress-bar--bottom').css('width', count + '%');
            $('.form__count-left--bottom').text(count_lenght);    
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

// DAYS till New date-now__year

$(document).ready(function() {

    var todayDate = moment().date();
    var newYearDate = 31;
    var daysLeft = newYearDate - todayDate;

    $(".popup__newyear-left").text(daysLeft);
    

});