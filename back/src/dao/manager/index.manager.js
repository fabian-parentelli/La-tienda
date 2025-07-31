import User from './users.manager.js';
import Activity from './activity.manager.js';
import Alerts from './alerts.manager.js';
import Config from './config.manager.js';
import Avatar from './avatar.manager.js';

export const userManager = new User();
export const activityManager = new Activity();
export const alertManager = new Alerts();
export const configManager = new Config();
export const avatarManager = new Avatar();