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
                srcSet={`${bpmSmall} 700w, ${bpmMedium} 1180w, ${bpmLarge} 1680w, ${bpmXLarge} 3600w`}
                alt={projectData[content].alt}
                className="project-image"
            />}

            {content === 'cc' && <img
                src={ccSmall}
                srcSet={`${ccSmall} 700w, ${ccMedium} 1180w, ${ccLarge} 1680w, ${ccXLarge} 3600w`}
                alt={projectData[content].alt}
                className="project-image"
            />}

            {content === 'oe' && <img
                src={obSmall}
                srcSet={`${obSmall} 700w, ${obMedium} 1180w, ${obLarge} 1680w, ${obXLarge} 3600w`}
                alt={projectData[content].alt}
                className="project-image"
            />}

            {content === 'port' && <img
                src={portSmall}
                srcSet={`${portSmall} 700w, ${portMedium} 1180w, ${portLarge} 1680w, ${portXLarge} 3600w`}
                alt={projectData[content].alt}
                className="project-image"
            />}

            <div
                className="project-title"
            >{ projectData[content].title }</div>
        </Link>
     );
}

export default Project;
