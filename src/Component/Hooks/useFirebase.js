import initializeFirebaseApp from "../../Firebase/Firebase.initi";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebaseApp()
const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const handleInGoogleSign = () => {
        signInWithPopup(auth, provider)
            .then((result) => setUser(result.user))
            .catch((error) => setError(error.massage))
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setError("")
            }
        })
    }, []);

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                setError("")
            });
    };
    return { user, handleInGoogleSign, error, handleLogOut }
}
export default useFirebase