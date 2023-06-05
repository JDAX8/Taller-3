import styles from './card.css';

export default class Searchbtn extends HTMLElement {
      
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
               <img src="../../src/pics/search.png">
                <h2><a href="#">Search</a></h2>
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
    }
    
customElements.define("app-searchbtn", Searchbtn);
