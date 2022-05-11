//Open navbar
const openMenuBtn = document.querySelector('.open-menu');
const navbar = document.querySelector('.navbar')
const menuLinks = document.querySelectorAll('.menu-link')
const menuContactBtn = document.querySelector('.menu .contact-btn')
const backToTopBtn = document.querySelector('.back-to-top-btn')

const showNavbar = () =>{
  if(scrollY > 0){
    navbar.classList.add('scroll')
  }else{
    navbar.classList.remove('scroll')
  }
}

const showBackToTopButton = () =>{
  if(scrollY > 550){
    backToTopBtn.classList.add('change')
  }else{
    backToTopBtn.classList.remove('change')
  }
}

function onScroll(){
  showNavbar()
  showBackToTopButton()
}

onScroll()

menuLinks.forEach(link =>{
  link.addEventListener('click', () =>{
    document.body.classList.remove('menu-expanded')
  })
})

menuContactBtn.addEventListener('click', () =>{
  document.body.classList.remove('menu-expanded')
})

openMenuBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('menu-expanded')
})

window.addEventListener('scroll', onScroll)

//Swiper
const swiper = new Swiper('.swiper-container', {

  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
  // And if we need scrollbar
});
