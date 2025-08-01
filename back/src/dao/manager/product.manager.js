import { productModel } from '../models/product.model.js';

export default class Product {

    postProduct = async (product) => {
        return await productModel.create(product);
    };

};