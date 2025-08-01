import { productManager } from '../dao/manager/index.manager.js';

export default class ProductRepository {

    postProduct = async (product) => {
        const result = await productManager.postProduct(product);
        return result;
    };

};