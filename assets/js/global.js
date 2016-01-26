/*

Zeppelin Prototype    : global.js
author                : Jeremy Anderson (objectajdective.com)
version	              : 4.0

.................................................*/

$(document).ready(function() {
    
    stickyHeader();
    addParagraph();
    selectParagraph();
    
    $(window).resize(function() {
        stickyHeader();
    });

});

//End Ready......................................


function stickyHeader() {
    // get height of first two headers
    var scrollHeight = 50;
    var self = this;
    if($( window ).width() > 750) {
        
        $(window).scroll(function() {
            // get current scroll position
            var scrollTop = $(this).scrollTop();
            
            // if current position > scrollHeight
            if (scrollTop > scrollHeight) {
                // make fixed
                $('.jq-title-bar, .jq-content').addClass('fixed-header');
    
            } else if (scrollTop < scrollHeight) {
                // unfix and go back to default color
                $('.jq-title-bar, .jq-content').removeClass('fixed-header');
            }
    
        });
    
    }
}

function selectParagraph() {

    $('html').click(function() {
        $('.selected').removeClass('selected');
    });
    $('.jq-paragraph').click(function(event) {
        $('.selected').removeClass('selected');
        $(this).not('.selected').addClass('selected');
        event.stopPropagation();
    });
}

function addParagraph() {
    $('.jq-add-paragraph').click(function(event) {
        $('.selected').removeClass('selected');
        $(this).after('<li class="row"><div class="paragraph jq-paragraph new-paragraph selected"><header class="drag-bar"><img src="assets/img/drag-bar-full.png" /></header><img src="assets/img/blank-paragraph.png" alt="Filter" /></div></li><li class="row"><div class="add-paragraph jq-add-paragraph"></div></li>');
        $('.new-paragraph').stop( true, true ).fadeIn("slow");
        $('html, body').animate({
            scrollTop: $(this).offset().top - 150
        }, 700);
        $('.jq-add-paragraph').unbind();
        event.stopPropagation();
        addParagraph();
        selectParagraph();
    });
}