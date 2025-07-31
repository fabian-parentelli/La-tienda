import './dsAdmin.css';
import DsaDaysWork from './DsaDaysWork/DsaDaysWork';
import DsaHourWork from './DsaHoursWork/DsaHourWork';
import { useConfigContext } from '../../../../context/ConfigContext';

const DsAdmin = () => {

    const { config, update } = useConfigContext();

    return (
        <div className='dsAdmin'>

            <section className='dsAdminDayHour'>
                <DsaDaysWork />
                <DsaHourWork />
            </section>
            
            <button className='btn btnA' onClick={update}>
                {config?._id ? 'Actulaizar' : 'Crear'}
            </button>
        </div>
    );
};

export default DsAdmin;