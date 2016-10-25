function getImageUrl(imgElement) {
    var oldUrl = imgElement.css('background-image').replace('")', '');

    var index;
    if (oldUrl.indexOf('/images') > -1) {
        index = oldUrl.indexOf('/images');
    }
    else if (oldUrl.indexOf('/gallery') > -1) {
        index = oldUrl.indexOf('/gallery')
    }

    return oldUrl.substring(index);
}

$(document).ready(function() {
    $('section').on('click', '.work > div', function() {
        if (!check_mobile()) {
            set_storage('index-gallery', $(this)[0].id);
            $('.gallery-show').empty();
            $('.gallery-show').append('<span class="arrow-left"></span>');
            $('.gallery-show').append('<img id=' + get_storage('index-gallery') + ' src=' + getImageUrl($(this)) + ' class="gallery-selected"/>');
            $('.gallery-show').append('<span class="close-cross"></span>');
            $('.gallery-show').append('<span class="arrow-right"></span>');
            $('.gallery-show').css('visibility', 'inherit');
            
            if ($('.gallery-show img').height() > $('.gallery-show img').width()) {
                $('.gallery-show img').addClass('vertical-img');
            }
        }
    });
    
    $('section').on('click', '.gallery-show .close-cross', function() {
        $('.gallery-show').css('visibility', 'hidden');
        $('body').css('position', 'initial');
    });
    
    $('section').on('click', '.gallery-show .arrow-left, .arrow-right', function() {
        var last_index = get_storage('index-gallery');
        if ($(this).hasClass('arrow-left')) {
            if (parseInt(get_storage('index-gallery')) - 1 < 1) {
                set_storage('index-gallery', 24);
            } else {
                set_storage('index-gallery', parseInt(get_storage('index-gallery')) - 1);
            }
        } else if ($(this).hasClass('arrow-right')) {
            if (parseInt(get_storage('index-gallery')) + 1 > 24) {
                set_storage('index-gallery', 1);
            } else {
                set_storage('index-gallery', parseInt(get_storage('index-gallery')) + 1);
            }
        }
        $('section .gallery-show .gallery-selected').attr('src', getImageUrl($('section .work #' + get_storage('index-gallery'))));
        
        if ($('.gallery-show img').height() > $('.gallery-show img').width()) {
            $('.gallery-show img').addClass('vertical-img');
        } else {
            $('.gallery-show img').removeClass('vertical-img');
        }
    });
    
    function check_mobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true;
        } else {
            return false;
        }
    };
});