import './productsNew.css';
import { useState } from 'react';
import Icons from '../../Icons/Icons';
import Tooltip from '../../tools/Tooltip/Tooltip';

const ProductsNew = () => {

    const [values, setValues] = useState(null);
    const [formdata, setFormdata] = useState(new FormData());

    const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    return (
        <form className='productsNew'>

            <section className='column'>
                <label>
                    Nombre
                    <input
                        type="text" name='name' value={values?.name || ''} onChange={handleChange}
                        placeholder='Nombre del producto' required
                    />
                </label>

                <label>
                    Unidades por bulto
                    <input
                        type="text" name='box' value={values?.box || ''} onChange={handleChange}
                        required placeholder='0'
                    />
                </label>

                <label>
                    Precio
                    <input
                        type="text" name='price' value={values?.price || ''} onChange={handleChange}
                        required placeholder='0'
                    />
                </label>

                <div className='productsNewPreMod'>
                    <label>
                        Categoría
                        <select name="category" value={values?.category || ''} onChange={handleChange} required>

                        </select>
                    </label>
                </div>

            </section>

            <section className='column'>
                <label>
                    Descripción
                    <input
                        type="text" name='description' value={values?.description || ''} onChange={handleChange}
                        placeholder='Espesificación adicional' required
                    />
                </label>

                <label>
                    Unidad de medida
                    <select name="unit" value={values?.unit || ''} onChange={handleChange} required>
                        <option value="" hidden>Unidad de medida</option>
                        <option value="unit">Un</option>
                        <option value="liter">Li</option>
                        <option value="gram">Gr</option>
                        <option value="kilo">Ki</option>
                    </select>
                </label>

                <label>
                    Stock
                    <input
                        type="text" name='stock' value={values?.stock || ''} onChange={handleChange}
                        placeholder='Stock, no obligatorio'
                    />
                </label>

                <div className='productsNewPreMod'>
                    <label>
                        Sub-categoría
                        <select name="subCategory" value={values?.subCategory || ''} onChange={handleChange} required>

                        </select>
                    </label>
                    <Tooltip text='Agregar' backgroundColor='#2C5469'>
                        <Icons type='event' hover={true} color='#2C5469' />
                    </Tooltip>
                </div>
            </section>

        </form>
    );
};

export default ProductsNew;