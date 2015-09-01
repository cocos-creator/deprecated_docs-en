(function(){
    'use strict';

    var header = document.getElementById('top');
    //var container = document.getElementsByTagName('body')[0];
    var toc = document.getElementById('article-toc');
    var sidebar = document.getElementById('sidebar');
    var tocTop = document.getElementById('article-toc-top');
    var headerHeight = header.clientHeight;

    if (!toc) return;

    // function updateSidebarPosition(){
    //     //var scrollTop = $('#full-wrap').scrollTop();
    //     var scrollTop = $('body').scrollTop();
    //     if (scrollTop > headerHeight){
    //         toc.classList.add('fixed');
    //         if (!window.matchMedia("(max-width: 768px)").matches) {
    //             sidebar.classList.add('fixed');
    //             [> the viewport is at most 768 pixels wide <]
    //         }
    //     } else {
    //         toc.classList.remove('fixed');
    //         if (!window.matchMedia("(max-width: 768px)").matches) {
    //             sidebar.classList.remove('fixed');
    //         }
    //     }
    // }

    // $(window).scroll( function(){
    //     //console.log('updating position');
    //     window.requestAnimationFrame(updateSidebarPosition);
    // });

    $(window).resize(function() {
        columnHeight();
    });

    function columnHeight() {
        var sidebarHeight = getHeight() - 84;
        $('.container.sidebar').css('height', sidebarHeight);
    }

    function getHeight() {
        var viewportheight;

        if (typeof window.innerHeight != 'undefined') {
            viewportheight = window.innerHeight;
        }
        else if ( typeof document.documentElement !== 'undefined' &&
                  typeof document.documentElement.clientHeight !== 'undefined' &&
                  document.documentElement.clientHeight !== 0 )
        {
            viewportheight = document.documentElement.clientHeight;
        }
        else {
            viewportheight = document.getElementsByTagName('body')[0].clientHeight;
        }
        return viewportheight;
    }

    columnHeight();

    tocTop.addEventListener('click', function(e){
        e.preventDefault();
        $('body').scrollTop(0);
    });
})();
