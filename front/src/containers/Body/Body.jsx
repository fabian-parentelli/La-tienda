import './body.css';
import BodyBanner from './BodyBanner/BodyBanner';
import BodyCategories from './BodyCategories/BodyCategories';
import BodyNav from './BodyNav/BodyNav';

const Body = () => {

    return (
        <div className='body'>
            <BodyNav />
            <BodyBanner />
            <BodyCategories />
        </div>
    );
};

export default Body;