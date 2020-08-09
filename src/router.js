import Home from './views/home.js';
import Err404 from './views/404.js';
import Auth from './views/auth.js';
import Feed from './views/feed.js';
import CreateRecipe from "./views/create-recipe.js";

const paths  = {
    '/': Home,
    '/auth': Auth,
    '/feed': Feed,
    '/feed/create-recipe': CreateRecipe,
}

const config = async () => {
    const rootElem = document.getElementById('root');

    let url = location.hash.slice(1).toLowerCase() || '/';

    let page = paths[url] || Err404;
    rootElem.innerHTML = await page.render();
    await page.after_render();
}

const Router = {
    init: async () => {
        window.addEventListener('hashchange', config);
        window.addEventListener('load', config);
    }
}

export default Router;