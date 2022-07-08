import chevron from '../../images/icons/chevron.png';

import './seperator.scss';

const Seperator = () => {
    return (
        <div className="seperator-container">
            <img
                src={chevron}
                alt="Hand Drawn Chevron by Max Miner from NounProject.com"
                className="small-chevron"
            />
        </div>
     );
}

export default Seperator;
