import { appState, dispatch } from "../../store";
import { navigate } from "../../store/action";
import { Screens } from "../../types/navigations";
import styles from "./leftbar.css"

export default class leftbar extends HTMLElement{

   constructor(){
       super();
       this.attachShadow({mode:"open"})
   }

   connectedCallback(){
       this.render()
   }
   logOutUser() {
    if(appState.user !== null || ''){
        sessionStorage.clear();
        dispatch(navigate(Screens.LANDING));
        location.reload();
    }
}
   render(){
       if(this.shadowRoot){
           this.shadowRoot.innerHTML =  "";

           const newpostbtn = this.ownerDocument.createElement("app-newpost")
                newpostbtn.className = 'cards'
                newpostbtn.addEventListener("click", () =>{
                    dispatch(navigate(Screens.DASHBOARD))
                } )

           const cards = this.ownerDocument.createElement("section")
           cards.className = `feat`
           const h1element = this.ownerDocument.createElement("h1")
           h1element.textContent = `GAMERS XP`
           cards.appendChild(h1element)
           
           h1element.addEventListener("click", () =>{
               dispatch(navigate(Screens.DASHBOARD))
           } )


           const profilebtn = this.ownerDocument.createElement("app-profilebtn")
           profilebtn.className = 'cards'  
           profilebtn.addEventListener("click", () =>{
               dispatch(navigate(Screens.PROFILESCREEN))
           } )

          


           const searchbtn = this.ownerDocument.createElement("app-searchbtn")
           searchbtn.className = 'cards'
           searchbtn.addEventListener("click", () =>{
               dispatch(navigate(Screens.SEARCHBAR))
           } )


           const randomp = this.ownerDocument.createElement("app-rpbtn")
           randomp.className = 'cards'
           randomp.addEventListener("click", () =>{
               dispatch(navigate(Screens.FINDPLAYER))
           } )
           const createpost = this.ownerDocument.createElement("app-createpost")
           createpost.className = 'cards'
           createpost.addEventListener("click", () =>{
               dispatch(navigate(Screens.SHARE))
           } )

            const logout = this.ownerDocument.createElement("app-logout")
            logout.className = 'cards'
            logout.addEventListener("click", this.logOutUser)


           

           cards.appendChild(newpostbtn)
           cards.appendChild(profilebtn)
           cards.appendChild(searchbtn)
           cards.appendChild(randomp)
           cards.appendChild(createpost)
           cards.appendChild(logout )

           this.shadowRoot.appendChild(cards)
           const css = this.ownerDocument.createElement("style");
           css.innerHTML = styles;
           this.shadowRoot?.appendChild(css);

       }
   }
}

customElements.define("app-leftbar",leftbar);
