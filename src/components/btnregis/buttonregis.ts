import styles from "./input.css";
import Firebase from "../../utils/firebase"
import { dispatch } from "../../store";
import { Navigate, newUser } from "../../store/actions";
import firebase from "../../utils/firebase";
import { users } from "../../types/user";

const credentials: users = {
    uid: "123",
    name: "",
    image: "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg",
    email: "",
    description: "",
    gameprofile: "",
    password: "",
};
export enum att {
    "placeholder" = "placeholder",
    "type" = "type",
}

  class regist extends HTMLElement{
    placeholder?: string;
    type?: string;


static get observedAttributes() {
    const attr: Record<att,null> ={

        placeholder: null,
        type: null,

    };
    return Object.keys(attr);
}


attributeChangedCallback(
    propName: att,
    _: string | undefined,
    newValue: string | undefined
    ) {
        switch (propName) {

            default:
            this[propName] = newValue;
            break;
        }
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        this.render();
    }

    async RegisterNewUser(){
        dispatch(newUser(credentials))

        if(await Firebase.UserRegister(credentials)  == true){
          
          await Firebase.Adduser(credentials)
        }
        console.log(credentials);
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML= "";

            const lname = this.ownerDocument.createElement('label');
            lname.textContent = "Name"
            const name = this.ownerDocument.createElement('input');
            name.placeholder = "Name"
            name.type = "Name"
            name.addEventListener(
                "change",
                (e: any) => (credentials.name = e.target.value)
              );

            const lemail = this.ownerDocument.createElement('label');
            lemail.textContent = "Email"
            const email = this.ownerDocument.createElement('input');
            email.placeholder = "Email"
            email.type = "Email"
            email.addEventListener(
                "change",
                (e: any) => (credentials.email = e.target.value)
              );

            const lpassword = this.ownerDocument.createElement('label');
            lpassword.textContent = "Password"
            const password = this.ownerDocument.createElement('input');
            password.placeholder = "Password"
            password.type = "Password"
            password.addEventListener(
                "change",
                (e: any) => (credentials.password = e.target.value)
              );

            const Cpassword = this.ownerDocument.createElement('label');
            Cpassword.textContent = "Confirm password"
            const CCpassword = this.ownerDocument.createElement('input');
            CCpassword.placeholder = "Password"
            CCpassword.type = "Password"
            CCpassword.addEventListener(
                "change",
                (e: any) => (credentials.password = e.target.value)
              );
            
              const button = this.ownerDocument.createElement('button')
              button.innerText = "Create account"
              button.addEventListener("click", async () =>{
                console.log(credentials)
                this.RegisterNewUser()
                  } )
                  
              
            const edit = this.ownerDocument.createElement("style");
                edit.innerHTML = styles
                
                this.shadowRoot?.appendChild(edit);
                this.shadowRoot?.appendChild(lname);
                this.shadowRoot?.appendChild(name);
                this.shadowRoot?.appendChild(lemail);
                this.shadowRoot?.appendChild(email);
                this.shadowRoot?.appendChild(lpassword);
                this.shadowRoot?.appendChild(password);
                this.shadowRoot?.appendChild(Cpassword);
                this.shadowRoot?.appendChild(CCpassword);
                this.shadowRoot?.appendChild(button);
        }
    }

}


customElements.define("but-regis",regist);
export default regist;