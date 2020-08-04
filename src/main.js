import { myFunction } from './lib/index.js';
import Router from './router.js';
import {firebase} from "./lib/firebaseConfig.js";


myFunction();

function bootstrap() {
    // TODO: remove this
    console.log('bootstrap');
    Router.init();
    firebase.init();
}

bootstrap();



