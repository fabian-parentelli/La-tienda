import UserRepository from './user.repositories.js';
import ActivityRepository from './activity.repositories.js';
import AlertRepository from './alert.repositories.js';
import ConfigRepository from './config.repositories.js';
import AvatarRepository from './avatar.repositories.js';
import ProductRepository from './product.repositories.js';

export const userRepository = new UserRepository();
export const activityRepository = new ActivityRepository();
export const alertRepository = new AlertRepository();
export const configRepository = new ConfigRepository();
export const avatarRepository = new AvatarRepository();
export const productRepository = new ProductRepository();