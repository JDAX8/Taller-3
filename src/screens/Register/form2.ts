import styles from "./register.css"
import  { att } from "../../components/btnregis/buttonregis";
import "../../components/export"
import { dispatch } from "../../store/index";
import { navigate } from "../../store/action";
import { Screens } from "../../types/navigations";


export class FormReg extends HTMLElement {
    
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

                const register = this.ownerDocument.createElement("h1")
                register.innerText = "Register"
                container.appendChild(register)

                const img = this.ownerDocument.createElement("img")
                img.src="../../../src/pics/Logito.png"
                img.className = "img"
                container.appendChild(img)

                const mini = this.ownerDocument.createElement("section")
                    mini.className = "section3"
                    containerg.appendChild(mini)

                const ima = this.ownerDocument.createElement("img")
                ima.src="../../../src/pics/counter-strike-2.png"
                ima.className = "banner"
                mini.appendChild(ima)
            
                const yourname = this.ownerDocument.createElement("but-regis")
                yourname.setAttribute(att.placeholder, "Your name")
                yourname.setAttribute(att.type, "user")
                container.appendChild(yourname)

                const email = this.ownerDocument.createElement("but-regis")
                email.setAttribute(att.placeholder, "Your e-mail")
                email.setAttribute(att.type, "email")
                container.appendChild(email)

                const password = this.ownerDocument.createElement("but-regis")
                password.setAttribute(att.placeholder, "password")
                password.setAttribute(att.type, "password")
                container.appendChild(password)

                const confirmpassword = this.ownerDocument.createElement("but-regis")
                confirmpassword.setAttribute(att.placeholder, "Confirm password")
                confirmpassword.setAttribute(att.type, "password")
                container.appendChild(confirmpassword)

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
    
customElements.define("app-register", FormReg);