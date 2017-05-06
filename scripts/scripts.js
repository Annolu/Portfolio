var burger= document.getElementById('burgerContainer');

burger.addEventListener('click', openMenu);

function openMenu() {
  animateBurger();
  showOverlayer();
  bodyNoScroll();
  scaleBody();
}

function animateBurger(){
  if(burger.classList.contains('open')){
    burger.classList.remove('open');
  }else{
    burger.classList.add('open');
  }
}

function showOverlayer() {
  let menuOverlayer= document.getElementById('menuOverlayer');

  if(menuOverlayer.classList.contains('open')){
    menuOverlayer.classList.remove('open');
  }else{
    menuOverlayer.classList.add('open');
  }
}

function bodyNoScroll() {
  let body= document.getElementsByTagName('body')[0];

  if(body.classList.contains('no-scroll')){
    body.classList.remove('no-scroll');
  }else{
    body.classList.add('no-scroll');
  }
}

function scaleBody() {
  let pageContent= document.getElementById('pageContent');

  if(pageContent.classList.contains('scale-content')){
    pageContent.classList.remove('scale-content');
  }else{
    pageContent.classList.add('scale-content');
  }
}
