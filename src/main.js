// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import Router from './router.js';
import {firebaseConfig} from './lib/firebaseConfig.js';

myFunction();

Router.init();

