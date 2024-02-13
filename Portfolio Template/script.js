const togglemenu = document.getElementById('menu');
const closemenu = document.getElementById('close');
const navigation = document.getElementById('nav-bar');

if(togglemenu){
    togglemenu.addEventListener('click', ()=>{
        navigation.classList.add('active');
    })
}

if(closemenu){

    closemenu.addEventListener('click', ()=>{
        navigation.classList.remove('active');
    })
}




const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;  // Get viewport height
  const scrollTop = window.pageYOffset;     // Get current scroll position

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    // Check if section is within the viewport (or partially visible)
    if (sectionTop <= scrollTop + windowHeight && sectionBottom >= scrollTop) {
      section.style.opacity = 1;
      section.style.transform = 'translateX(0)';
    } else {
      // Fade out and move off-screen when scrolled away
      section.style.opacity = 0;
      section.style.transform = 'translateX(-50px)';
    }
  });
});