import { useAlertContext } from "./AlertContext";
import { createContext, useContext, useState } from "react";
import { postConfigApi } from "../helpers/configs/postConfig.api.js";
import { getConfigPageApi } from "../helpers/configs/getConfigPage.api.js";

const ConfigContext = createContext();
export const useConfigContext = () => useContext(ConfigContext);

const ConfigProvider = ({ children }) => {

    const { showAlert, setLoading } = useAlertContext();

    const [config, setConfig] = useState({ days: [], businessDay: false });

    const update = async () => {
        setLoading(true);
        const response = await postConfigApi(config);
        if (response.status === 'success') {
            setConfig(response.result);
            showAlert('Configuración exitosa');
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    const getConfigPage = async () => {
        const response = await getConfigPageApi();
        if(response.status === 'success') setConfig(response.result);
    }; 

    return (
        <ConfigContext.Provider value={{ config, setConfig, update, getConfigPage }}>
            {children}
        </ConfigContext.Provider>
    );
};

export default ConfigProvider;