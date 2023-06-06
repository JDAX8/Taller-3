import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDoc, orderBy, query, onSnapshot, where, setDoc, doc} from "firebase/firestore";
import {createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword,setPersistence,browserSessionPersistence,onAuthStateChanged} from "firebase/auth";
import firebaseConfig from "./firebaseconfig";
import { appState, dispatch } from "../store";
import { Navigate } from "../store/actions";
import { Screens } from "../types/store";
import { users } from "../types/user";
import { Postt } from "../types/Postt";



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app)

const SavePostInDB = async(Post:Postt) => {
  try{
    const where = collection(db,"Postt")
    await addDoc (where,{...Post, createat:new Date()})
    return true
  }
  catch{
    console.log("error")
    return false
  }
}
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
    dispatch(Navigate(Screens.LOGIN));
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
  setPersistence(auth, browserSessionPersistence)
  .then(() => {
    return signInWithEmailAndPassword(auth,email,password);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  })
};




const Adduser = async (user: any) =>{
  try {
    user.uid = appState.User.uid
    await setDoc(doc(db, "users", user.uid), user)
    return true
  } catch (e) {
    console.error("problem adding user: ", e);
    return false
  }
}

const GetUserFromDB = async(): Promise<users> =>{
  let resp: users ={
    uid: "",
    name: "",
    description:"",
    gameprofile: "",
    email: "",
    image: "",
    password: "",
  };
  const docRef = doc(db, "users", appState.User.uid);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    resp = (docSnap.data() as users);
  } else {
    console.log("No such document!");
  }
  return  resp
}


const EditprofileDB = async (a: users) =>{
  try {
    await setDoc (doc(db, "users", a.uid), a)
    return true
  } catch (e) {
    console.error("Error: ", e);
    return false
  }
}

export default {UserRegister,Userlogin,Adduser,GetUserFromDB,EditprofileDB,onAuthStateChanged,SavePostInDB};