var burger= document.getElementById('burgerContainer');
var menuOverlayer= document.getElementById('menuOverlayer');
var pageContent= document.getElementById('pageContent');
var body= document.getElementsByTagName('body')[0];


burger.addEventListener('click', animateBurger);

function animateBurger() {
  if(this.classList.contains('open')){
    this.classList.remove('open');
  }else{
    this.classList.add('open');
  }

  if(menuOverlayer.classList.contains('open')){
    menuOverlayer.classList.remove('open');
  }else{
    menuOverlayer.classList.add('open');
  }

  if(body.classList.contains('no-scroll')){
    body.classList.remove('no-scroll');
  }else{
    body.classList.add('no-scroll');
  }

  if(pageContent.classList.contains('scale-content')){
    pageContent.classList.remove('scale-content');
  }else{
    pageContent.classList.add('scale-content');
  }
}
