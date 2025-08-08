import './body.css';
import BodyBanner from './BodyBanner/BodyBanner';
import BodyNav from './BodyNav/BodyNav';

const Body = () => {

    return (
        <div className='body'>
            <BodyNav />
            <BodyBanner />
        </div>
    );
};

export default Body;