import styles from "./button.css"
export enum Attribut {
    
    "name" = "name",
    
}

class Btnsec extends HTMLElement {
    
    name?: string;
    
    
    static get observedAttributes() {
        const attrs: Record<Attribut, null> = {
        
            
            name: null
            
        };
        return Object.keys(attrs);
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(
        propName: Attribut,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                
                <section>
                <button>${this.name}</button>
                </section>
                `;
                const css = this.ownerDocument.createElement("style")
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css)
            }
        }
    }
    
customElements.define("btn-sec", Btnsec);
export default Btnsec;