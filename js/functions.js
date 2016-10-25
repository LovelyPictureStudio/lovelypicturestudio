$(document).ready(function() {
    switch (get_storage('menu-category')) {
        case 'work':
        case 'about':
        case 'contact':
        case 'home':
        default:
            $('section').load('home.html');
            $('header nav a:nth-child(1)').addClass('selected');
            break;
    }
});