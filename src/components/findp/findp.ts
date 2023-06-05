import styles from './findp.css';

export default class findpl extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback (){
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML=` 
        <section class="all">
            <img class ="icon" src="../../src/pics/fpicon.png" alt="Foto de usuario">
            <a href="#" class="btn-neon">
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
            <span id="span4"></span>
            FIND A GAMER PARTNER
        </a>
        </section>
        `        
        const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
    }
}
customElements.define("fp-card", findpl);