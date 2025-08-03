import { productManager } from '../dao/manager/index.manager.js';

export default class ProductRepository {

    postProduct = async (product) => {
        const result = await productManager.postProduct(product);
        return result;
    };
    
    getProducts = async (query, options) => {
        const result = await productManager.getProducts(query, options);
        return result;
    };
    
    getById = async (id) => {
        const result = await productManager.getById(id);
        return result;
    };
    
    update = async (product) => {
        const result = await productManager.update(product);
        return result;
    };

};