import { deleteImg, getPublicId } from '../config/cloudinary.config.js';
import { productRepository } from '../repositories/index.repositories.js';
import { ProductNotFound } from '../utils/custom-exceptions.utils.js';

const postProduct = async (body, imagesUrl) => {
    if (imagesUrl && imagesUrl.length > 0) body.img = imagesUrl[0];
    const result = await productRepository.postProduct(body);
    if (!result) throw new ProductNotFound('Error al guardar el producto');
    return { status: 'success' };
};

const getProducts = async ({ page = 1, limit = 12 }) => {
    const query = {};
    const options = { page, limit };
    const result = await productRepository.getProducts(query, options);
    if (!result) throw new ProductNotFound('Error al traer los productos');
    return { status: 'success', result };
};

const putProductImg = async (body, imagesUrl) => {
    const product = await productRepository.getById(body.id);
    if (!product) throw new ProductNotFound('Error al tarer el producto');
    const result = await productRepository.update({ ...product, img: imagesUrl[0] });
    if (!result) throw new ProductNotFound('Error al actulizar el producto');
    const imgId = await getPublicId(product.img);
    if (imgId) await deleteImg(imgId);
    return { status: 'success', result };
};

const putProduct = async (body) => {
    const product = await productRepository.getById(body._id);
    if (!product) throw new ProductNotFound('Error al tarer el producto');
    const result = await productRepository.update({ ...product, ...body });
    if (!result) throw new ProductNotFound('Error al actulizar el producto');
    return { status: 'success', result };
};

export { postProduct, getProducts, putProductImg, putProduct };