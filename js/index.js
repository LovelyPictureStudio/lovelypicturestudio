$(document).ready(function() {
    $('header nav a, header .logo').on('click', function() {
        $('header nav a').each(function() {
            $(this).removeClass('selected');
        });
        $(this).addClass('selected');
        load_section($(this).text().trim().toLowerCase());
    });
});

function go_home() {
    $('header nav a').each(function() {
        $(this).removeClass('selected');
    });
    load_section('home');
    $('header nav a:first').addClass('selected');
};

function load_section(section) {
    if (section.includes('home')) {
            $('section').load('home.html', function() { set_storage('menu-category', 'home'); });
    } else if (section.includes('work' || 'proyectos')) {
            $('section').load('work.html', function() { set_storage('menu-category', 'work'); });
    } else if (section.includes('about' || 'sobre mi')) {
            $('section').load('about.html', function() { set_storage('menu-category', 'about'); });
    } else if (section.includes('contact' || 'contacta')) {
            $('section').load('contact.html', function() { set_storage('menu-category', 'contact'); });
    }
    set_storage('location', section);
};

function set_storage(key, value) {
    localStorage.setItem(key, value);
};

function get_storage(key) {
    return localStorage.getItem(key);
};