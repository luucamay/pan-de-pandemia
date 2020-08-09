import Input from './components/input.js';
import Button from './components/button.js';
import { signIn, signInWithGoogle } from '../services/firebaseAuth.js';

const Auth = {
    render: async () => {
        const email = await Input.render('Email', 'text');
        const password = await Input.render('Contrasenia', 'password');
        const signInBtn = await Button.render('Enviar', 'signInBtn');
        const view = `<form>
            ${email}
            ${password}
            <button id="botoncito">Ingresar con Email</button>
            <button id="googlecito">Ingresar con Google</button>
        </form>`;
        return view
    },

    after_render: async () => {
        const signInEmail = (evt) => {
            evt.preventDefault();
            const email = document.querySelector('#Email').value;
            const password = document.querySelector('#Contrasenia').value;
            signIn(email, password);
        }

        const signInGoogle = (evt) => {
            evt.preventDefault();
            signInWithGoogle();
        }

        const botoncito = document.querySelector('#botoncito');
        botoncito.addEventListener("click", signInEmail);
        const googlecit = document.querySelector('#googlecito');
        googlecit.addEventListener("click", signInGoogle);
    }
}

export default Auth;