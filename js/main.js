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


// ANALOG CLOCK

function analogClock(){
}
analogClock.prototype.run = function() {
    var date = new Date();
    var second = date.getSeconds()* 6;
    var minute = date.getMinutes()* 6 + second / 60;
    var hour = ((date.getHours() % 12) / 12) * 360 + 90;
    jQuery('.clock__analog-hour').css("transform", "rotate(" + hour + "deg)");

    if(date.getHours()<12){

        $(".clock__analog-am").addClass("clock__analog-meridiem--active")
        
    } else{

        $(".clock__analog-pm").addClass("clock__analog-meridiem--active")
    };

    

};

jQuery(document).ready(function(){

var analogclock = new analogClock();

window.setInterval(function(){ 

analogclock.run(); 

}, 1000);

});


// DIGITAL CLOCK

function updateClock() {
    var date = new Date();
    var currentHours = date.getHours();
    var currentMinutes = date.getMinutes();

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

    // Convert an hours component of "0" to "12"
    currentHours = (currentHours == 0) ? 12 : currentHours;

    // Compose the string for display
    
    $(".clock__digital-hours").html(currentHours);
    $(".clock__digital-minutes").html(currentMinutes);
    $(".clock__digital-meridiem").html(timeOfDay);
        
 }

$(document).ready(function()
{
   setInterval('updateClock()', 1000);
});


// HAMBURGER

$(document).ready(function(){
    $('.menu__icons-hamburger').click(function(){
        $(this).toggleClass('hamburger-open');
    });
});

// Hidden menu

$(document).ready(function(){
    $('.menu__icons-hamburger').click(function(){
        $(".menu").toggleClass('menu--open');
        $(".main__content").toggleClass('main__content--move');

    });
});