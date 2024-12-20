import { Octokit } from "https://cdn.skypack.dev/@octokit/core"

const gridRepo = document.querySelector('.grid-projetos')

const octokit = new Octokit()

async function getApiGitHub() {
    try {
        if(localStorage.getItem("repositorios") === null) {
            const response = await octokit.request('GET /users/{owner}/repos', {
                owner: 'PedroJardel'
            })
            const data = response.data
            localStorage.setItem("repositorios", JSON.stringify(data))
        }

        const data = JSON.parse((localStorage.getItem("repositorios")))
        data.map(async repository => {
            if (repository.id == 812747836 || repository.id == 862012363 || repository.id == 831200470 || repository.id == 859944296 || repository.id == 812438880 || repository.id == 826509309 || repository.id == 656477178 || repository.id == 885820506) {
                const response = await octokit.request(`GET /repos/${repository.owner.login}/${repository.name}/languages`)
                const languages = response.data
                const languagesArray = Object.keys(languages)
                let project = document.createElement('a')
                project.classList.add('card-projeto')
                project.setAttribute('target', "_blank")
                project.setAttribute('href', repository.html_url.toString())

                project.innerHTML = `
            <div class="card-header">
            <h3 class="card-title poppins-extrabold">${repository.name}</h3>
            <span class="date-create poppins-regular">${new Date(repository.created_at).toLocaleDateString()}</span>
            </div>
            <h4 class="poppins-semibold">Tecnologias</h4>
            <div class="chips chips-${repository.id}"></div>`;
            gridRepo.appendChild(project)

            const chips = document.querySelector(`.chips-${repository.id}`)
            languagesArray.map(language => {
                const chip = document.createElement("span")
                chip.classList.add(`chip`, 'poppins-bold')
                chip.innerHTML = `${language}`
                chips.appendChild(chip)
            })
        }
        })
    }
    catch (error) {
        console.error('Erro', error.message || error)
    }
}

getApiGitHub()