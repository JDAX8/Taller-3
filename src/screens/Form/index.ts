import styles from "./section1.css"
import "../../components/export"
import { pdata } from "../../mocks/Databtn";
import { Attribut } from "../../components/btn/buttons";
import  { attr } from "../../components/butemailandpass/emailandpass";
import "../../components/buttonlogin/buttlogin"
import "../../components/butemailandpass/emailandpass"
import { dispatch } from "../../store/index";
import { navigate } from "../../store/action";
import { Screens } from "../../types/navigations";




export class FormLog extends HTMLElement {
    
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

                const all = this.ownerDocument.createElement("section")
                all.className="all"

                const containerg = this.ownerDocument.createElement("section")
                containerg.className = "big"
                

                const container = this.ownerDocument.createElement("section")
                container.className = "section1"
                const css = this.ownerDocument.createElement("style")
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css)
                containerg.appendChild(container)
                

                const Login = this.ownerDocument.createElement("h1")
                Login.innerText = "Log In"
                container.appendChild(Login)

                const Check = this.ownerDocument.createElement("h2")
                Check.innerText = "Check your followers' new plays"
                container.appendChild(Check)

                const logo = this.ownerDocument.createElement("img")
                logo.src="../../../src/pics/Logito.png"
                logo.className = "logo"
                container.appendChild(logo)


                // pdata.forEach((dat) => {
                //     const buttonsess = this.ownerDocument.createElement("btn-sec");          
                //     buttonsess.setAttribute(Attribut.name, dat.name)
                //     container.appendChild(buttonsess)
                // })
      
                const email = this.ownerDocument.createElement("email-pass")
                
                container.appendChild(email)
                
                const sec = this.ownerDocument.createElement("section")
                sec.className = "section2"
                this.shadowRoot?.appendChild(containerg)

                containerg.appendChild(sec)

                const banner = this.ownerDocument.createElement("img")
                banner.src="../../../src/pics/BannerLogin.png"
                banner.className = "banner"
                sec.appendChild(banner)

                 const Notregis = this.ownerDocument.createElement("h5")
                 Notregis.innerText = "Not registered yet?"
                 Notregis.className = "Notregis"
                 container.appendChild(Notregis)

                 const Notaccount = this.ownerDocument.createElement("h5")
                 Notaccount.innerText = "Create an Account"
                 Notaccount.className = "Notaccount"
                 container.appendChild(Notaccount)
                 Notaccount.addEventListener("click", () =>{
                 Notaccount.className="btn-signup"
                    dispatch(navigate(Screens.REGISTER))
                } )
                 
                
            }
        }
    }
    
customElements.define("app-login", FormLog);
