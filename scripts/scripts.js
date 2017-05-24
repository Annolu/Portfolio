$(document).ready(function() {

  var burger= $('.burger-container');

  burger.click(openMenu);

  function openMenu() {
    animateBurger();
    showOverlayer();
    bodyNoScroll();
    scaleBody();
  }

  function animateBurger(){
    burger.toggleClass('open');
  }

  function showOverlayer() {
    let menuOverlayer= $('.menu-overlayer');
    menuOverlayer.toggleClass('open');
  }

  function bodyNoScroll() {
    let body= $('body');
    body.toggleClass('no-scroll')
  }

  function scaleBody() {
    let pageContent= $('.page-content');
    pageContent.toggleClass('scale-content');
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
});
