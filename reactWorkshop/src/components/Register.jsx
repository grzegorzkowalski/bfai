import {useState} from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase.js";

const Register = ({communicate}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                const user = userCredential.user;
                communicate({type: "ok", message: userCredential.user.email})
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        console.log(userCredential, "login");
                        communicate({type: "ok", message: userCredential.user.email})
                    })
                    .catch((error) => {
                        console.log(error, "login");
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        communicate({type: "error", message: errorMessage})
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                communicate({type: "error", message: errorCode})
            });
    }

    return (
        <div>
            <form onSubmit={(e) => submitHandler(e)}>
                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /></label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button>Dodaj użytkownika</button>
            </form>
        </div>
    );
};

export default Register;
