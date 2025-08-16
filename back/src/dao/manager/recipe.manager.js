import { recipeModel } from '../models/recipe.model.js';

export default class Recipe {

    postRecipe = async (product) => {
        return await recipeModel.create(product);
    };

    getRecipes = async (query, page) => {
        return await recipeModel.paginate(query, { page, limit: 7, lean: true });
    };

    getById = async (id) => {
        return await recipeModel.findById(id).lean();
    };

    update = async (recipe) => {
        return await recipeModel.findByIdAndUpdate(recipe._id, recipe, { lean: true, new: true });
    };

};