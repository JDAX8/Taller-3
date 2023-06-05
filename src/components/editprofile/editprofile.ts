import styles from "./editeprofile.css"
import { dispatch } from "../../store/index";
import { navigate } from "../../store/action";
import { Screens } from "../../types/navigations";


export default class editprofile extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``;

                const containerg = this.ownerDocument.createElement("section")
                containerg.className = "big"

                const container = this.ownerDocument.createElement("section")
                container.className = "section1"
                containerg.appendChild(container)

                const css = this.ownerDocument.createElement("style")
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css)

                const tittle = this.ownerDocument.createElement("h2")
                tittle.innerText = "Edit your profile"
                container.appendChild(tittle)

                const titulo = this.ownerDocument.createElement("h3")
                titulo.innerText = "Write your new name"
                container.appendChild(titulo)

                const titulos = this.ownerDocument.createElement("input")
                titulos.placeholder = "Write your new name"
                titulos.type = "text"
                this.shadowRoot?.appendChild (titulos);
                container.appendChild(titulos)
                
                const gameprofesion = this.ownerDocument.createElement("h3")
                gameprofesion.innerText = "Write your game profesion"
                container.appendChild(gameprofesion)

                const gameprofesions = this.ownerDocument.createElement("input")
                gameprofesions.placeholder = "Write your game profesion"
                gameprofesions.type = "text"
                this.shadowRoot?.appendChild (gameprofesions);
                container.appendChild(gameprofesions)

                const desc = this.ownerDocument.createElement("h3")
                desc.innerText = "Write your profile description"
                container.appendChild(desc)

                const descs = this.ownerDocument.createElement("input")
                descs.placeholder = "Write your profile description"
                descs.type = "text"
                this.shadowRoot?.appendChild (descs);
                container.appendChild(descs)

                const subtittle = this.ownerDocument.createElement("h3")
                subtittle.innerText = "Write or paste your profile picture URL HERE"
                container.appendChild(subtittle)

                const url = this.ownerDocument.createElement("input")
                url.placeholder = "Paste URL HERE"
                url.type = "url"
                this.shadowRoot?.appendChild (url);
                container.appendChild(url)


                const button = this.ownerDocument.createElement("button");
                button.innerText = "Update your profile"
                button.addEventListener("click", () =>{
                        dispatch(navigate(Screens.DASHBOARD))
                    } )
                container.appendChild(button)
                
                this.shadowRoot?.appendChild(containerg)
            }
        }
    }
    
customElements.define("app-editprofile", editprofile);