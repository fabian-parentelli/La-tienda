import { productRepository } from '../repositories/index.repositories.js';
import { ProductNotFound } from '../utils/custom-exceptions.utils.js';

const postProduct = async (body, imagesUrl) => {
    if (imagesUrl && imagesUrl.length > 0) body.img = imagesUrl[0];
    const result = await productRepository.postProduct(body);
    if (!result) throw new ProductNotFound('Error al guardar el producto');
    return { status: 'success' };
};

export { postProduct };