import { orderRepository } from '../repositories/index.repositories.js';
import { OrderNotFound } from '../utils/custom-exceptions.utils.js';
import { isUserUtils } from "../utils/utilsServices/users.utils.js";

const postOrder = async (body) => {
    const { user, ...rest } = body;
    // const isUser = await isUserUtils(user);
    const isUser = {
        userId: '68a3bbac03f3581ac8e9f272',
        accesToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJDYXRhIHdlYiIsImVtYWlsIjoiY2F0YXdlYi5hckBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRYWHlMbnYxOEVYbkZPRGVPTjIvYWcuWTFqbEYwNjVFTWR2SUZBbVNXS0pGbzdHVi5XdG5HTyIsImxvY2F0aW9uIjp7ImNpdHkiOiJNb3JvbiIsImFkZHJlc3MiOiJBdmVsbGFuZWRhIDI2NDcifSwiYXZhdGFyIjpbXSwiYWN0aXZlIjp0cnVlLCJwaG9uZSI6IjExMjM0NTY3ODkiLCJyb2xlIjoidXNlciIsImZhdm9yaXRlcyI6W10sIl9pZCI6IjY4YTNiYmFjMDNmMzU4MWFjOGU5ZjI3MiIsImNyZWF0ZWQiOiIyMDI1LTA4LTE4VDIzOjQ3OjU2LjI3OFoiLCJfX3YiOjB9LCJpYXQiOjE3NTU1NjA4NzZ9.hDRvjZN9OaOhVDhHq_RGrct53zGeeHczh8sUNrYEBno'
    };
    // const result = await orderRepository.postOrder({ ...rest, userId: isUser.userId });
    // if(!result) throw new OrderNotFound('Error al crear la orden');
    const result = {
        userId: '68a3bbac03f3581ac8e9f272',
        pay: 'cash',
        cart: [
            {
                pid: '68968a84c6c8c09add67b33a',
                quantity: 12,
                price: 865,
                _id: '68a3bff508cfb9c0a6e4f731'
            },
            {
                pid: '6893b045b9d08f81602498d3',
                quantity: 1,
                price: 5809,
                _id: '68a3bff508cfb9c0a6e4f732'
            },
            {
                pid: '6895061242fb10b4e0dfc27f',
                quantity: 6,
                price: 877,
                _id: '68a3bff508cfb9c0a6e4f733'
            }
        ],
        coupon: '1234',
        active: true,
        status: 'pending',
        _id: '68a3bff508cfb9c0a6e4f730',
        date: '2025-08-19T00:06:13.090Z',
        __v: 0
    };

    return {
        status: 'success',
        result,
        isUser: body._id ? true : false,
        accesToken: isUser?.accesToken || null
    }
};

export { postOrder }; 