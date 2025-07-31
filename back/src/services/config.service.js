import { configRepository, activityRepository } from "../repositories/index.repositories.js";
import { ConfigNotFound } from '../utils/custom-exceptions.utils.js';

const getConfigPage = async () => {
    const result = await configRepository.getConfig({ role: 'admin' });
    if (!result) throw new ConfigNotFound('Error al traer la configuración');
    return { status: 'success', result };
};

const postConfig = async (body, { user }) => {
    let result;
    if (!body._id) result = await configRepository.postConfig({ ...body, role: user.role, userId: user._id });
    else {
        const config = await configRepository.getById(body._id);
        if (!config) throw new ConfigNotFound('Error al traer la configuración');
        const newConf = { ...config, ...body };
        result = await configRepository.update(newConf);
    };
    if (!result) throw new ConfigNotFound('Error al actualizar la base de datos');
    await activityRepository.create({ eventId: result._id, userId: user.role === 'admin' ? 'admin' : user._id, type: 'updconfig' });
    return { status: 'success', result };
};

export { getConfigPage, postConfig };