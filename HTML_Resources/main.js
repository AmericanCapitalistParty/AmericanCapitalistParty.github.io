$('header').load("HTML_Resources/header.html");
$('footer').load("HTML_Resources/footer.html");

//Code for the navbar
$(document).ready(function () {
    $(".button-collapse").sideNav();
});

//Code for Parralax
$(document).ready(function () {
    $('.parallax').parallax();
});

//Scroll Spy
$(document).ready(function () {
    $('.scrollspy').scrollSpy();
});

$.getScript('HTML_Resources/jq-smoothwheel.js', () => {
    $(document).ready(function () {
        $(document.documentElement.scrollHeight > document.documentElement.clientHeight ? 'html' : 'body').smoothWheel();
    });
    $(document).ready(function () {
        $(window).smoothWheel()
    });
})
