import { orderManager } from '../dao/manager/index.manager.js';

export default class OrderRepository {

    postOrder = async (order) => {
        const result = await orderManager.postOrder(order);
        return result;
    };
    
};