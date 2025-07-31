import './dsaDaysWork.css';
import { useEffect, useState } from 'react';
import { useConfigContext } from '../../../../../context/ConfigContext';
import CheckBoxes from '../../../../../components/tools/CheckBoxes/CheckBoxes';

const DsaDaysWork = () => {

    const { config, setConfig } = useConfigContext();

    const [type, setType] = useState(null);

    useEffect(() => {
        if (!type) return;
        const updatedDays = type.map(dayId => {
            const existing = config.days.find(d => d.day === dayId);
            return (
                existing || { day: dayId, cut: false, hin: '', hout: '', hCutIn: '', hCutOut: '' }
            );
        });
        setConfig(prev => ({ ...prev, days: updatedDays }));
    }, [type]);

    return (
        <div className='DsaDaysWork dashCard column'>
            <h3 className='colorA'>Días laborales</h3>
            <CheckBoxes
                labels={labels} color='gray' boxColor='#336e99' direction='column'
                multiSelect={true} selecteds={config.days.map(d => d.day)} setType={setType}
            />
        </div>
    );
};

export default DsaDaysWork;

const labels = [
    { name: 'Lunes', _id: 'mo' },
    { name: 'Martes', _id: 'tu' },
    { name: 'Miércoles', _id: 'we' },
    { name: 'Jueves', _id: 'th' },
    { name: 'Viernes', _id: 'fr' },
    { name: 'Sábado', _id: 'sa' },
    { name: 'Domingo', _id: 'su' },
];