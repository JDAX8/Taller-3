import styles from "./input.css"
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

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML= "";

            const css = this.ownerDocument.createElement("style")
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css)

            const log = this.ownerDocument.createElement("input")
            log.placeholder = `${this.placeholder}`
            log.type = `${this.type}`
            this.shadowRoot?.appendChild(log)

        }
    }

}


customElements.define("email-pass",emailandpass);
export default emailandpass;