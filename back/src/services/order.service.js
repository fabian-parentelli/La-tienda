import { orderRepository } from '../repositories/index.repositories.js';
import { OrderNotFound } from '../utils/custom-exceptions.utils.js';
import { isUserUtils } from "../utils/utilsServices/users.utils.js";

const postOrder = async (body) => {
    const { user, ...rest } = body;
    const isUser = await isUserUtils(user);
    const result = await orderRepository.postOrder({ ...rest, userId: isUser.userId });
    if (!result) throw new OrderNotFound('Error al crear la orden');
    return {
        status: 'success',
        result,
        isUser: body._id ? true : false,
        accesToken: isUser?.accesToken || null
    }
};

export { postOrder }; 