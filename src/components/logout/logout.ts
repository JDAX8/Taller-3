import styles from './logout.css';

export default class logout extends HTMLElement {
      
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
               <img src="../../src/pics/logout.png">
                <h2><a href="#">Logout</a></h2>
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
    }
    
customElements.define("app-logout", logout);
