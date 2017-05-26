$(document).ready(function() {

  setInterval(hideLoader, 500)

  let burger= $('.burger-container');

  burger.click(openMenu);

  function openMenu() {
    animateBurger();
    toggleOverlayer();
    bodyNoScroll();
    //scaleBody();
  }

  function animateBurger(){
    burger.toggleClass('open');
  }

  function toggleOverlayer() {
    $('.menu-overlayer').toggleClass('open');
  }

  function bodyNoScroll() {
    $('body').toggleClass('no-scroll')
  }

  let ctx = document.getElementById("augusto-chart");
  let data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "SKILLZ",
        backgroundColor: [
            'rgba(254, 230, 75, 0.4)'
        ],
        borderColor: [
            'rgba(254, 230, 75, 1)'
        ],
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
      }
    ]
  };
  let myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
      scale: {
        reverse: true,
        ticks: {
          beginAtZero: true
        }
      }
    }
  });
  let modal = $('#myModal');
  let modalButton = $(".modalButton");
  let span = $(".close");
/*
  $('a[href^="#"]').on('click',function (e) {
     e.preventDefault();

     var target = this.hash;
     var $target = $(target);

     $('#page-augusto').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
        window.location.hash = target;
    });
  })
*/

  $('a[href^="#"]').on('click', function(event) {
    let target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('#page-augusto').stop().animate({
          scrollTop: target.offset().top
      }, 500);
    }
  });

  modalButton.click(function(e) {
    modal.addClass('show-modal');
    fillModal(e);
  });

  span.click(function() {
    modal.removeClass('show-modal');
  });


  $(window).click(function(e) {

    if($(e.target).hasClass("menu-item")){
      toggleOverlayer();
    }
    if (e.target == modal[0]) {
      modal.removeClass('show-modal');
    }
  })

  function fillModal(e){
    let originalModalInfo= e.target.parentNode.parentNode.parentNode;
    let modalInfo= $(originalModalInfo).clone();
    $(".modal-content").empty();
    $(".modal-content").append(modalInfo);
  }

  function hideLoader(){
    let loader= $('.loader-overlayer');
    loader.addClass('hide-loader');
  }
});
