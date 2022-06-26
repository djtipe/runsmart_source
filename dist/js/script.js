document.addEventListener('DOMContentLoaded', () => {
  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
  });
  
  document.querySelector('.prev').addEventListener('click', () => {
    slider.goTo('prev');
  });
  
  document.querySelector('.next').addEventListener('click', () => {
    slider.goTo('next');
  });
  
  (function($) {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
    });
  
  })(jQuery);
  
  const links = document.querySelectorAll('.catalog-item__link');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.target.parentNode.classList.toggle('catalog-item__content_active');
      e.target.parentNode.parentNode.querySelector('.catalog-item__list')
      .classList.toggle('catalog-item__list_active');
    })
  })
  
  const linksBack = document.querySelectorAll('.catalog-item__link-back');
  linksBack.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.target.parentNode.classList.toggle('catalog-item__list_active');
      e.target.parentNode.parentNode.querySelector('.catalog-item__content')
      .classList.toggle('catalog-item__content_active');
    });
  });
  
  //MODAL
  
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });

  $('[data-modal=order]').each(function(i) {
    $(this).on('click', function() {
      $('.overlay, #order').fadeIn('slow');
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    });
  });

  //validation

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, ведите Ваше имя",
          minlength: jQuery.validator.format("Необходимо внести минимум {0} символа!")
        },
        phone: "Пожалуйста, введите Ваш номер телефона",
        email: {
          required: "Пожалуйста, введите Ваш адрес электронной почты",
          email: "Ваш адрес электронной почты должен быть в формате name@domain.com"
        }
      }
    });
  
  }

  validateForms("#order form");
  validateForms("#consultation form");
  validateForms("#consultation-form");

  $("input[name=phone]").mask("+7 (999) 999-99-99");

  $(window).scroll(function(){
    if($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  })

  //feedback animations
  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // changed
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

});

