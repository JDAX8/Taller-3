import styles from './findplayer.css';

import dbsdata from "../../mocks/dbs"
import psbdata from "../../mocks/psb";
import trips from "../../mocks/trips";
import sgfydata from "../../mocks/usdata";
import unphdata from "../../mocks/phonedata";




import profileside, { Attribut } from "../../components/Side-profile/index";
import PostCard, { Attribute1 } from "../../components/PostCard/post";
import sugesforyou, { Attri } from "../../components/sgfy/index";
import underph, {attr} from "../../components/undercell/index";
import { Navigate } from '../../store/actions';
import { dispatch } from '../../store/index';





class fplayer extends HTMLElement {

    
    psb:profileside[]=[];
    mypost :PostCard[]=[];
    sgfy:sugesforyou [] = [];
    unph:underph[]=[];

   

    constructor() {
        super();
        this.attachShadow({ mode: "open" });   
    
                 psbdata.forEach((person) => {
                    const pside = this.ownerDocument.createElement(
                        "profile-side"
                        ) as profileside;
                        pside.setAttribute(Attribut.name, person.name);
                        pside.setAttribute(Attribut.image, person.image);
                        pside.setAttribute(Attribut.gameprofile, person.gameprofile);
                        this.psb.push(pside);
                     });     
                     trips.forEach((user) => {
                        const postg = this.ownerDocument.createElement(
                            "post-card"
                            ) as PostCard;
                            postg.setAttribute(Attribute1.username, user.username);
                            postg.setAttribute(Attribute1.userimage, user.userimage);
                            postg.setAttribute(Attribute1.ptext, user.ptext);
                            postg.setAttribute(Attribute1.postimage, user.postimage);
                            postg.setAttribute(Attribute1.ptitle, user.ptitle);
                            this.mypost.push(postg);
                         });  


                    sgfydata.forEach((person) => {
                        const pside2 = this.ownerDocument.createElement(
                            "suge-you"
                             ) as sugesforyou;
                            pside2.setAttribute(Attri.name, person.name);
                            pside2.setAttribute(Attri.image, person.image);
                            pside2.setAttribute(Attri.description, person.description);
                            this.sgfy.push(pside2);
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

            const cards = this.ownerDocument.createElement("app-leftbar")
            cards.className = 'cards'

            const pside = this.ownerDocument.createElement("section")
            pside.className = `side`
            this.psb.forEach((Sidecards)   =>   {
            pside.appendChild(Sidecards)
            });

            const under = this.ownerDocument.createElement("section") 
            under.className = `under`
            this.unph.forEach((undercello) => {
            under.appendChild(undercello)
            });

            const findplayer = this.ownerDocument.createElement("fp-card")
            findplayer.className="findp"
                    
            const h3element = this.ownerDocument.createElement("h3")
            h3element.textContent = `Sugestions for you`
            pside.appendChild(h3element)    
            const h3elemen = this.ownerDocument.createElement("h3")
            h3elemen.className = `See`
            pside.appendChild(h3elemen)  
            
            const rightside = this.ownerDocument.createElement("section")
            rightside.appendChild(cards)

            const downbar = this.ownerDocument.createElement("my-downbar")
            downbar.className= "downbar"

            this.sgfy.forEach((Sidecards)  => {pside.appendChild(Sidecards)
            });
            const main = this.ownerDocument.createElement("section")
            main.className = `main`
            const line = this.ownerDocument.createElement("div")
            line.className = 'line'

            main.appendChild(cards)
            main.appendChild(findplayer)
            main.appendChild(pside)
            main.appendChild(downbar)

            
            this.shadowRoot?.appendChild(main)
            

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);

        }
    }
}

customElements.define("app-findplayer", fplayer);