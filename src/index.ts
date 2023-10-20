import './styles.scss'
import { addFavicon } from './scripts/add-favicon'

addFavicon()


const PROJECTS_BTNS = document.querySelectorAll('.projects__btn')
const PROJECTS_ITEMS: NodeListOf<HTMLDivElement> = document.querySelectorAll('.projects__item')

PROJECTS_BTNS.forEach(btn => {
    btn.addEventListener('click', function(this: HTMLButtonElement) {
        blurProjects(this)
    })
})

function blurProjects(target: HTMLButtonElement) {
    PROJECTS_ITEMS.forEach(item => {
        const isGarden = item.children[1].textContent?.split(' ')[0] === 'Garden'
        const isSameProject = item.children[1].textContent?.split(' ')[0].toLowerCase() === target.textContent?.toLowerCase()
        item.classList.remove('blur-scale')
        toggleProjectsBtn(target)
        if (target.textContent === 'Gardens') {
            if (!isGarden) {
                item.classList.add('blur-scale')
            }
        } else {
            item.classList.remove('blur-scale')
            if (!isSameProject) {
                item.classList.add('blur-scale')
            }
        }

        item.addEventListener('click', resetProjectItem)
    })
}

function resetProjectItem(this: HTMLDivElement) {
    this.classList.remove('blur-scale')
}

function toggleProjectsBtn(target: HTMLButtonElement) {
    PROJECTS_BTNS.forEach(btn => btn.classList.remove('active'))
    target.classList.add('active')
}
