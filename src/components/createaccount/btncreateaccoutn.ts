import styles from "./btncra.css"
class Btnaccount extends HTMLElement {
    
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section>
                <button> Create account </button>
                </section>
                `;
                const css = this.ownerDocument.createElement("style")
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css)
            }
        }
    }
    
customElements.define("btn-account", Btnaccount);
export default Btnaccount;