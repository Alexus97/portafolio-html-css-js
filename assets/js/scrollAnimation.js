//  ===> SCROLL ANIMATION <=== //
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, //Animation repeat
})

sr.reveal(`.perfil, .contact__form`)
sr.reveal(`.info`, {origin: 'left', deley: 800})
sr.reveal(`.skills`, {origin: 'left', deley: 1000})
sr.reveal(`.about`, {origin: 'right', deley: 1200})
sr.reveal(`.projects__card, .services__card, .experience__card`, {interval: 100})
