import * as orderService from '../services/order.service.js';
import { OrderNotFound } from '../utils/custom-exceptions.utils.js';

const postOrder = async (req, res) => {
    try {
        const result = await orderService.postOrder({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { postOrder };