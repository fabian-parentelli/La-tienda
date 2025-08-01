import UserRouter from "./users.router.js";
import ConfigRouter from "./config.router.js";
import AvatarRouter from "./avatar.router.js";
import ProductRouter from './products.router.js'

export const userRouter = new UserRouter().getRouter();
export const configRouter = new ConfigRouter().getRouter();
export const avatarRouter = new AvatarRouter().getRouter();
export const productRouter = new ProductRouter().getRouter();