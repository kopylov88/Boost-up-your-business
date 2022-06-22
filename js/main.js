$(function(){
    $('.slider').slick({
      
     dots: true,
     fade: true
    });
});


let hamb = document.querySelector('.hamb');
let hambPopup = document.querySelector('.hamb-popup');
let body = document.body
hamb.addEventListener('click', function(){
  hambPopup.classList.toggle('open');
  hamb.classList.toggle('clicked');
  body.classList.toggle('noscroll');
})

const anchors = document.querySelectorAll('a.scroll-to')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
      e.preventDefault()
      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = document.querySelector('.nav').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;
      if (window.screen.width <= 767.9){
        window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    })
    }else{
      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
    })
    } 
  })
}

const hambLinks = document.querySelectorAll('.hamb-link')
for(let hambLink of hambLinks){
  hambLink.addEventListener('click', function(){
      hambPopup.classList.toggle('open');
      hamb.classList.toggle('clicked');
      body.classList.toggle('noscroll');
  })    
}

wow = new WOW(
  {
  boxClass: 'wow',      
  animateClass: 'animated', 
  offset: 0,          
  mobile: false,       
  live: true        
  }
)
  wow.init();
