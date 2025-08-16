import { recipeRepository } from '../repositories/index.repositories.js';
import { RecipeNotFound } from '../utils/custom-exceptions.utils.js';

const postRecipe = async (body) => {
    const result = await recipeRepository.postRecipe(body);
    if (!result) throw new RecipeNotFound('Error al crear una receta');
    return { status: 'success', result };
};


const getRecipes = async ({ page = 1, active }) => {
    const query = {};
    if (active !== undefined) query.active = active;
    const result = await recipeRepository.getRecipes(query, page);
    if (!result) throw new RecipeNotFound('Error al traer las recetas');
    return { status: 'success', result };
};

const putRecipes = async (body) => {
    const recipe = await recipeRepository.getById(body._id);
    if (!recipe) throw new RecipeNotFound('Error al tarer la receta');
    const result = await recipeRepository.update({ ...recipe, ...body });
    if (!result) throw new RecipeNotFound('Error al actualizar la receta');
    return { status: 'success', result };
};

export { postRecipe, getRecipes, putRecipes };