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

    if(target.filter('.kate', '.menu-item')){
      $('.menu-overlayer.kate').toggleClass('open');
    }else if(target.filter('.john', '.menu-item')){
      $('.menu-overlayer.john').toggleClass('open');
    }
  }

  function bodyNoScroll() {
    $('body').toggleClass('no-scroll')
  }

  var ctxK = document.getElementById("kate-chart");

  var ctxJ = document.getElementById("john-chart");

  var projectsSection=$('.projects-wrapper');
  var projectsSectionHeight = projectsSection.height();
  var initHeight;

  $(window).resize(function() {
    resizeWorkSection()
  })

  resizeWorkSection()

  function resizeWorkSection(){

    if($( window ).width()<680){
      initHeight= "1300px";
    }else{
      initHeight= "1200px";
    }
    projectsSection.css('height', initHeight);
  }

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

    if (target.hasClass('kate')){
      var projectsSectionAugs= $('.projects-wrapper.kate');
      extendSection(projectsSectionAugs, target)
    }else{
      var projectsSectionJohn= $('.projects-wrapper.john');
      extendSection(projectsSectionJohn, target)
    }
  }

  function extendSection(sectionToOpen, target){
    //if the button is clicked for the first time and there are more than 8 projects (equal to 2100px), show 4 more projects
    if(sectionToOpen.css('height') == initHeight && projectsSectionHeight > 2100){

      if(initHeight=='1300px'){
        sectionToOpen.css('height', "2600px");
      }else{
        sectionToOpen.css('height', "2100px");
      }
    }else{
    //if the button is clicked again and there are no more projects to show, the button disappears
      sectionToOpen.css('height', projectsSectionHeight+"px")
      setTimeout(hideWorkButton, 200, target);
    }
  }

  function hideWorkButton(target) {
    if (target.hasClass('kate')){
      target.css({'display':'none', 'opacity': '0'});
    }else{
      target.css({'display':'none', 'opacity': '0'});
    }
  }

  var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        // label: "SKILLS",
        backgroundColor: [
          'rgba(159, 148, 247, .5)'
        ],
        borderColor: [
          'rgba(159, 148, 247, .5)'
        ],
        borderWidth: 1,
        data: [6, 9, 7, 8, 7, 6, 7],
      }
    ]
  };

  var chartKate = new Chart(ctxK, {
    type: 'line',
    data: data,
    options: {
      legend: {
        display: false,
          labels: {
            display: false
          }
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
          fontColor: '9f94f7'
        }
      }
    }
  });

  var chartJohn = new Chart(ctxJ, {
    type: 'line',
    data: data,
    options: {
      legend: {
        display: false,
          labels: {
            display: false
          }
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
          fontColor: '9f94f7'
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

      $('#page-kate').stop().animate({
        scrollTop: target[0].offsetTop
      }, 900);

      $('#page-john').stop().animate({
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
    //get modal info depending on which button I clicked
    var originalModalInfo= e.target.parentNode.parentNode.parentNode.parentNode;
    var modalInfo= $(originalModalInfo).clone();
    var additionalInfo= "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa.</p>";
    console.log(e.target);
    $(".modal-content").empty();
    $(".modal-content").append(modalInfo);
    $('.modal-content .info-wrapper').append(additionalInfo);
  }

  function hideLoader(){
    var loader= $('.loader-overlayer');
    loader.addClass('hide-loader');
  }
});
