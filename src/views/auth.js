import Input from './components/input.js';
import Button from './components/button.js';

const Auth = {
    render: async () => {
        const email = await Input.render('Email', 'text');
        const password = await Input.render('Contrasenia', 'password');
        const button = await Button.render('Enviar');
        const view =  email + password + button;
        return view
    }
}

export default Auth;