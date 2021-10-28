import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";

const initializationAuthentication = () =>{
    initializeApp(firebaseConfig);
}
export default initializationAuthentication;