import Input from './components/input.js';
import Button from './components/button.js';
import { signIn } from '../services/firebaseAuth.js';

const Auth = {
    render: async () => {
        const view = document.createElement('div');
        const email = await Input.render('Email', 'text');
        const password = await Input.render('Contrasenia', 'password');
        const button = await Button.render('Enviar', 'signInBtn');
        view.innerHTML = email + password + button;

        // Login with access
        view.querySelector('#signInBtn').addEventListener('click', () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            signIn(email, password);
        });

        return view
    }
}

export default Auth;