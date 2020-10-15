$(function() {
    var inWrap = $('.inner-wrapper');

    $('.prev').on('click', function() {
        inWrap.animate({left: '100%'}, 300, function(){
            inWrap.css('left', '0%');
            $('.slide').first().before($('.slide').last());
        });
    });

    $('.next').on('click', function() {
        inWrap.animate({left: '-100%'}, 300, function(){
            inWrap.css('left', '0%');
            $('.slide').last().after($('.slide').first());
        });
    });
})