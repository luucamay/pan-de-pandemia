import {firebase} from "../lib/firebaseConfig.js";
const collectionName = 'recipes';

// TODO: improve db call
const recipesService = {
    create: (title, ingredients = [], preparation = '') => {
        const db = firebase.dbRef();
        return db
            .collection(collectionName)
            .add({title, ingredients, preparation});
    },
    getById: (id) => {
        const db = firebase.dbRef();
        return db
            .collection(collectionName)
            .doc(id)
            .get()
            .then((doc) =>
                ({
                    id: doc.id,
                    ...doc.data()
                })
            );
    },
    getAll: () => {
        const db = firebase.dbRef();
        return db.collection(collectionName).get()
            .then((querySnapshot)=>
                querySnapshot
                    .docs
                    .map((doc) =>
                        ({
                            id: doc.id,
                            ...doc.data()
                        })
                    )
            );
    },
    update: (id, recipe) => {
        const db = firebase.dbRef();
        return db
            .collection(collectionName)
            .doc(id)
            .set(recipe)
            .then((doc) =>
                ({
                    id: id,
                    ...recipe
                })
            );
    },
    delete: (id) => {
        const db = firebase.dbRef();
        return db.collection(collectionName)
            .doc(id)
            .delete()
            .then(() => true);
    }
}

export default recipesService;