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
    body.toggleClass('no-scoll')
  }

  function scaleBody() {
    let pageContent= $('.page-content');
    pageContent.toggleClass('scale-content');
  }
});
