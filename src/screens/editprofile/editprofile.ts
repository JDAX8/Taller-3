import "../../components/export"
import styles from './createpost.css';

export default class profiledit extends HTMLElement {
    
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

                const post = this.ownerDocument.createElement("app-editprofile")
                post.className = "big"


                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
                this.shadowRoot?.appendChild(post)
            }
        }
    }
    
customElements.define("screen-editprofile", profiledit);