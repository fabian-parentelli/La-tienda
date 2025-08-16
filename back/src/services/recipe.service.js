import { recipeRepository } from '../repositories/index.repositories.js';
import { RecipeNotFound } from '../utils/custom-exceptions.utils.js';
import { deleteImg, getPublicId } from '../config/cloudinary.config.js';

const postRecipe = async (body) => {
    const result = await recipeRepository.postRecipe(body);
    if (!result) throw new RecipeNotFound('Error al crear una receta');
    return { status: 'success', result };
};

const getRecipes = async ({ page = 1, active, category, type, today, id }) => {
    const query = {};
    if (category) query.category = { $regex: category, $options: "i" };
    if (type) query.type = type;
    if (id) query._id = id;
    if (today) query.days = { $in: [today] };
    if (active !== undefined) query.active = active;
    const result = await recipeRepository.getRecipes(query, page);
    if (!result) throw new RecipeNotFound('Error al traer las recetas');
    return { status: 'success', result };
};

const putRecipesImg = async (body, imgs) => {
    const recipe = await recipeRepository.getById(body._id);
    if (!recipe) throw new RecipeNotFound('Error al tarer la receta');
    const result = await recipeRepository.update({ ...recipe, img: imgs[0] });
    if (!result) throw new RecipeNotFound('Error al actualizar la receta');
    const imgId = await getPublicId(recipe.img);
    if (imgId) await deleteImg(imgId);
    return { status: 'success', result };
};

const putRecipes = async (body) => {
    const recipe = await recipeRepository.getById(body._id);
    if (!recipe) throw new RecipeNotFound('Error al tarer la receta');
    const result = await recipeRepository.update({ ...recipe, ...body });
    if (!result) throw new RecipeNotFound('Error al actualizar la receta');
    return { status: 'success', result };
};

export { postRecipe, getRecipes, putRecipesImg, putRecipes };