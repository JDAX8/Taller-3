import { Logout, Navigate } from "../../store/actions";
import { appState, dispatch } from "../../store/index";
import { Screens } from "../../types/store";
import styles from "./downbar.css"

export default class downbar extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }
    logoutUser() {
        if(appState.User !== null || ''){
            sessionStorage.clear();
            dispatch(Navigate(Screens.LANDING));
            location.reload();
        }
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
                dispatch(Navigate(Screens.PROFILESCREEN))
            } )

            const icon2 = this.ownerDocument.createElement("img")
            icon2.className="icon2"
            icon2.src="../../../src/pics/gamepad.png"
            icon2.addEventListener("click", () =>{
                dispatch(Navigate(Screens.DASHBOARD))
            } )

            const icon3 = this.ownerDocument.createElement("img")
            icon3.className="icon3"
            icon3.src="../../../src/pics/random.png"
            icon3.addEventListener("click", () =>{
                dispatch(Navigate(Screens.FINDPLAYER))
            } )

            const icon4 = this.ownerDocument.createElement("img")
            icon4.className="icon4"
            icon4.src="../../../src/pics/createpost.png"
            icon4.addEventListener("click", () =>{
                dispatch(Navigate(Screens.SHARE))
            } )

            const icon5 = this.ownerDocument.createElement("img")
            icon5.className="icon5"
            icon5.src="../../../src/pics/logout.png"
            icon5.addEventListener("click", ()=>{
                dispatch(Logout())
             })    
            



            downbar.appendChild(icon1)
            downbar.appendChild(icon2)
            downbar.appendChild(icon3)
            downbar.appendChild(icon4)
            downbar.appendChild(icon5)

            this.shadowRoot.appendChild(downbar)

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
            }
        }
    }

    customElements.define("my-downbar", downbar);
