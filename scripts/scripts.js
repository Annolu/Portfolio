$(document).ready(function() {

  let burger= $('.burger-container');

  burger.click(openMenu);

  function openMenu() {
    animateBurger();
    toggleOverlayer();
    bodyNoScroll();
    scaleBody();
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

  function scaleBody() {
    $('.page-content').toggleClass('scale-content');
  }

  let ctx = document.getElementById("myChart");
  let data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
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


  // $(document).on('click', 'a', function(event){
  //   event.preventDefault();
  //
  //   $('html, body').animate({
  //       scrollTop: $( $.attr(this, 'href') ).offset().top
  //   }, 500);
  // });

  $('li a[href^="#"]').on('click',function (e) {
     e.preventDefault();

     var target = this.hash;
     var $target = $(target);
    //  console.log($target.offset().top);

     $('html, body').stop().animate({
         'scrollTop': $target.offset().top
     }, 900, 'swing', function () {
         window.location.hash = target;
     });
  })

  modalButton.click(function(e) {
    modal.addClass('show-modal');
    // modal.css("opacity","1");
    // modal.css("visibility","visible");
    fillModal(e);
  });

  span.click(function() {
    // hideModal()
    modal.removeClass('show-modal');
  });


  $(window).click(function(e) {

    if($(e.target).hasClass("menu-item")){
      toggleOverlayer();
    }
    if (e.target == modal[0]) {
      // hideModal()
      modal.removeClass('show-modal');
    }
  })

  function fillModal(e){
    let originalModalInfo= e.target.parentNode.parentNode.parentNode;
    let modalInfo= $(originalModalInfo).clone();
    $(".modal-content").empty();
    $(".modal-content").append(modalInfo);
  }

  // function hideModal(){
  //   modal.css("opacity","0");
  //   modal.css("visibility","hidden");
  // }
});
