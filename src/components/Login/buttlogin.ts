class BtnLog extends HTMLElement {
    
    
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

                const sec = this.ownerDocument.createElement("section")

                const btn = this.ownerDocument.createElement("button")
                btn.textContent="Log in"

                sec.appendChild(btn)

                this.shadowRoot.appendChild(sec)
            }
        }
    }
    
customElements.define("btn-log", BtnLog);
export default BtnLog;