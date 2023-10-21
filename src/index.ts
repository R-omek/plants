import './styles.scss'
import { addFavicon } from './scripts/add-favicon'

const HEADER_LOGO = document.querySelector('.header__logo')
HEADER_LOGO?.addEventListener('click', () => navigateHome())

addFavicon()
//TODO: uncomment
// navigateHome()

function navigateHome() {
    window.scrollTo(0, 0);
    document.querySelectorAll('.nav__item').forEach((item, index) => index === 0 
    ? item.classList.add('active') 
    : item.classList.remove('active'))
}

// Toggle nav items active class
const NAV_ITEMS: NodeListOf<HTMLLIElement> = document.querySelectorAll('.nav__item')
function toggleNavItem() {
    NAV_ITEMS.forEach((item: HTMLLIElement) => {
        item.addEventListener('click', () => {
            removeNavActive()
            item.classList.add('active')
        })
    })
}
function removeNavActive() {
    NAV_ITEMS.forEach(item => item.classList.remove('active'))
}
toggleNavItem()

// Projects animation
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

// Prices animation

const PRICE_SELECTS: NodeListOf<HTMLDivElement> = document.querySelectorAll('.prices__select')

PRICE_SELECTS.forEach((select: HTMLDivElement) => {
    select.addEventListener('click', () => {
        PRICE_SELECTS.forEach(sel =>  {
            sel.classList.contains('opened') ? sel.children[0].replaceChild(toggledPriceArrow(sel), sel.children[0].children[1]) : null
            select === sel ? null : sel.classList.remove('opened')
        })
        select.children[0].replaceChild(toggledPriceArrow(select), select.children[0].children[1])
        select.classList.toggle('opened')
    })
})

function toggledPriceArrow(select: HTMLDivElement) {
    const div = document.createElement('div')
    const openedArrow = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" transform="rotate(-180 8 8)" fill="#AEA1A1"/>
            <path d="M7.99997 7.00003L9.99998 8.99992" stroke="white" stroke-width="0.5" stroke-linecap="round"/>
            <path d="M8 7L6 9" stroke="white" stroke-width="0.5" stroke-linecap="round"/>
        </svg>   
    `
    const closedArrow = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill="#D9D9D9"/>
            <path d="M8.00003 8.99997L6.00002 7.00008" stroke="#717171" stroke-width="0.5" stroke-linecap="round"/>
            <path d="M8 9L10 7" stroke="#717171" stroke-width="0.5" stroke-linecap="round"/>
        </svg>
    `
    if (select.classList.contains('opened')) {
        div.innerHTML = closedArrow
    } else {
        div.innerHTML = openedArrow
    }
    return div.children[0]
}

// Contact us dropdown

