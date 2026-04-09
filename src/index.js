import "./styles.css";
import { createHome } from "./home.js";
import { createAbout } from "./about.js"
import { createMenu } from "./menu.js"

class Restaurant {
    constructor() {
        this.container = document.querySelector('#container')
        this.init()
    }
    

    home() {
        this.container.innerHTML = ''
        this.container.appendChild(createHome())
    }

    menu () {
        this.container.innerHTML = ''
        this.container.appendChild(createMenu())
    }

    about () {
        this.container.innerHTML = ''
        this.container.appendChild(createAbout())
    }

    init() {
        this.home()
        console.log('hello world')

        document.querySelector('header').addEventListener('click', (e) => {
            const id = e.target.id;
            switch(id) {
                case 'nav-home' :
                    this.home()
                    return

                case 'nav-menu':
                    this.menu()
                    return
                case 'nav-about':
                    this.about()
                    return
            }
        });
    }
}

const rest = new Restaurant()