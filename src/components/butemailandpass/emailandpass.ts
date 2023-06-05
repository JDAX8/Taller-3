import styles from "./input.css"
import Firebase from "../../utils/firebase"
import { dispatch } from "../../store";
import { navigate } from "../../store/action";
import { Screens } from "../../types/navigations";

const Valuser = {
    email:"",
    password: "",
};
export enum attr {
    "placeholder" = "placeholder",
    "type" = "type",
}

  class emailandpass extends HTMLElement{
    placeholder?: string;
    type?: string;


static get observedAttributes() {
    const attr: Record<attr,null> ={

        placeholder: null,
        type: null,

    };
    return Object.keys(attr);
}


attributeChangedCallback(
    propName: attr,
    _: string | undefined,
    newValue: string | undefined
    ) {
        switch (propName) {

            default:
            this[propName] = newValue;
            break;
        }
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        this.render();
    }

    async Funfire(){
        await Firebase.Userlogin(Valuser)
    }


    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML= "";

            const css = this.ownerDocument.createElement("style")
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css)

            const ema = this.ownerDocument.createElement("h4")
            ema.innerText = "Email"
            this.shadowRoot?.appendChild(ema)

            const log = this.ownerDocument.createElement("input")
            log.placeholder = "Email"
            log.type = "Email"
            
            log.addEventListener(
                "change",
                (e: any) => (Valuser.email = e.target.value)
              );
            this.shadowRoot?.appendChild(log)

            const pass = this.ownerDocument.createElement("h4")
            pass.innerText = "Password"
            this.shadowRoot?.appendChild(pass)

            const passw = this.ownerDocument.createElement("input")
            passw.placeholder = "Password"
            passw.type = "Password"
            passw.addEventListener(
                "change",
                (e: any) => (Valuser.password = e.target.value)
              );
            this.shadowRoot?.appendChild(passw)

            const button= this.ownerDocument.createElement("button");
            button.innerText = "Iniciar sesión"
            button.addEventListener("click", this.Funfire)    
            button.addEventListener("click", () =>{
                button.className="btn-signup"
            } )
            this.shadowRoot?.appendChild(button)


        }
    }

}

customElements.define("email-pass",emailandpass);
export default emailandpass;