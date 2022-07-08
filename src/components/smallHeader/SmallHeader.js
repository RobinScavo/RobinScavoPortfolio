import chevron from '../../images/icons/chevron.png';

import './smallHeader.scss';

const SmallHeader = ({ detail }) => {
    const devText = '{ developer }';
    const detailHeader = detail ? 'detail' : '';

    return (
        <section className={`small-header-container ${detailHeader}`}>
            <div className="small-title-container">
                <div className="small-icon-container">
                    <img
                        src={chevron}
                        alt="Hand Drawn Chevron by Max Miner from NounProject.com"
                        className="small-chevron"
                    />
                </div>

                <h2 className="small-header-title">robin scavo <span className="title-span">{ devText }</span></h2>

                <div className="small-header-links">
                    <a className="small-link-container" href={`mailto:sirscavo@gmail.com`}>
                        <i className="small-email-icon small-header-icon fa fa-envelope" aria-hidden="true"></i>
                        <p className="small-icon-text">email</p>
                    </a>

                    <a className="small-link-container" href={'https://docs.google.com/document/d/1t85UlbQteZQY4BHjgfoOR-ycsoqqdy3DtlFalbb8J98/edit?usp=sharing'} target='_blank' rel="noreferrer">
                        <i className="small-email-icon small-header-icon fa-solid fa-bars-staggered" aria-hidden="true"></i>
                        <p className="small-icon-text">resume</p>
                    </a>

                    <a className="small-link-container" href='https://github.com/RobinScavo' target='_blank' rel="noreferrer">
                        <i className="small-header-icon fa fa-github" aria-hidden="true"></i>
                        <p className="small-icon-text">github</p>
                    </a>

                    <a className="small-link-container" href='https://www.linkedin.com/in/robin-scavo-0617881b5/' target='_blank' rel="noreferrer">
                        <i className="small-header-icon fa fa-linkedin-square" aria-hidden="true"></i>
                        <p className="small-icon-text">linkedin</p>
                    </a>
                </div>
            </div>
        </section>
     );
}

export default SmallHeader;
