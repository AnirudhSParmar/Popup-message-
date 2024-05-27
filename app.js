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