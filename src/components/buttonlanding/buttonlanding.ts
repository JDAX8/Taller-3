import styles from "./btnlanding.css"
class Btnaccoun extends HTMLElement {
    
    
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
    
customElements.define("btn-accoun", Btnaccoun);
export default Btnaccoun;