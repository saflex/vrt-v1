

$(window).load(function() {
    $(".js-required").each(function() {
        $(this).validate({
            rules:{         
                 email:{
                     required: true,
                     email: true
                 },         
                 f_name:{
                     required: true
                 },        
                 s_name:{
                     required: true
                 }
            },
            messages:{        
                 email:{
                     required: "Поле обязательно к заполнению",
                     email: "Введите корретные данные"
                 },        
                 f_name:{
                     required: "Поле обязательно к заполнению"
                 },       
                 s_name:{
                     required: "Поле обязательно к заполнению"
                 }
            },
            submitHandler: function(form) {
                var th = $(form);
                $.ajax({
                    type: "POST",
                    url: "mail.php", //Change
                    data: th.serialize(),
                    error: function() {
                        alert('error');
                    },
                    succsess: function () {
                        alert('succsess');
                    }
                }).done(function() {
                    var blockHeight = th.find('.box-subscribe-form').outerHeight();
                    var blockWidth = th.find('.box-subscribe-form').outerWidth();
                    th.find('.box-subscribe-form').hide();
                    th.find('.box-subscribe-form_submited').css('height', blockHeight + 'px');
                    th.find('.box-subscribe-form_submited').css('line-height', blockHeight + 'px');
                    th.find('.box-subscribe-form_submited').css('max-width', blockWidth + 'px');
                    th.find('.box-subscribe-form_submited').addClass('flex-center');
                    $.fancybox.close();
                });

                return false;
            }
        });
    });
});