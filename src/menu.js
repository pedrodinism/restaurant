export function createMenu() {
    const divMenu = document.createElement('div')
    divMenu.id = 'divMenu'

    const span0 = document.createElement('span')
    span0.textContent = 'CHEF MENU'
    span0.id = 'menuTitle'
    divMenu.appendChild(span0)

    const span1 = document.createElement('span')
    span1.textContent = 'CARPACCIO DE LIRIO'
    divMenu.appendChild(span1)

    const span2 = document.createElement('span')
    span2.textContent = 'ARROZ DE BORREGO'
    divMenu.appendChild(span2)

    const span3 = document.createElement('span')
    span3.textContent = 'CAFÉ COM CHEIRINHO'
    divMenu.appendChild(span3)

    return divMenu
}