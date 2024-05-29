const showLogin = document.querySelector('#show-login')
showLogin.addEventListener('click', () => {
    const popUp = document.querySelector('.popup')

    popUp.classList.add('active')
})

const closeBtn = document.querySelector('.popup .close-btn')
closeBtn.addEventListener('click', () => {
    const popUp = document.querySelector('.popup')

    popUp.classList.remove('active')
})

// login and the popup content are separated.
// we applied onclick on login btn and then got the element popup and added class active.
// when clicked on close btn we removed that class.