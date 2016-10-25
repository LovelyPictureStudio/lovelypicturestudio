$(document).ready(function() {
    $('section').on('click', '.contact-container .right-container .btn-lovely', function() {
        var link = "mailto:info@lovelypicturestudio.com"
            + "?cc="
            + "&subject=" + escape($('#subject').val())
            + "&body=" + escape(
                            'Name:' +  $('#name').val() + '\n' + 
                            'Phone:' +  $('#phone').val() + '\n' + 
                            'Message: ' + $('#message').val()
                         )
        ;
    
        window.location.href = link;
        $('section .form-group').each(function() {
            $(this).find('input').val('');
        });
    });
});