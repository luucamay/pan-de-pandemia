import recipesService from '../services/recipesService.js';

const CreateRecipe = {
    render: async () => {
        const view =  `
            <section>
                <h1>Crear Pan</h1>
            </section>
        
        `
        // await CreateRecipe.init();
        return view
    },
    init: async () => {
    }
}

export default CreateRecipe;