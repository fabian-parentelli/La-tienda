import './counter.css';
import { useState } from 'react';
import Icons from '../../Icons/Icons';
import Tooltip from '../../tools/Tooltip/Tooltip';

const Counter = ({ preCounter, setPreCounter, box }) => {

    const [counter, setCounter] = useState(preCounter || 1);

    const handleChange = (type) => {
        setCounter(prev => type === 'add' ? prev + 1 : prev - 1);
        setPreCounter(prev => type === 'add' ? prev + 1 : prev - 1);
    };

    const handleBox = () => {
        setCounter(box);
        setPreCounter(box);
    };

    return (
        <div className='counter'>

            <div className='counterArrow' onClick={() => counter > 1 ? handleChange('res') : null}>
                <Icons type='arrowleft' color={counter === 1 ? 'gray' : '#2C5469'} />
            </div>

            <p className='counterOne'>{counter}</p>

            <div className='counterArrow' onClick={() => handleChange('add')}>
                <Icons type='arrowright' />
            </div>

            {box &&
                <div className='counterCounter' onClick={() => handleBox()}>
                    <Tooltip text={`Caja ${box} unidades`}>
                        <Icons type='icon' hover={true} size='25px' />
                    </Tooltip>
                </div>
            }
        </div>
    );
};

export default Counter;