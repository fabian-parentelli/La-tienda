import { configManager } from '../dao/manager/index.manager.js';

export default class ConfigRepository {

    postConfig = async (config) => {
        const result = await configManager.postConfig(config);
        return result;
    };

    getById = async (id) => {
        const result = await configManager.getById(id);
        return result;
    };
    
    getConfig = async (query) => {
        const result = await configManager.getConfig(query);
        return result;
    };

    update = async (config) => {
        const result = await configManager.update(config);
        return result;
    };

};