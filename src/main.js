const firebase = window.firebase;
import { myFunction } from './lib/index.js';
import Router from './router.js';
import {firebaseConfig} from './lib/firebaseConfig.js';


myFunction();

function bootstrap() {
    Router.init();
    firebase.initializeApp(firebaseConfig);
}

bootstrap();



