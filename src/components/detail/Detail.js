import { projectData } from '../../tools/utils';

import './detail.scss';

import Seperator from '../seperator/Seperator';

import bpmFirstSmall from '../../images/bpm/bpm-first-300.png';
import bpmFirstMedium from '../../images/bpm/bpm-first-768.png';
import bpmFirstLarge from '../../images/bpm/bpm-first-1280.png';
import bpmSecondSmall from '../../images/bpm/bpm-second-300.png';
import bpmSecondMedium from '../../images/bpm/bpm-second-768.png';
import bpmSecondLarge from '../../images/bpm/bpm-second-1280.png';
import bpmThirdSmall from '../../images/bpm/bpm-third-300.png';
import bpmThirdMedium from '../../images/bpm/bpm-third-768.png';
import bpmThirdLarge from '../../images/bpm/bpm-third-1280.png';
import bpmForthSmall from '../../images/bpm/bpm-forth-300.png';
import bpmForthMedium from '../../images/bpm/bpm-forth-768.png';
import bpmForthLarge from '../../images/bpm/bpm-forth-1280.png';
import bpmFifthSmall from '../../images/bpm/bpm-fifth-300.png';
import bpmFifthMedium from '../../images/bpm/bpm-fifth-768.png';
import bpmFifthLarge from '../../images/bpm/bpm-fifth-1280.png';
import bpmSixthSmall from '../../images/bpm/bpm-sixth-300.png';
import bpmSixthMedium from '../../images/bpm/bpm-sixth-768.png';
import bpmSixthLarge from '../../images/bpm/bpm-sixth-1280.png';
import schematicSmall from '../../images/bpm/schematic-300.jpg';
import schematicMedium from '../../images/bpm/schematic-768.jpg';
import schematicLarge from '../../images/bpm/schematic-1280.jpg';

import ccSchematicSmall from '../../images/cc/cc-schematic-300.png';
import ccSchematicMedium from '../../images/cc/cc-schematic-768.png';
import ccSchematicLarge from '../../images/cc/cc-schematic-1280.png';
import ccFirstSmall from '../../images/cc/cc-first-300.png';
import ccFirstMedium from '../../images/cc/cc-first-768.png';
import ccFirstLarge from '../../images/cc/cc-first-1280.png';
import ccSecondSmall from '../../images/cc/cc-second-300.png';
import ccSecondMedium from '../../images/cc/cc-second-768.png';
import ccSecondLarge from '../../images/cc/cc-second-1280.png';
import ccThirdSmall from '../../images/cc/cc-third-300.png';
import ccThirdMedium from '../../images/cc/cc-third-768.png';
import ccThirdLarge from '../../images/cc/cc-third-1280.png';
import ccForthSmall from '../../images/cc/cc-forth-300.png';
import ccForthMedium from '../../images/cc/cc-forth-768.png';
import ccForthLarge from '../../images/cc/cc-forth-1280.png';
import ccFifthSmall from '../../images/cc/cc-fifth-300.png';
import ccFifthMedium from '../../images/cc/cc-fifth-768.png';
import ccFifthLarge from '../../images/cc/cc-fifth-1280.png';

import obFirstSmall from '../../images/ob/OB-first-300.png';
import obFirstMedium from '../../images/ob/OB-first-768.png';
import obFirstLarge from '../../images/ob/OB-first-1280.png';
import obSecondSmall from '../../images/ob/OB-second-300.png';
import obSecondMedium from '../../images/ob/OB-second-768.png';
import obSecondLarge from '../../images/ob/OB-second-1280.png';

import portSmall from '../../images/port/port-first-300.png';
import portMedium from '../../images/port/port-first-768.png';
import portLarge from '../../images/port/port-first-1280.png';



