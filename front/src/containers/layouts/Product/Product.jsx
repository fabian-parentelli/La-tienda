import './product.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAlertContext } from '../../../context/AlertContext';
import Counter from '../../../components/utils/Counter/Counter.jsx';
import { getProductsApi } from '../../../helpers/product/getProducts.api.js';

const Product = () => {

    const { id } = useParams();
    const { showAlert, setLoading } = useAlertContext();

    const [product, setProduct] = useState(null);
    const [preCounter, setPreCounter] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getProductsApi({ id });
            if (response.status === 'success') setProduct(response.result.docs[0]);
            else showAlert(response.error, 'error');
            setLoading(false);
        }; fetchData();
    }, [id]);

    console.log(preCounter);

    if (product) return (
        <div className='product'>
            <section className='productSect'>

                <img src={product.img} alt="product" />

                <div className='productSectData'>
                    <div className='productSectDataLinks'>
                        <Link to={'/productquery'} >{product.category} /</Link>
                        <Link to={'/productquery'} > {product.subCategory} /</Link>
                        <Link to={'/productquery'} > {product.brand}</Link>
                    </div>

                    <div>
                        <h2>{product.name} {product.description}</h2>
                        <p className='pcolorA'>{product.brand}</p>
                    </div>

                    <div className='productLine'>
                        <p className='productPrice'>${preCounter < product.box
                            ? product.price
                            : product.price - (Math.round(product.price * product.discount / 100))
                        }</p>
                        <p className='pgray'>Precio por bulto cerrado ${product.price - (Math.round(product.price * product.discount / 100))}</p>
                    </div>

                    <div className='productCounter'>
                        <Counter preCounter={preCounter} setPreCounter={setPreCounter} box={product.box} />
                        <p>{product.unit}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;