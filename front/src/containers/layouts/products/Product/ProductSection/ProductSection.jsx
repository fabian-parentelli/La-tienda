import './productsSection.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../../../../../components/utils/Counter/Counter.jsx';
import FavoriteAd from '../../../../../components/utils/FavoriteAd/FavoriteAd.jsx';

const ProductsSection = ({ product }) => {

    const [preCounter, setPreCounter] = useState(1);

    if (product) return (
        <form className='productsSection'>
            <FavoriteAd id={product._id} />

            <img src={product.img} alt="product" />

            <section className='productSectData'>

                <div className='productSectDataLinks'>
                    <Link to={`/prodquery/category/${product.category}`} >{product.category} /</Link>
                    <Link to={`/prodquery/subCategory/${product.subCategory}`} > {product.subCategory} /</Link>
                    <Link to={`/prodquery/brand/${product.brand}`} > {product.brand}</Link>
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

                <div className='btns'>
                    <button className='btn btnA'>Agregar</button>
                    <button className='btn btnC'>Comprar</button>
                </div>

            </section>
        </form>
    );
};

export default ProductsSection;