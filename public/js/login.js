//icheck init
$('[data-icheck="true"]').iCheck({

    checkboxClass: 'icheckbox_billevo',
    radioClass: 'iradio_billevo',
});

// //mdl form helper
$(".mdl-textfield__input").blur(function() {
    if (!this.value) {
        $(this).prop('required', true);
        $(this).parent().addClass('is-invalid');
    }
});
// $(".btn--submit").click(function(event) {
//     $(this).siblings(".mdl-textfield").addClass('is-invalid');
//     $(this).siblings(".mdl-textfield").children(".mdl-textfield__input").prop('required', true);
// });

validateSubmit = function() {

    $('[data-id="login-page"] .btn--submit').on('click', function() {

        var inputs = $('[data-id="login-page"] input');

        inputs.each(function(index, el) {

            if (!$(this).val()) {
                $(this).parent().addClass('is-invalid');
                return;
            }

        });

        $('#login-form').submit();


    });


}

validateSubmit();
