import Router from './routes.js';
import * as recipesController from '../controllers/recipes.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class RecipeRouter extends Router {
    init() {
        this.post('/', ['PUBLIC'], passportEnum.NOTHING, recipesController.postRecipe);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, recipesController.getRecipes);
        this.put('/', ['MASTER'], passportEnum.JWT, recipesController.putRecipes);
    };
};