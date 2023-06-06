import { appState } from '../../store';
import styles from './scard.css';

export enum Attribut {
    "image" = "image",
    "name" = "name",
    "gameprofile" = "gameprofile"

}

class profileside extends HTMLElement {
    image?: string;
    name?: string;
    gameprofile?: string
    
    static get observedAttributes() {
        const attrs: Record<Attribut, null> = {
        
            image: null,
            name: null,
            gameprofile: null
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
               <img src="${appState.User.image}">
               <section class = "nameandsec">
                <h2>${appState.User.name}</h2>
                <p class = "desc"> ${appState.User.gameprofile}</p>
                </section>
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                 this.shadowRoot?.appendChild(css);
                
            }
        }
    }
    
customElements.define("profile-side", profileside);
export default profileside;