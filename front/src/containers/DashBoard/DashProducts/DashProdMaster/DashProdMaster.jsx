import { useState } from "react";
import ProductsNew from "../../../../components/products/ProductsNew/ProductsNew";

const DashProdMaster = () => {

    const [vew, setVew] = useState(null);

    const handleVew = (v) => setVew(vew === v ? null : v);

    return (
        <div className='column'>
            <section className="btns">
                <button className="btn btnA" onClick={() => handleVew('new')} style={{ color: vew === 'new' ? '#F4B942' : '' }}>Crear</button>
                <button className="btn btnA" onClick={() => handleVew('vew')} style={{ color: vew === 'vew' ? '#F4B942' : '' }}>Ver</button>
            </section>

            {!vew && <p>Gráficas</p>}
            {vew === 'new' && <ProductsNew />}
            {vew === 'vew' && <p>Tabla de productos</p>}
        </div>
    );
};

export default DashProdMaster;