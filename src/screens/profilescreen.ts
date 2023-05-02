import styles from "./profilescreen.css"

import dbsdata from "../mocks/dbs"
import psbdata from "../mocks/psb";
import sgfydata from "../mocks/usdata";
import trips from "../mocks/trips";
import unphdata from "../mocks/phonedata";


import profileside, { Attribut } from "../components/Side-profile/index";
import sugesforyou, { Attri } from "../components/sgfy/index";
import profilepost, { Attribute2 } from "../components/profilepost/Ppost";
import profileApp, { Attribute3 } from "../components/profile/profile"
import bestsale, { attribute } from "../components/bestS/index";
import underph, {attr} from "../components/undercell/index";



class profilescreen extends HTMLElement{

    dbs:bestsale[]=[];
    psb:profileside[]=[];
    mypost :profilepost[]=[];
    sgfy:sugesforyou [] = [];
    unph:underph[]=[];

    constructor(){
        super()
        this.attachShadow({mode:"open"})

        dbsdata.forEach((person) => {
            const cards = this.ownerDocument.createElement(
                "best-sale"
                ) as bestsale;
                cards.setAttribute(attribute.titulo, person.title);
                cards.setAttribute(attribute.icon, person.icon);
                this.dbs.push(cards);
             });     
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
            this.dbs.forEach((featuredCards)   =>   {
            cards.appendChild(featuredCards)
            });

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