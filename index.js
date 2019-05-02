function updateLinkColor() {
    $('.link').hover(function() {
        $(this).find('a').addClass('green');
    }, function() {
        $(this).find('a').removeClass('green');
    }); 
}

function toggleMenu() {
    $('.icon').click(function() {
        $('nav').toggleClass('show');
    });   
}

function mainApp() {
    toggleMenu();
    updateLinkColor();
}

$(mainApp);