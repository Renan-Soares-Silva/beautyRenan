/* abrir e fechar o meno com o click*/

const nav= document.querySelector('#header nav')
const toggle= document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function (){
        nav.classList.toggle('show')
    })
}

/* ao clicar num item do menu, o menu esconde*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* sombra no header quando scrroll*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if(window.scrollY >= navHeight){
    header.classList.add('scroll') 

  } else { 
        header.classList.remove('scroll')

  }
}

window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
})
/*SWIPER carroçel */


const swiper = new Swiper('.swiper', {
  // Optional parameters
slidesPerView: 1,
pagination: {
  el: '.swiper-pagination'
  },
  mousewheel: true,
  Keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2, 
      setWrapperSize:true
    }
  }
})

// scroll reveal 
 
const scrollReveal = ScrollReveal ({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
`#home .text, #home .image, 
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links,
footer .brand, footer .icons
`, 
{interval: 100 }
)

//back to top 

const backToTopButton = document.querySelector('.back-to-top')

function backToTop(){

  if (this.window.scrollY >= 560){
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
       
}

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCrurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <=sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']' )
      .classList.add('active')
    } else {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']' )
    .classList.remove('active')

    }

  }



}



window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCrurrentSection()
})


