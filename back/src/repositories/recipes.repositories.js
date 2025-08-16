import { recipeManager } from '../dao/manager/index.manager.js';

export default class RecipeRepository {

    postRecipe = async (recipe) => {
        const result = await recipeManager.postRecipe(recipe);
        return result;
    };

    getRecipes = async (query, page) => {
        const result = await recipeManager.getRecipes(query, page);
        return result;
    };
    
    getById = async (id) => {
        const result = await recipeManager.getById(id);
        return result;
    };
    
    update = async (recipe) => {
        const result = await recipeManager.update(recipe);
        return result;
    };

};