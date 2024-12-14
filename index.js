const items = document.querySelector('.tecnologias--items')
const logos = items.children

const cards = document.querySelectorAll('.tecnologias--item')

const logosArray = Array.from(logos)
const cardsArray = Array.from(cards)

const chipsSoft = document.querySelector('.chipsSoft')
const chipsHard = document.querySelector('.chipsHard')

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

const dataChipSoftSkills = [
    { key: "organizacao", value: "organização" },
    { key: "comunicacao_assertiva", value: "comunicação assertiva" },
    { key: "gestao", value: "gestão" },
    { key: "trabalho_em_equipe", value: "trabalho em equipe" },
    { key: "melhoria_continua", value: "melhoria contínua" },
    { key: "blitzscaling", value: "blitzscaling" },
    { key: "resolucao_de_problemas", value: "resolução de problemas" },

]

const dataChipHardSkills = [
    { key: "sql", value: "sql" },
    { key: "nosql", value: "nosql" },
    { key: "lean_inception", value: "lean inception" },
    { key: "arquitetura_de_software", value: "arquitetura de software" },
    { key: "aws", value: "aws" },
    { key: "rest_api", value: "rest api" },
    { key: "jest", value: "jest" }
]

const forChips = (object) => {
    object.forEach(item => {
        const chip = document.createElement("div")
        chip.classList.add("chip", "poppins-semibold")
        chip.innerHTML = `${item.value}`

        if (object === dataChipSoftSkills) {
            chipsSoft.appendChild(chip)
        } else {
            chipsHard.appendChild(chip)
        }
    })
}

forChips(dataChipSoftSkills)
forChips(dataChipHardSkills)
