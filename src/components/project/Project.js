import { projectData } from '../../tools/utils';

import { Link } from 'react-router-dom'

import bpmSmall from '../../images/bpm/bpm-300.png';
import bpmMedium from '../../images/bpm/bpm-768.png';
import bpmLarge from '../../images/bpm/bpm-1280.png';
import bpmXLarge from '../../images/bpm/bpm-3200.png';

import ccSmall from '../../images/cc/cc-300.png';
import ccMedium from '../../images/cc/cc-768.png';
import ccLarge from '../../images/cc/cc-1280.png';
import ccXLarge from '../../images/cc/cc-3200.png';

import obSmall from '../../images/ob/OB-300.png';
import obMedium from '../../images/ob/OB-768.png';
import obLarge from '../../images/ob/OB-1280.png';
import obXLarge from '../../images/ob/OB-3200.png';

import portSmall from '../../images/port/port-300.png';
import portMedium from '../../images/port/port-768.png';
import portLarge from '../../images/port/port-1280.png';
import portXLarge from '../../images/port/port-3200.png';


import './project.scss';

const Project = ({content}) => {
    return (
        <Link to={projectData[content].link} className="project-container">
            {content === 'bpm' && <img
                src={bpmSmall}
                srcSet={`${bpmSmall} 500w, ${bpmMedium} 968w, ${bpmLarge} 1480w, ${bpmXLarge} 3400w`}
                alt={projectData[content].alt}
                className="project-image"
            />}

            {content === 'cc' && <img
                src={ccSmall}
                srcSet={`${ccSmall} 500w, ${ccMedium} 968w, ${ccLarge} 1480w, ${ccXLarge} 3400w`}
                alt={projectData[content].alt}
                className="project-image"
            />}

            {content === 'oe' && <img
                src={obSmall}
                srcSet={`${obSmall} 500w, ${obMedium} 968w, ${obLarge} 1480w, ${obXLarge} 3400w`}
                alt={projectData[content].alt}
                className="project-image"
            />}

            {content === 'port' && <img
                src={portSmall}
                srcSet={`${portSmall} 500w, ${portMedium} 968w, ${portLarge} 1480w, ${portXLarge} 3400w`}
                alt={projectData[content].alt}
                className="project-image"
            />}

            {/* <Seperator /> */}

            <div
                className="project-title"
            >{ projectData[content].title }</div>

            {/* <div className="overlay"></div> */}
        </Link>
     );
}

export default Project;
