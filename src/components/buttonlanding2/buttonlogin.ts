import styles from "./btnlogin.css"
class Btnlog extends HTMLElement {
    
    
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
                <button> Log in </button>
                </section>
                `;
                const css = this.ownerDocument.createElement("style")
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css)
            }
        }
    }
    
customElements.define("button-log", Btnlog);
export default Btnlog;