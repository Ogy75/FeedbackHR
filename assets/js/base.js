$(document).ready(function () {

    //NOTIF MESSAGES
    // var error = {
    //     dataLoad: 'Error Loading Data! Please try Again.',
    //     incomplete: 'Please select required data.',
    //     other: 'Bla, bla, bla...',
    // }
    // var success = {
    //     save: 'Sucessfully Saved.',
    //     add: 'Successfully added',
    //     appActive: 'Parking App successfuly activated',
    //     appInactive: 'Parking App sucessfulu Paused',
    //     spotInUse: 'Great! Now you have a parking spot for the next week'
    // }
    // var info = {
    //     general: 'Lep je dan napolju!',
    //     reccuringModeOff: 'Reccuring Mode has been turned Off. Campaigns will not repeat weekly.',
    //     reccuringModeOn: 'Reccuring Mode has been turned On. Campaigns will repeat on selected days.',
    //     general: 'some info',
    // };

    //NOTIFICATION INIT
    Notiflix.Notify.Init({
        width: '300px',
        fontSize: '13px',
        fontFamily: 'Roboto',
        timeout: 4000,
        messageMaxLength: 200,
        success: {
            background: '#28a745',
            childClassName: 'success',
            notiflixIconColor: 'rgba(255,255,255,0.6)',
        },
        failure: {
            background: '#d8483e',
            childClassName: 'failure',
            notiflixIconColor: 'rgba(255,255,255,0.6)',
        },
        info: {
            background: '#0000b4',
            childClassName: 'info',
            notiflixIconColor: 'rgba(255,255,255,0.6)',
        },
    });

    $('.nt-save').on('click', function(){
        Notiflix.Notify.Success('sucessfully saved');
    });

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
    $('.js_loadMore').hide();
    if ($(window).height() < 800) {
        $(function () {
            $('.js_loadMore').slice(0, 4).show();
            $('#load-more').on('click', function (e) {
                e.preventDefault();
                $('.js_loadMore:hidden').slice(0, 4).show(200);
                if ($('.js_loadMore:hidden').length == 0) {
                    $('#load-more').hide();
                }
            });
        });
    }
    else {
        $(function () {
            $('.js_loadMore').slice(0, 12).show();
            $('#load-more').on('click', function (e) {
                e.preventDefault();
                $('.js_loadMore:hidden').slice(0, 4).show(200);
                if ($('.js_loadMore:hidden').length == 0) {
                    $('#load-more').hide();
                }
            });
        });
    };
    //UI HELP TOOLS
    $('.helper-switch').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('.js_uiHelperPanel').hide();
        $("#" + tab_id).show();
    });
    function jqUpdateSize(){
        var width = $(window).width();
        var height = $(window).height();
        $('#wWidth').html(width);
        $('#wHeight').html(height);
    };
    $(document).ready(jqUpdateSize);
    $(window).resize(jqUpdateSize);

    //TEMP
    $(window).on('load',function(){
        $('#document').modal('show');
    });

    //SALARY CHANGE
    $('#salary-change').on('change', function(){
        if($(this).prop('checked')){
            $('#salary-change-amount').prop('disabled', false);
            $('#salary-change-amount').focus();
        }
        else{
            $('#salary-change-amount').prop('disabled', true);
        }
    });

    //FOLLOW UP CHECK
    $('#follow-up').on('change',function(){
        if($(this).prop('checked')){
            $('#follow-up-reasons').show();
            $('#follow-up-form').show();
        }
        else{
            $('#follow-up-reasons').hide();
            $('#follow-up-form').hide();
        }
    });

    $('#satisfied').on('change',function(){
        if($(this).prop('checked')){
            $('#expected').prop('disabled', true);
            $('#salary-change').prop('disabled', true);
            $('#salary').prop('checked', false);
            $('#follow-up').prop('checked', false);
            $('#follow-up-reasons').hide();
            $('#follow-up-form').hide();
            $('#s-topic').hide();

        }
        else{
            $('#expected').prop('disabled', false);
            $('#salary-change').prop('disabled', false);
            $('#follow-up').prop('checked', true);
            $('#salary').prop('checked', true);
            $('#follow-up-reasons').show();
            $('#follow-up-form').show();
            $('#s-topic').show();
            $('#expected').focus();
        }
    });

    $('#changed-follow-up').on('change', function () {
       if($(this).prop('checked')){
        $('#amount-follow-up').prop('disabled', false);
        $('#amount-follow-up').focus();
       }
       else if($(this).prop('checked', false)){
        $('#amount-follow-up').prop('disabled',true);
       }
    });

    $('#satisfied-follow-up').on('change', function () {
        if($(this).prop('checked')){
         $('#satisfied-amount-follow-up').prop('disabled', true);
        }
        else if($(this).prop('checked', false)){
         $('#satisfied-amount-follow-up').prop('disabled',false);
         $('#satisfied-amount-follow-up').focus();
        }
     });

    $('.topic').on('change',function () {
        var tab_id = $(this).attr('data-tab');
        if($(this).prop('checked')){
        $("#" + tab_id).show();
        }
        else if($(this).prop('checked', false)){
            $("#" + tab_id).hide();
        }
    });

    $('.resolved').on('change', function () {
        if($(this).prop('checked')){
            $(this).parents('.topic').find('textarea').hide();
        }
        else{
            $(this).parents('.topic').find('textarea').show();
        }
    });


});

