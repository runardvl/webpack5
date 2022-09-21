import Comp from './image-devices.png'
import './comp-image.scss'

class CompImage {
    render() {
        const img = document.createElement('img')
        img.src = Comp
        img.alt = 'devices image'
        img.classList.add('comp-image')

        const bodyDomElement = document.querySelector('body')
        bodyDomElement.appendChild(img)
    }
}

export default CompImage;