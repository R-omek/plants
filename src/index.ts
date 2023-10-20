import './styles.scss'
import { addFavicon } from './scripts/add-favicon'

addFavicon()

const projects = {
    garden: [
        {name: 'Garden care', description: 'Lorem Ipsum has been the industry', img: require('./assets/garden/1.png')},
        {name: 'Planting', description: 'Lorem Ipsum has been the industry', img: require('./assets/garden/2.png')},
        {name: 'Lawn care', description: 'Lorem Ipsum has been the industry', img: require('./assets/garden/3.png')},
        {name: 'Planting', description: 'Lorem Ipsum has been the industry', img: require('./assets/garden/4.png')},
        {name: 'Garden care', description: 'Lorem Ipsum has been the industry', img: require('./assets/garden/5.png')},
        {name: 'Planting', description: 'Lorem Ipsum has been the industry', img: require('./assets/garden/6.png')},
    ]
}

const PROJECT_IMG: NodeListOf<HTMLImageElement> = document.querySelectorAll('.projects__img')
const PROJECT_NAME = document.querySelectorAll('.projects__name')
const PROJECT_DESC = document.querySelectorAll('.projects__desc')

projects.garden.forEach((project, index) => {
    PROJECT_IMG[index].src = project.img
    PROJECT_NAME[index].innerHTML = project.name
    PROJECT_DESC[index].innerHTML = project.description
})
