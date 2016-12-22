$(document).ready(function() {
    $('header nav a').on('click', function() {
        $('header nav a').each(function() {
            $(this).removeClass('selected');
        });
        $(this).addClass('selected');
        load_section($(this).attr('data-section'));
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
    var sectionLabel = 'home';
    if (section.includes('home')) {
        sectionLabel = 'home';
    } 
    else if (section.includes('work' || 'proyectos')) {
        sectionLabel = 'work';
    } 
    else if (section.includes('about' || 'sobre mi')) {
        sectionLabel = 'about';
    } 
    else if (section.includes('contact' || 'contacta')) {
        sectionLabel = 'contact';            
    }
    else if (section.includes('pricing' || 'contacta')) {
        sectionLabel = 'pricing';
    }

    $('section').load(sectionLabel + '.html', function() { set_storage('menu-category', sectionLabel); });

    set_storage('location', section);
};

function set_storage(key, value) {
    localStorage.setItem(key, value);
};

function get_storage(key) {
    return localStorage.getItem(key);
};