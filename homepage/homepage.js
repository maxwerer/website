console.log('confirm')
const menu = document.querySelector('.menu')
            const close = document.querySelector('.close')
            const nav = document.querySelector('nav')

            menu.addEventListener('click', () => {
                nav.classList.add('open-nav')
            })//wenn man auf menu klickt wird die klasse open-nav hinzugefügt

            close.addEventListener('click', () => {
                nav.classList.remove('open-nav')
            })



//slide down to camiri entdecken

function slideFunction(){
  document.body.scrollTop = 877;
  document.documentElement.scrollTop = 877;
}






