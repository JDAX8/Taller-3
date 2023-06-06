import { initializeApp} from "firebase/app";
import firebaseconfig from "./firebaseconfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import { dispatch } from "../store";
import { navigate } from "../store/action";
import { Screens } from "../types/navigations";
import { Postt } from "../types/Postt";
import { getFirestore, collection, addDoc } from "firebase/firestore"


const app = initializeApp(firebaseconfig);
const db = getFirestore(app);

const savePostInDB = async (Postt: Postt) => {
  try{
   await addDoc(collection(db,"Postt"), Postt);
   
  } catch (e) {
      console.error("Error adding document: ", e);
  }

};


export const auth = getAuth(app);

const UserRegister = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      dispatch(navigate(Screens.DASHBOARD))
      return true;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return false;
    }
  };

  const Userlogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
    
  })  => {
    setPersistence(auth,browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth,email,password);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
    })
    
  };

  export default {UserRegister, Userlogin, savePostInDB};