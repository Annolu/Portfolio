$(document).ready(function() {

  setInterval(hideLoader, 200);

  var burger= $('.burger-container');
  var event;
  burger.bind('click', { param: event }, openMenu)

  function openMenu(event) {
    var targetBurger= $(event.target);
    toggleOverlayer(targetBurger);
    bodyNoScroll();
  }

  function toggleOverlayer(target) {

    if(target.filter('.augusto', '.menu-item')){
      $('.menu-overlayer.augusto').toggleClass('open');
    }else if(target.filter('.noemi', '.menu-item')){
      $('.menu-overlayer.noemi').toggleClass('open');
    }
  }

  function bodyNoScroll() {
    $('body').toggleClass('no-scroll')
  }

  var ctxA = document.getElementById("augusto-chart");

  var ctxN = document.getElementById("noemi-chart");

  var projectsSection=$('.projects-wrapper');
  var projectsSectionHeight = projectsSection.height();
  var initHeight = "1050px";
  var buttonViewMore= $(".buttons");

  projectsSection.css('height', initHeight);

  buttonViewMore.click(showWorkLoader);

  //show loader in work-button, for 800ms only
  function showWorkLoader(e){
    var target= $(e.target);
    $('.work-loader-wrapper').css('transform','rotateX(0deg)');
    setTimeout(showMoreWorks, 800, target);
  }

  function showMoreWorks(target){
    //hide loader in work-button
    $('.work-loader-wrapper').css('transform','rotateX(90deg)');

    if (target.hasClass('augusto')){
      var projectsSectionAugs= $('.projects-wrapper.augusto');
      extendSection(projectsSectionAugs, target)
    }else{
      var projectsSectionNoe= $('.projects-wrapper.noemi');
      extendSection(projectsSectionNoe, target)
    }
  }

  function extendSection(sectionToOpen, target){
    //if the button is clicked for the first time and there are more than 8 projects (equal to 2100px), show 4 more projects
    if(sectionToOpen.css('height') == initHeight && projectsSectionHeight > 2100){
      sectionToOpen.css('height', "2100px")
    }else{
    //if the button is clicked again and there are no more projects to show, the button disappears
      sectionToOpen.css('height', projectsSectionHeight+"px")
      setTimeout(hideWorkButton, 200, target);
    }
  }

  function hideWorkButton(target) {
    if (target.hasClass('augusto')){
      target.css({'display':'none', 'opacity': '0'});
    }else{
      target.css({'display':'none', 'opacity': '0'});
    }
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

  var chartAugusto = new Chart(ctxA, {
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

  var chartNoemi = new Chart(ctxN, {
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

      $('#page-noemi').stop().animate({
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
      toggleOverlayer(target);
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
