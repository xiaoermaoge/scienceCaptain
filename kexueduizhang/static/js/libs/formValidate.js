/**
 * Created by ulfeng on 2017/4/7.
 */
$(function () {

    // files change
    $('.file-upload').on('change', 'input[type="file"]', function () {
        var filePath = $(this).val();
        if (filePath) {
            $('.fileerrorTip').html('').hide();
            var arr = filePath.split('\\');
            var fileName = arr[arr.length - 1];
            $('.showFileName').html(fileName);
        } else {
            $('.showFileName').html('未选择文件');
        }
    });


});