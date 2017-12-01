/**
 * Created by ulfeng on 2017/4/7.
 */
$(function () {

    // tab switch
    $('body').on('click', '.tab-nav li', function () {
        // nav switch
        $(this).addClass('on').siblings().removeClass('on');
        // content switch
        var index = $(this).index();
        $(this).closest('.tab-wrapper').find('.tab-content').removeClass('on').eq(index).addClass('on');
    });

})
