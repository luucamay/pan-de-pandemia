import Input from './components/input.js';

const Auth = {
    render: async () => {
        const email = await Input.render('Email', 'text');
        const password = await Input.render('Contrasenia', 'password');
        const view =  email + password;
        return view
    }
}

export default Auth;