import './dashBannerNew.css';
import { useState } from 'react';
import CloudFile from '../../../../components/utils/CloudFile/CloudFile';

const DashBannerNew = () => {

    const [values, setValues] = useState(null);

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <form className='dashBannerNew'>

            <CloudFile contClass='cfRect' />

            <section className='dashBannerNewSect'>
                <label>
                    Nombre
                    <input
                        type="text" name='name' placeholder='Nombre'
                        value={values?.name || ''} onChange={handleChange}
                    />
                </label>

                <label>
                    Links
                    <input
                        type="text" name='link' placeholder='Link'
                        value={values?.link || ''} onChange={handleChange}
                    />
                </label>

                <label>
                    Tipo
                    <select name="">
                        <option value="" hidden>Tipo</option>
                        <option value="banner">Banner</option>
                        <option value="">otro</option>
                    </select>
                </label>

                <button className='btn btnA'>Subir</button>
            </section>

        </form>
    );
};

export default DashBannerNew;