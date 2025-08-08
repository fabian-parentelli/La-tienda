import './navBarContSearch.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icons from '../../../../components/Icons/Icons';
import { useConfigContext } from '../../../../context/ConfigContext';
import { AutoComplete } from '../../../../components/tools/AutoComplete/AutoComplete';

const NavBarContSearch = () => {

    const navigate = useNavigate();
    const { config } = useConfigContext();

    const [id, setId] = useState(null);
    const [name, setName] = useState([]);

    useEffect(() => {
        if (config && config.products) {
            setName(config.products.map(prod => {
                return { label: `${prod.name} ${prod.brand} ${prod.description}`, _id: prod._id };
            }));
        };
    }, [config]);

    useEffect(() => {
        if (id) navigate(`/product/${id._id}`);
        else setId(null);
    }, [id]);

    return (
        <div className='navBarContSearch'>
            <div className='navBarContSearchIcons'><Icons type='search' size='43px' /></div>
            <AutoComplete
                options={name} setData={setId} selectedId={id?._id || null}
                style={{ placeholder: 'Producto' }}
            />
        </div>
    );
};

export default NavBarContSearch;