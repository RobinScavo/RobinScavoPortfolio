import './header.scss';

import chevron from '../../images/icons/chevron.png';

const Header = () => {
    const devText = '{ developer }';

    return (
        <section className="header-container">
            <div className="title-container">
                <div className="icon-container">
                    <img
                        src={chevron}
                        alt="Hand Drawn Chevron by Max Miner from NounProject.com"
                        className="chevron"
                    />
                </div>

                <h2 className="header-title">robin scavo <span className="title-span">{ devText }</span></h2>

                <div className="header-links">

                    <a className="link-container" href={`mailto:sirscavo@gmail.com`}>
                        <i className="email-icon header-icon fa fa-envelope" aria-hidden="true"></i>
                        <p className="icon-text">email</p>
                    </a>

                    <a className="link-container" href={'https://docs.google.com/document/d/1t85UlbQteZQY4BHjgfoOR-ycsoqqdy3DtlFalbb8J98/edit?usp=sharing'} target='_blank' rel="noreferrer">
                        <i className="email-icon header-icon fa-solid fa-bars-staggered" aria-hidden="true"></i>
                        <p className="icon-text">resume</p>
                    </a>

                    <a className="link-container" href='https://github.com/RobinScavo' target='_blank' rel="noreferrer">
                        <i className="header-icon fa fa-github" aria-hidden="true"></i>
                        <p className="icon-text">github</p>
                    </a>

                    <a className="link-container" href='https://www.linkedin.com/in/robin-scavo-0617881b5/' target='_blank' rel="noreferrer">
                        <i className="header-icon fa fa-linkedin-square" aria-hidden="true"></i>
                        <p className="icon-text">linkedin</p>
                    </a>
                </div>
            </div>
            <p className="available-text">available for work</p>
        </section>
     );
}

export default Header;
