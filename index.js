const items = document.querySelector('.tecnologias--items')
const logos = items.children

const cards = document.querySelectorAll('.tecnologias--item')

const logosArray = Array.from(logos)
const cardsArray = Array.from(cards)

logosArray.map(logo => {
    logo.addEventListener('mouseenter', () => {
        cardsArray.map(card => {
             if (logo.id.includes(card.id)) {
                card.classList.remove('hidden')
             } else {
                card.classList.add('hidden')
             }
        })
    })
})