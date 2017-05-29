$(document).ready(function() {

  setInterval(hideLoader, 500);

  var burgerAugusto= $('#burger-augusto');

  burgerAugusto.click(openMenu);

  function openMenu() {
    console.log('fuck you , fuck you hard');
    toggleOverlayer();
    bodyNoScroll();
  }

  function toggleOverlayer() {
    $('.menu-overlayer').toggleClass('open');
  }

  function bodyNoScroll() {
    $('body').toggleClass('no-scroll')
  }

  var ctx = document.getElementById("augusto-chart");

  var projectsSection= $('.projects-wrapper');
  var projectsSectionHeight = projectsSection.height();
  var initHeight = "1050px";
  var buttonViewMore= $(".buttons");

  projectsSection.css('height', initHeight);


  buttonViewMore.click(loadMoreWorks);

  //show loader in work-button, for 800ms only
  function loadMoreWorks(){
    $('.work-loader-wrapper').css('transform','rotateX(0deg)');
    setTimeout(showWorkLoader, 800);
  }

  function showWorkLoader(){
    //hide loader in work-button
    $('.work-loader-wrapper').css('transform','rotateX(90deg)');
    //if the button is clicked for the first time and there are more than 8 projects (2100px), show 4 more projects
    if(projectsSection.css('height') == initHeight && projectsSectionHeight > 2100){
      projectsSection.css('height', "2100px")
    }else{
    //if the button is clicked for a second time and there are no more projects to show, the button disappears
      projectsSection.css('height', projectsSectionHeight+"px")
      setTimeout(hideWorkButton, 200);
    }
  }

  function hideWorkButton() {
    buttonViewMore.css({'display':'none'});
    buttonViewMore.css('opacity','0');
  }

  var data = {
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

  var myRadarChart = new Chart(ctx, {
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

  var modal = $('#myModal');
  var modalButton = $(".modalButton");
  var span = $(".close");

  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));

    if(target.length) {
      event.preventDefault();

      $('#page-augusto').stop().animate({
        scrollTop: target[0].offsetTop
      }, 900);
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

    var target= $(e.target);

    if(target.hasClass("menu-item") || target.hasClass("menu-overlayer")){
      toggleOverlayer();
    }

    if (e.target == modal[0]) {
      modal.removeClass('show-modal');
    }
  })

  function fillModal(e){
    var originalModalInfo= e.target.parentNode.parentNode.parentNode;
    var modalInfo= $(originalModalInfo).clone();
    $(".modal-content").empty();
    $(".modal-content").append(modalInfo);
  }

  function hideLoader(){
    var loader= $('.loader-overlayer');
    loader.addClass('hide-loader');
  }
});
