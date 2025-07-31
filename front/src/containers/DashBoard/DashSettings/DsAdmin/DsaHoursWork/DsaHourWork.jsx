import './dsaHourWork.css';
import { useState } from 'react';
import Icons from '../../../../../components/Icons/Icons.jsx';
import Swicth from '../../../../../components/tools/Switch/Switch.jsx';
import { useConfigContext } from '../../../../../context/ConfigContext';
import Tooltip from '../../../../../components/tools/Tooltip/Tooltip.jsx';
import { dyasInSpanish, orderDays } from '../../../../../utils/categories/configs.cat.js';

const DsaHourWork = () => {

    const { config, setConfig } = useConfigContext();

    const businessDays = ['mo', 'tu', 'we', 'th', 'fr'];

    const handleCut = ({ day, cut }) => {
        setConfig(prev => {
            const shouldSync = config.businessDay && businessDays.includes(day);
            const newCut = !cut;
            const updatedDays = prev.days.map(d => shouldSync
                ? businessDays.includes(d.day) ? { ...d, cut: newCut } : d
                : d.day === day ? { ...d, cut: newCut } : d
            );
            return { ...prev, days: updatedDays };
        });
    };

    const handleChange = (e, day) => {
        const { name, value } = e.target;
        setConfig(prev => {
            const shouldSync = config.businessDay && businessDays.includes(day);
            const updatedDays = prev.days.map(d => shouldSync
                ? businessDays.includes(d.day) ? { ...d, [name]: value } : d
                : d.day === day ? { ...d, [name]: value } : d
            );
            return { ...prev, days: updatedDays };
        });
    };

    return (
        <div className='dsaHourWork dashCard column'>
            <h3 className='colorA'>Horario laboral</h3>

            <Swicth
                values={config} setValues={setConfig}
                name='businessDay' activeColor='#336e99'
                label='Todos los días hábiles (lunes a viernes) con el mismo horario'
            />

            <table>
                <thead>
                    <tr>
                        <th>Día</th>
                        <th>Cortado</th>
                        <th>Apertura</th>
                        <th>descanzo</th>
                        <th>reinicio</th>
                        <th>Cierre</th>
                    </tr>
                </thead>
                <tbody>
                    {config.days.length > 0 && config.days
                        .sort((a, b) => orderDays.indexOf(a.day) - orderDays.indexOf(b.day))
                        .map(conf => (
                            <tr key={conf.day}>
                                <td>{dyasInSpanish(conf.day)}</td>

                                <td className='tdBack'>
                                    <Tooltip text={!conf.cut ? 'Convertir a Cortado' : 'Convertir a Corrido'} backgroundColor='#005F73' position='right'>
                                        <Icons
                                            type={conf.cut ? 'success' : 'error'}
                                            color={conf.cut ? '#336e99' : '#FF6F59'}
                                            onClick={() => handleCut(conf)}
                                        />
                                    </Tooltip>
                                </td>
                                <td><input type="time" name='hin' value={conf.hin} onChange={(e) => handleChange(e, conf.day)} /></td>
                                <td>{conf.cut ? <input type="time" name='hCutIn' value={conf.hCutIn} onChange={(e) => handleChange(e, conf.day)} /> : <p className='pgray'>Horario continuo</p>}</td>
                                <td>{conf.cut ? <input type="time" name='hCutOut' value={conf.hCutOut} onChange={(e) => handleChange(e, conf.day)} /> : <p className='pgray'>Horario continuo</p>}</td>
                                <td><input type="time" name='hout' value={conf.hout} onChange={(e) => handleChange(e, conf.day)} /></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default DsaHourWork;