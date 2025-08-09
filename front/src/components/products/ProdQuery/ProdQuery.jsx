import './prodQuery.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pager from '../../tools/Pager/Pager.jsx';
import ProductCard from '../ProductCard/ProductCard';
import BodyNav from '../../../containers/Body/BodyNav/BodyNav';
import { useAlertContext } from '../../../context/AlertContext';
import BodyBanner from '../../../containers/Body/BodyBanner/BodyBanner.jsx';
import { getProductsApi } from '../../../helpers/product/getProducts.api.js';

const ProdQuery = () => {

    const { type, name } = useParams();
    const { showAlert, setLoading } = useAlertContext();

    const [query, setQuery] = useState({ [type]: name, active: true, limit: 40 });
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getProductsApi(query);
            if (response.status === 'success') setProducts(response.result);
            else showAlert(response.error, 'error');
            setLoading(false);
        }; fetchData();
    }, [query]);

    return (
        <div className='prodQuery'>
            <BodyNav />
            <BodyBanner />
            <h2>{name}</h2>
            <section className='prodQuerySect'>
                {products && products.docs.map(prod => (
                    <ProductCard key={prod._id} product={prod} />
                ))}
            </section>
            <Pager docs={products} setQuery={setQuery} />
        </div>
    );
};

export default ProdQuery;