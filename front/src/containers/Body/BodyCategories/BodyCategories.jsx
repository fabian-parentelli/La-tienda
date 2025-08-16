import './bodyCategories.css';
import { Link } from 'react-router-dom';
import HorizontalScroll from '../../../components/tools/HorizontalScroll/HorizontalScroll';

const BodyCategories = () => {

    return (
        <div className='bodyCategories'>
            <HorizontalScroll>

                <Link to={`/all`} className='bodyCategoriesSect' >
                    <div className='bodyCategoriesSectDiv'>
                        <img src='/logo.png' alt='logo' />
                    </div>
                    <p>Productos</p>
                </Link>

                {categories.map((cat) => (
                    <Link
                        key={cat.name}
                        to={`/prodquery/category/${cat.name}`}
                        className='bodyCategoriesSect'
                    >
                        <div className='bodyCategoriesSectDiv'>
                            <img src={cat.icon} alt={cat.name} />
                        </div>
                        <p>{cat.name}</p>
                    </Link>
                ))}
            </HorizontalScroll>
        </div>
    );
};

export default BodyCategories;

const categories = [
    { name: 'almacen', icon: 'https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754753528/shops_a5hba1.png' },
    { name: 'limpieza', icon: 'https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754753529/clean_utfbqy.png' },
    { name: 'lacteos', icon: 'https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754753529/dairy_sous2l.png' },
    { name: 'perfumeria', icon: 'https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754753527/perfumery_dslrkp.png' },
    { name: 'snack', icon: 'https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754753528/snack_zouxwt.png' },
    { name: 'frescos', icon: 'https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754753526/fresh_mumkoz.png' },
    { name: 'kiosko', icon: 'https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754753528/kiosko_lp5gwj.png' },
    { name: 'quesos', icon: 'https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754753529/chees_jy0og1.png' },
    { name: 'embutidos', icon: 'https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754753528/stiff_ffjqiw.png' },
    { name: 'dulces', icon: 'https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754753528/sweet_rje169.png' },
    { name: 'panaderia', icon: 'https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754753528/bread_tmwt58.png' },
    { name: 'verduleria', icon: 'https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754753527/fruts_gcpcaz.png' },
    { name: 'bebidas', icon: 'https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754753331/drinks_udo3l9.png' },
    { name: 'bebidas-al', icon: 'https://res.cloudinary.com/dc7dw9qg3/image/upload/v1754753330/alcoDrinks_vxfkyy.png' }
];