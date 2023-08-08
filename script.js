$(document).ready(function() {
    $("#text").html(function(_, html) {
        return html.replace(/\[spoiler\](.*?)\[\/spoiler\]/g, '<span id="spoiler" class="spoiler active">$1</span>');
    });

    $('#spoiler').click(function(e) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
});