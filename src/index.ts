import "./components/export"
import "./screens/dashboard/dashboard"
import "./screens/findplayer/findplayer"
import "./screens/searchbar/searchbar"
import "./screens/profilescreen/profilescreen"
import "./screens/Form/index"
import "./screens/Register/form2"
import "./screens/landing/landing"
import "./screens/Create Post/createpost"
import "./screens/editprofile/editprofile"

import { addObserver, appState } from "./store/index"
import { Screens } from "./types/store";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {

        if(this.shadowRoot)this.shadowRoot.innerHTML='';
        switch (appState.screen) {
            case Screens.DASHBOARD:
                const dashboard = this.ownerDocument.createElement('app-dashboard');
                this.shadowRoot?.appendChild(dashboard);
                break;

                case Screens.FINDPLAYER:
                const findplayer = this.ownerDocument.createElement('app-findplayer');
                this.shadowRoot?.appendChild(findplayer);

                break;
            
                 case Screens.SEARCHBAR:
                const searchbar = this.ownerDocument.createElement('app-sbscreen');
                this.shadowRoot?.appendChild(searchbar);

                break;

                 case Screens.PROFILESCREEN:
                const profile = this.ownerDocument.createElement('app-profile');
                this.shadowRoot?.appendChild(profile);

                break;

                case Screens.LANDING:
                const landing = this.ownerDocument.createElement('app-landing');
                this.shadowRoot?.appendChild(landing);

                break;
                case Screens.LOGIN:
                const Login = this.ownerDocument.createElement('app-login');
                this.shadowRoot?.appendChild(Login);

                break;
                case Screens.REGISTER:
                const register = this.ownerDocument.createElement('app-register');
                this.shadowRoot?.appendChild(register);

                break;
                case Screens.SHARE:
                const share = this.ownerDocument.createElement('app-post');
                this.shadowRoot?.appendChild(share); break;
                
                case Screens.EDITPROFILE:
                const edit = this.ownerDocument.createElement('screen-editprofile');
                this.shadowRoot?.appendChild(edit);
        
            default:
                break;
        }

    }
}

customElements.define('app-container', AppContainer)