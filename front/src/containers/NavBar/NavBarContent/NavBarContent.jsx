import './navBarContent.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBarMenu from '../NavBarMenu/NavBarMenu.jsx';
import Icons from '../../../components/Icons/Icons.jsx';
import Tooltip from '../../../components/tools/Tooltip/Tooltip.jsx';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { useConfigContext } from '../../../context/ConfigContext.jsx';

const NavBarContent = () => {

    const { user, current } = useLoginContext();
    const { getConfigPage } = useConfigContext();

    useEffect(() => { current() }, []);
    useEffect(() => { getConfigPage() }, []);

    return (
        <div className='navBarContent'>

            <Link to={'/'} className='navBarContentA'>
                <img src='/logo.png' alt="img" />
                <h1>Punto Mercado</h1>
            </Link>

            <section>

                {!user.logged
                    ? <div>
                        <Tooltip text='Iniciar sesión' position='left' backgroundColor='#2C5469'>
                            <Link to={'/login'}>
                                <Icons type='user' size='40px' color='#2C5469' hover={true} />
                            </Link>
                        </Tooltip>
                    </div>
                    : <NavBarMenu user={user.data} />
                }
            </section>

        </div>
    );
};

export default NavBarContent;