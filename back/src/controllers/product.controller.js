import * as productService from '../services/products.service.js';
import { ProductNotFound } from '../utils/custom-exceptions.utils.js';

const postProduct = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await productService.postProduct({ ...req.body }, imagesUrl);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { postProduct }