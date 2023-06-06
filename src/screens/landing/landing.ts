import styles from "./landing.css"
import "../../components/export"
import "../../components/buttonlanding2/buttonlogin"
import "../../components/buttonlanding/buttonlanding"
import { dispatch } from "../../store/index";
import { Navigate } from "../../store/actions";
import { Screens } from "../../types/store";

export class LandReg extends HTMLElement {
    
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

                const container = this.ownerDocument.createElement("section")
                container.className = "section1"
                
                const logo = this.ownerDocument.createElement("img")
                logo.src= '../../../src/pics/Logito.png'
                logo.className = "img"
                container.appendChild(logo)

                const register = this.ownerDocument.createElement("h1")
                register.innerText = "WELCOME"
                container.appendChild(register)


                const button = this.ownerDocument.createElement("btn-accoun");
                button.addEventListener("click", () =>{
                button.className="btn-signup"
                    dispatch(Navigate(Screens.REGISTER))
                } )
                container.appendChild(button)
            
                 

                 const but = this.ownerDocument.createElement("button-log");
                 but.className="but"
                 but.addEventListener("click", () =>{
                    dispatch(Navigate(Screens.LOGIN))
                } )
                 container.appendChild(but)

                this.shadowRoot?.appendChild(container)
                
                const css = this.ownerDocument.createElement("style")
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css)   
            }
        }
    }
customElements.define("app-landing", LandReg);