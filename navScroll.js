
$(function() {
    $(document).scroll(function() {
        var $nav = $("#main-navbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});