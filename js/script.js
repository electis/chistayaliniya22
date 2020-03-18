$(function() {
    $('#square').keyup(function(){
        var square = $(this).val();
        $('#price').val(square*1100)
    });
    $('#price').keyup(function(){
        var price = $(this).val();
        $('#square').val((price/1100).toFixed(2))
    });

    $('.ask-blocks .item h4').click(function(){
        var thisH4 = $(this),
            thisSpan = $('div', $(this).parent()),
            outherH4 = $('.ask-blocks .item h4').not(thisH4),
            outherSpan = $('.ask-blocks .item div').not(thisSpan);
        outherH4.removeClass('active');
        outherSpan.hide().removeClass('active');
        thisH4.toggleClass('active');
        thisSpan.fadeToggle().toggleClass('active');
    });

    $('.up').click(function(e){
        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        }, 1000);
    });
    $("input.tel").click(function(){
        $(this).val('+7');
    });
    $(window).scroll(function() {
        var pos = 86;
        if( ($(window).width() <= 1199) || ($(window).width() >= 768) ) {
            pos = 150;
        }
        if( ($(window).width() <= 767) || ($(window).width() >= 576) ) {
            pos = 150;
        }
        if($(window).width() <= 575) {
            pos = 290;
        }

        if($(this).scrollTop() >= pos) {
            $('nav').addClass('stickytop');
        }
        else{
            $('nav').removeClass('stickytop');
        }
    });
    $('.smoothScroll').click(function(event) {
        event.preventDefault();
        var href=$(this).attr('href');
        var target=$(href);
        var top=target.offset().top;
        $('html,body').animate({
          scrollTop: top
        }, 1000);
    });

    $('.modal').on('hidden.bs.modal', function (e) {
      $('input:not(.type)', $(this)).val('');
    });
    $('form').submit(function(e){
        e.preventDefault();
        var name = $(".name", $(this)).val();
        var tel = $(".tel", $(this)).val();
        var form_data = {
            'key':'KuL4Vyqi9VdL',
            'method':'send_email',
            'message':'Имя: '+name+'\nТелефон: '+tel,
        };
        $.ajax({
          type: "POST",
          url: "http://utils.asofts.ru/api/",
          data: form_data,
          success: function(){
            $('.modal').modal('hide');
            setTimeout(function() {
                $('.success').fadeToggle();
            }, 1000);
            setTimeout(function() {
                $('.success').fadeToggle();
            }, 2500);
          },
          error: function() {
            alert("Произошла какая то ошибка!");
          }
        }); 
    });
    new WOW().init();
});