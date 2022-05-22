$(".banner__left .btn").click(function () {
    $(".modal").addClass('active');
});
$(".modal__close").click(function () {
    $(".modal").removeClass('active');
});