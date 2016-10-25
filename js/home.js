setInterval(function() {
    var size_pulsation = 1.5;
    if (window.innerWidth > 786 && window.innerWidth <= 998) {
        size_pulsation = 2;
    } else if (window.innerWidth > 568 && window.innerWidth <= 768) {
        size_pulsation = 3;
    } else if (window.innerWidth <= 568) {
        size_pulsation = 5;
    }
    $('.portrait span').animate({
        'font-size': (size_pulsation + 0.5) + 'vw'
    }, 1000, function() {
        $(this).animate({
            'font-size': size_pulsation + 'vw'
        }, 1000);
    });
}, 2000);