import styles from "./profilescreen.css"

import dbsdata from "../../mocks/dbs"
import psbdata from "../../mocks/psb";
import sgfydata from "../../mocks/usdata";
import trips from "../../mocks/trips";
import unphdata from "../../mocks/phonedata";


import profileside, { Attribut } from "../../components/Side-profile/index";
import sugesforyou, { Attri } from "../../components/sgfy/index";
import profilepost, { Attribute2 } from "../../components/profilepost/Ppost";
import profileApp, { Attribute3 } from "../../components/profile/profile"
import underph, {attr} from "../../components/undercell/index";
import { dispatch } from "../../store/index";
import { navigate } from "../../store/action";
import { Screens } from "../../types/navigations";



class profilescreen extends HTMLElement{

    psb:profileside[]=[];
    mypost :profilepost[]=[];
    sgfy:sugesforyou [] = [];
    unph:underph[]=[];

    constructor(){
        super()
        this.attachShadow({mode:"open"})     
        psbdata.forEach((person) => {
            const profile = this.ownerDocument.createElement(
                "profile-card"
                ) as profileside;
                profile.setAttribute(Attribute3.name, person.name);
                profile.setAttribute(Attribute3.image, person.image);
                profile.setAttribute(Attribute3.gameprofile, person.gameprofile);
                profile.setAttribute(Attribute3.description, person.description);
                this.psb.push(profile);
                     });   
        trips.forEach((user) => {
            const postg = this.ownerDocument.createElement(
                "profilepost-card"
                ) as profilepost;
                postg.setAttribute(Attribute2.username, user.username);
                postg.setAttribute(Attribute2.userimage, user.userimage);
                postg.setAttribute(Attribute2.postimage, user.postimage);
                this.mypost.push(postg);
                     }); 
                         
        unphdata.forEach((person) => {
            const under = this.ownerDocument.createElement(
                    "under-phone"
                    ) as underph;
                    under.setAttribute(attr.image, person.image);
                    this.unph.push(under);
                    });       
    }

    
    connectedCallback() {
        this.render();
    }
    
    render() {
        if (this.shadowRoot) {
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

            const newpostbtn = this.ownerDocument.createElement("app-newpost")
            newpostbtn.className = 'cards'
            newpostbtn.addEventListener("click", () =>{
                dispatch(navigate(Screens.DASHBOARD))
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

            cards.appendChild(newpostbtn)
            cards.appendChild(profilebtn)
            cards.appendChild(searchbtn)
            cards.appendChild(randomp)
        
            const profile = this.ownerDocument.createElement("section")
            profile.className = `profile`
            this.psb.forEach((Sidecards)   =>   {
            profile.appendChild(Sidecards)
            });
            
           
            const postg = this.ownerDocument.createElement("section")
            postg.className = 'profilepost';

            this.mypost.forEach((profpost) => {
            postg.appendChild(profpost)
            })

            const under = this.ownerDocument.createElement("section") 
            under.className = `under`

            const downbar = this.ownerDocument.createElement("my-downbar")
            downbar.className= "downbar"

            this.unph.forEach((undercello) => {
            under.appendChild(undercello)
            });
            
            const main = this.ownerDocument.createElement("section")
            main.className = `main`
            const line = this.ownerDocument.createElement("div")
            line.className = 'line'
            const midcont = this.ownerDocument.createElement("section")
            midcont.className = `midcont`

            main.appendChild(cards)
            main.appendChild(profile)
            main.appendChild(postg)
            main.appendChild(midcont)
            main.appendChild(downbar)

            
            midcont.appendChild(profile)

            midcont.appendChild(postg)
            
            this.shadowRoot?.appendChild(main)
            

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);

        }
    }
}

customElements.define("app-profile", profilescreen);