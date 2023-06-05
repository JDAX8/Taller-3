import styles from "./butlog.css"

 class butlogin extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML =  "";

            const edit = this.ownerDocument.createElement("style");
                edit.innerHTML = styles
                this.shadowRoot?.appendChild(edit);
            

            const button= this.ownerDocument.createElement("button");
            button.innerText = "Iniciar sesión"

            this.shadowRoot?.appendChild(button)
        }
    }
}

customElements.define("my-butlogin",butlogin);
export default butlogin;