import Input from './components/input.js';
import Button from './components/button.js';
import { signIn } from '../services/firebaseAuth.js';

const Auth = {
    render: async () => {
        const email = await Input.render('Email', 'text');
        const password = await Input.render('Contrasenia', 'password');
        const signInBtn = await Button.render('Enviar', 'signInBtn');
        const view = `<form>
            ${email}
            ${password}
            <button id="botoncito">Click here to log in!</button>
        </form>`;
        return view
    },

    after_render: async () => {
        const login = (evt) => {
            evt.preventDefault();
            console.log('soy un botoncito');
            console.log('logueando');
            /* const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            signIn(email, password); */
        }

        const botoncito = document.querySelector('#botoncito');
        botoncito.addEventListener("click", login);
    }
}

export default Auth;