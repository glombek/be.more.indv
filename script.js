var allowKeys = [8, 9, 189];

$(function() {
    $(".domain, .email").on("keydown", function(e) {
        if((e.which >= 37 && e.which <= 105) || $.inArray(e.which, allowKeys) > -1) {
           //alls good!
           }
           else {
            e.preventDefault();
           }
    });
    $(".domain").on("input", function() {
        var text = $(this).text();
        $(".domain").not(this).text(text);
    });
    $("[data-placeholder]").on("blur", function() {
        var text = $(this).text();
        if(!text) {
            text = $(this).data("placeholder");
            $(this).text(text).trigger("input");
        }
    });
});