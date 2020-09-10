$(document).ready(function () {
    $('.fb-tab').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('.fb-tab').removeClass('selected');
        $('.tab-content').hide();
        $(this).addClass('selected');
        $("#" + tab_id).show();
    });


    //***SEARCH FILTER START***//
    //toggle search reset visibility
    $('#reset-icon').hide();
    $('#find-employee').keyup(function () {
        var s = $(this).val();
        if (s.length > 0) {
            $('#reset-icon').show();
        } else {
            $('#reset-icon').hide();
        }
    });
    //clear search val & focus
    $('#reset-icon').on('click', function () {
        $('#find-employee').val('').focus();
        $(this).hide();
        $('.fb-employee').show();
        $('.no-results-message').hide();
    });
    //Filter list
    $('#find-employee').keyup(function () {
        var filter = $(this).val(),
            count = 0;
        $('.fb-employee').each(function () {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).hide();
            } else {
                $(this).show();
                count++;
            }
        });
        if (count > 0) {
            $('.no-results-message').hide();
            $('.vct-actions').hide();
        } else {
            $('.no-results-message').show();
            $('.vct-actions').hide();
        }
    });
    //***SEARCH FILTER END***//

    //Dropdown menu
    //$('.fb-dropdown-menu').hide();
    $('.fb-dropdown-cta').on('click', function () {
        $('.fb-dropdown-menu').hide();
        $(this).find('.fb-dropdown-menu').show();
        $(document).mouseup(function (e) {
            var container = $('.fb-dropdown-menu');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide();
            }
        });
    });

    //reset filters
    $('#reset-selection').on('click', function(){
        var select = $('#fb-filters').find('select');
        select.prop('selectedIndex',0);
    });

    //LOAD MORE
    $('.fb-doc-block').hide();
    if ($(window).height() < 800) {
        $(function () {
            $('.fb-doc-block').slice(0, 4).show();
            $('#load-more').on('click', function (e) {
                e.preventDefault();
                $('.fb-doc-block:hidden').slice(0, 4).show(200);
                if ($('.fb-doc-block:hidden').length == 0) {
                    $('#load-more').hide();
                }
            });
        });
    }
    else {
        $(function () {
            $('.fb-doc-block').slice(0, 12).show();
            $('#load-more').on('click', function (e) {
                e.preventDefault();
                $('.fb-doc-block:hidden').slice(0, 4).show(200);
                if ($('.fb-doc-block:hidden').length == 0) {
                    $('#load-more').hide();
                }
            });
        });
    };

});