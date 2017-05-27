$(document).ready(function() {

  setInterval(hideLoader, 500)

  let burger= $('.burger-container');

  burger.click(openMenu);

  function openMenu() {
    animateBurger();
    toggleOverlayer();
    bodyNoScroll();
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

  let listOfDates= $('.projects-wrapper');
  let workSectionHeight = listOfDates.height();
  let initHeight = "1050px";
  let buttonViewMore= $(".buttons");

  listOfDates.css('height', initHeight);


  buttonViewMore.click(loadMoreWorks);

  function loadMoreWorks(){
    $('.work-loader-wrapper').css('opacity', '1');

    setTimeout(function(){
      $('.work-loader-wrapper').css('opacity', '0');
      if(listOfDates.css('height') == initHeight && workSectionHeight > 2100){
        listOfDates.css('height', "2100px")
      }else{
        console.log('dentro');
        listOfDates.css('height', workSectionHeight+"px")
        buttonViewMore.css('visibility', 'hidden');
        setTimeout(function(){buttonViewMore.css({'opacity':'0', 'display': 'none'})}, 800)
      }
    }, 800);
  }

  let data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "SKILLZ",
        backgroundColor: [
          'rgba(254, 230, 76, 0.8)'
        ],
        borderColor: [
          'rgba(254, 230, 76, 1)'
        ],
        borderWidth: 1,
        data: [6, 9, 7, 8, 7, 6, 7],
      }
    ]

  };
  let myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
      legend: {
          position: "bottom"
      },
      scale: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 10,
          stepSize: 2
        },
        pointLabels: {
          fontSize: 14,
          fontColor: '797878'
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

     let target = this.hash;
     let $target = $(target);

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
