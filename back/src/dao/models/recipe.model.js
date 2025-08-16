import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const recipeCollection = 'recipes';

const recipeSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    prep_time: { type: String },
    cook_time: { type: String },
    servings: { type: Number },
    img: { type: String },
    ingredients: [
        {
            name: { type: String },
            quantity: { type: Number },
            unit: { type: String },
            preparation: { type: String },
            productId: { type: String }
        }
    ],
    instructions: [{ type: String }],
    notes: { type: String },
    category: { type: String },
    type: { type: String },
    active: { type: Boolean, default: true },
    days: [{ type: String }],
});

recipeSchema.plugin(mongoosePaginate);

export const recipeModel = mongoose.model(recipeCollection, recipeSchema);