import styles from "./register.css"
import  { att } from "../../components/btnregis/buttonregis";
import "../../components/export"
import { dispatch } from "../../store/index";
import { navigate } from "../../store/action";
import { Screens } from "../../types/navigations";


export class createpost extends HTMLElement {
    
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

                const tittle = this.ownerDocument.createElement("h1")
                tittle.innerText = "Crea una nueva publicación"
                container.appendChild(tittle)

                const subtittle = this.ownerDocument.createElement("h1")
                subtittle.innerText = "Arrastra las fotos o videos aquí"
                container.appendChild(subtittle)


                const button = this.ownerDocument.createElement("btn-account");
                button.addEventListener("click", () =>{
                    button.className="btn-signup"
                        dispatch(navigate(Screens.DASHBOARD))
                    } )
                container.appendChild(button)
                
                this.shadowRoot?.appendChild(containerg)
        

            }
        }
    }
    
customElements.define("create-post", createpost);