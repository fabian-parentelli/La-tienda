import { productModel } from '../models/product.model.js';

export default class Product {

    postProduct = async (product) => {
        return await productModel.create(product);
    };

    getProducts = async (query, options) => {
        return await productModel.paginate(query, { ...options, lean: true });
    };

    getById = async (id) => {
        return await productModel.findById(id).lean();
    };

    update = async (product) => {
        return await productModel.findByIdAndUpdate(product._id, product, { lean: true, new: true });
    };
    
};