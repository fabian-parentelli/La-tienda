import { configModel } from '../models/config.model.js';

export default class Config {

    postConfig = async (config) => {
        return await configModel.create(config);
    };

    getById = async (id) => {
        return await configModel.findById(id).lean();
    };

    getConfig = async (query) => {
        return await configModel.findOne(query).lean();
    };

    update = async (config) => {
        return await configModel.findByIdAndUpdate(config._id, config, { lean: true, new: true });
    };

};