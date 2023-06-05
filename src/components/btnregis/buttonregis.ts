import styles from "./input.css";
export enum att {
    "placeholder" = "placeholder",
    "type" = "type",
}

  class regist extends HTMLElement{
    placeholder?: string;
    type?: string;


static get observedAttributes() {
    const attr: Record<att,null> ={

        placeholder: null,
        type: null,

    };
    return Object.keys(attr);
}


attributeChangedCallback(
    propName: att,
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

            const reg = this.ownerDocument.createElement("input")
            reg.placeholder = `${this.placeholder}`
            reg.type = `${this.type}`
            
            const edit = this.ownerDocument.createElement("style");
                edit.innerHTML = styles
                this.shadowRoot?.appendChild(edit);
                this.shadowRoot?.appendChild(reg)
            

        }
    }

}


customElements.define("but-regis",regist);
export default regist;