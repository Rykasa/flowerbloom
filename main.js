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
});

//ScrollReveal
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  .section-1,
  .section-1-img,
  .section-2,
  .section-2 .card,
  .section-3,
  .section-3 .testimonials,
  .section-3 .brands-heading,
  .section-3 .banner,
  .section-4 .section-subheading,
  .section-4 .section-heading,
  .section-4 .section-4-paragraph,
  .section-4 .section-4-img,
  .section-5 .section-heading,
  .section-5 .address,
  .section-5 .email,
  .section-5 .contact-btn,
  .section-5 .contact-img
`)
