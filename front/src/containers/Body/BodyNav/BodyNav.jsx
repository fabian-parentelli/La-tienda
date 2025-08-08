import './bodyNav.css';
import { Link } from 'react-router-dom';

const BodyNav = () => {

    return (
        <div className='bodyNav'>
            <Link>Oportunidades</Link>
            <Link>Lanzamientos</Link>
            <Link>Envíos</Link>
            <Link>Bonificaciones</Link>
        </div>
    );
};

export default BodyNav;