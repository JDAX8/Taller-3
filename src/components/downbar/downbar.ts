import { navigate } from "../../store/action";
import { dispatch } from "../../store/index";
import { Screens } from "../../types/navigations";
import styles from "./downbar.css"

export default class downbar extends HTMLElement {

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
                  
             const downbar = this.ownerDocument.createElement("section")
            downbar.className="downbar"

            const icon1 = this.ownerDocument.createElement("img")
            icon1.className="icon1"
            icon1.src= "../../../src/pics/buser.png"
            icon1.addEventListener("click", () =>{
                dispatch(navigate(Screens.PROFILESCREEN))
            } )

            const icon2 = this.ownerDocument.createElement("img")
            icon2.className="icon2"
            icon2.src="../../../src/pics/gamepad.png"
            icon2.addEventListener("click", () =>{
                dispatch(navigate(Screens.DASHBOARD))
            } )

            const icon3 = this.ownerDocument.createElement("img")
            icon3.className="icon3"
            icon3.src="../../../src/pics/random.png"
            icon3.addEventListener("click", () =>{
                dispatch(navigate(Screens.FINDPLAYER))
            } )


            downbar.appendChild(icon1)
            downbar.appendChild(icon2)
            downbar.appendChild(icon3)

            this.shadowRoot.appendChild(downbar)

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
            }
        }
    }

    customElements.define("my-downbar", downbar);
