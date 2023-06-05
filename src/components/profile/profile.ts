import { dispatch } from '../../store';
import { navigate } from '../../store/action';
import { Screens } from '../../types/navigations';
import styles from './profile.css';

export enum Attribute3 {
    "image" = "image",
    "name" = "name",
    "gameprofile" = "gameprofile",
    "description" = "description"

}

export default class profileApp extends HTMLElement {
    image?: string;
    name?: string;
    gameprofile?: string
    description?: string
    
    static get observedAttributes() {
        const attrs: Record<Attribute3, null> = {
        
            image: null,
            name: null,
            gameprofile: null,
            description: null,
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
        propName: Attribute3,
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
                this.shadowRoot.innerHTML = ``;

                const section = this.ownerDocument.createElement('section');
                  
                      const userInfo = this.ownerDocument.createElement('div');
                      userInfo.classList.add('user-info');
                  
                      const image = this.ownerDocument.createElement('img');
                      image.setAttribute('src', this.image || '');
                  
                      const nameAndGame = this.ownerDocument.createElement('div');
                      nameAndGame.classList.add('name-and-game');
                  
                      const buttonContainer = this.ownerDocument.createElement('div');
                      buttonContainer.classList.add('btn');
                  
                      const name = this.ownerDocument.createElement('h2');
                      name.textContent = this.name || '';
                  
                      const editButton = this.ownerDocument.createElement('button');
                      editButton.classList.add('edit');
                      editButton.textContent = 'Edit profile';
                      editButton.addEventListener("click", () =>{
                        dispatch(navigate(Screens.EDITPROFILE))
                    } )
                  
                      const gameProfile = this.ownerDocument.createElement('p');
                      gameProfile.classList.add('game-profile');
                      gameProfile.textContent = this.gameprofile || '';
                  
                      const description = this.ownerDocument.createElement('p');
                      description.classList.add('description');
                      description.textContent = this.description || '';
                  
                      buttonContainer.appendChild(name);
                      buttonContainer.appendChild(editButton);
                      nameAndGame.appendChild(buttonContainer);
                      nameAndGame.appendChild(gameProfile);
                      userInfo.appendChild(image);
                      userInfo.appendChild(nameAndGame);
                      section.appendChild(userInfo);
                      section.appendChild(description);
                  
                      this.shadowRoot.innerHTML = '';
                      this.shadowRoot.appendChild(section);
                      
                      const css = this.ownerDocument.createElement('style');
                      css.innerHTML = styles;
                      this.shadowRoot.appendChild(css);
                
                 
                };
                  
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                 this.shadowRoot?.appendChild(css);
                
            }
        }
    
customElements.define("profile-card", profileApp);