const Detail = ({ content }) => {
    return (
        <div className="detail-container">
            <div className="detail-description-container">
                <h1 className="detail-title">{projectData[content].title}</h1>

                <a
                    href={projectData[content].url}
                    className="link-text"
                    target='_blank'
                    rel="noreferrer"
                >{projectData[content].linkText}</a>

                {projectData[content].description.map((paragraph) => (
                    <p className="detail-description">{paragraph}</p>
                ))}

                <a
                    className="detail-link-container"
                    href={projectData[content].githubUrl}
                    target='_blank'
                    rel="noreferrer"
                >
                    <i className="detail-icon fa fa-github" aria-hidden="true"></i>
                    <p className="detail-icon-text">view the code</p>
                </a>
            </div>

            <div className="tech-container">
                <h1 className="tech-title">Technologies Used</h1>
                {projectData[content].tech.map((technology, index) => (
                    <div className="tech-div" key={`${index}techBox`}>
                        <p>{technology}</p>
                    </div>
                ))}
            </div>
            <Seperator />

            {content === 'bpm' &&
                <div className="detail-images-container">
                    <img
                        src={schematicSmall}
                        srcSet={`${schematicSmall} 600w, ${schematicMedium} 1068w, ${schematicLarge} 1580w`}
                        alt={projectData[content].alt + ' schematic'}
                        className="detail-image"
                    />
                    <Seperator />

                    <img
                        src={bpmFirstSmall}
                        srcSet={`${bpmFirstSmall} 600w, ${bpmFirstMedium} 1068w, ${bpmFirstLarge} 1580w`}
                        alt={projectData[content].alt + 'first'}
                        className="detail-image"
                    />
                    <Seperator />

                    <img
                        src={bpmSecondSmall}
                        srcSet={`${bpmSecondSmall} 600w, ${bpmSecondMedium} 1068w, ${bpmSecondLarge} 1580w`}
                        alt={projectData[content].alt + 'second'}
                        className="detail-image"
                    />
                    <Seperator />

                    <img
                        src={bpmThirdSmall}
                        srcSet={`${bpmThirdSmall} 600w, ${bpmThirdMedium} 1068w, ${bpmThirdLarge} 1580w`}
                        alt={projectData[content].alt + 'third'}
                        className="detail-image"
                    />
                    <Seperator />

                    <img
                        src={bpmForthSmall}
                        srcSet={`${bpmForthSmall} 600w, ${bpmForthMedium} 825w, ${bpmForthLarge} 1580w`}
                        alt={projectData[content].alt + 'forth'}
                        className="detail-image"
                    />
                    <Seperator />

                    <img
                        src={bpmFifthSmall}
                        srcSet={`${bpmFifthSmall} 600w, ${bpmFifthMedium} 1068w, ${bpmFifthLarge} 1580w`}
                        alt={projectData[content].alt + 'fifth'}
                        className="detail-image"
                    />
                    <Seperator />

                    <img
                        src={bpmSixthSmall}
                        srcSet={`${bpmSixthSmall} 600w, ${bpmSixthMedium} 1068w, ${bpmSixthLarge} 1580w`}
                        alt={projectData[content].alt + 'sixth'}
                        className="detail-image"
                    />
                    <Seperator />
                </div>}

                {content === 'cc' &&
                    <div className="detail-images-container">
                        <img
                            src={ccSchematicSmall}
                            srcSet={`${ccSchematicSmall} 600w, ${ccSchematicMedium} 1068w, ${ccSchematicLarge} 1580w`}
                            alt={projectData[content].alt + ' schematic'}
                            className="detail-image"
                        />
                        <Seperator />

                        <img
                            src={ccFirstSmall}
                            srcSet={`${ccFirstSmall} 600w, ${ccFirstMedium} 1068w, ${ccFirstLarge} 1580w`}
                            alt={projectData[content].alt + ' first'}
                            className="detail-image"
                        />
                        <Seperator />

                        <img
                            src={ccSecondSmall}
                            srcSet={`${ccSecondSmall} 600w, ${ccSecondMedium} 1068w, ${ccSecondLarge} 1580w`}
                            alt={projectData[content].alt + ' second'}
                            className="detail-image"
                        />
                        <Seperator />

                        <img
                            src={ccThirdSmall}
                            srcSet={`${ccThirdSmall} 600w, ${ccThirdMedium} 1068w, ${ccThirdLarge} 1580w`}
                            alt={projectData[content].alt + ' third'}
                            className="detail-image"
                        />
                        <Seperator />

                        <img
                            src={ccForthSmall}
                            srcSet={`${ccForthSmall} 600w, ${ccForthMedium} 1068w, ${ccForthLarge} 1580w`}
                            alt={projectData[content].alt + ' forth'}
                            className="detail-image"
                        />
                        <Seperator />

                        <img
                            src={ccFifthSmall}
                            srcSet={`${ccFifthSmall} 600w, ${ccFifthMedium} 1068w, ${ccFifthLarge} 1580w`}
                            alt={projectData[content].alt + ' fifth'}
                            className="detail-image"
                        />
                        <Seperator />
                    </div>
                }

                {content === 'oe' &&
                    <div className="detail-images-container">
                        <img
                            src={obFirstSmall}
                            srcSet={`${obFirstSmall} 600w, ${obFirstMedium} 1068w, ${obFirstLarge} 1580w`}
                            alt={projectData[content].alt + ' openbook'}
                            className="detail-image"
                        />
                        <Seperator />

                        <img
                            src={obSecondSmall}
                            srcSet={`${obSecondSmall} 600w, ${obSecondMedium} 1068w, ${obSecondLarge} 1580w`}
                            alt={projectData[content].alt + ' openbook'}
                            className="detail-image"
                        />
                        <Seperator />
                    </div>
                }

                {content === 'port' &&
                    <div className="detail-images-container">
                        <img
                            src={portSmall}
                            srcSet={`${portSmall} 600w, ${portMedium} 1068w, ${portLarge} 1580w`}
                            alt={projectData[content].alt + ' port'}
                            className="detail-image"
                        />
                        <Seperator />
                    </div>
                }
        </div>
     );
}

export default Detail;
