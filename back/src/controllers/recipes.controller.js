import * as recipeService from '../services/recipe.service.js';
import { RecipeNotFound } from '../utils/custom-exceptions.utils.js';

const postRecipe = async (req, res) => {
    try {
        const result = await recipeService.postRecipe({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof RecipeNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getRecipes = async (req, res) => {
    try {
        const result = await recipeService.getRecipes({ ...req.query });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof RecipeNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const putRecipes = async (req, res) => {
    try {
        const result = await recipeService.putRecipes({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof RecipeNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { postRecipe, getRecipes, putRecipes };