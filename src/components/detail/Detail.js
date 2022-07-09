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

import openbookSmall from '../../images/oe/openbook-300.png';
import openbookMedium from '../../images/oe/openbook-768.png';
import openbookLarge from '../../images/oe/openbook-1280.png';

import portSmall from '../../images/port/port-300.png';
import portMedium from '../../images/port/port-768.png';
import portLarge from '../../images/port/port-1280.png';



const Detail = ({ content }) => {
    return (
        <div className="detail-container">
            <div className="detail-description-container">
                <a
                    href={projectData[content].url}
                    className="detail-title"
                    target='_blank'
                    rel="noreferrer"
                >{projectData[content].title}</a>

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

            {content === 'bpm' &&
                <div className="detail-images-container">
                    <img
                        src={schematicSmall}
                        srcSet={`${schematicSmall} 400w, ${schematicMedium} 868w, ${schematicLarge} 1380w`}
                        alt={projectData[content].alt + ' schematic'}
                        className="detail-image"
                    />
                    <Seperator />

                    <img
                        src={bpmFirstSmall}
                        srcSet={`${bpmFirstSmall} 400w, ${bpmFirstMedium} 868w, ${bpmFirstLarge} 1380w`}
                        alt={projectData[content].alt + 'first'}
                        className="detail-image"
                    />
                    <Seperator />

                    <img
                        src={bpmSecondSmall}
                        srcSet={`${bpmSecondSmall} 400w, ${bpmSecondMedium} 868w, ${bpmSecondLarge} 1380w`}
                        alt={projectData[content].alt + 'second'}
                        className="detail-image"
                    />
                    <Seperator />

                    <img
                        src={bpmThirdSmall}
                        srcSet={`${bpmThirdSmall} 400w, ${bpmThirdMedium} 868w, ${bpmThirdLarge} 1380w`}
                        alt={projectData[content].alt + 'third'}
                        className="detail-image"
                    />
                    <Seperator />

                    <img
                        src={bpmForthSmall}
                        srcSet={`${bpmForthSmall} 450w, ${bpmForthMedium} 825w, ${bpmForthLarge} 1380w`}
                        alt={projectData[content].alt + 'forth'}
                        className="detail-image"
                    />
                    <Seperator />

                    <img
                        src={bpmFifthSmall}
                        srcSet={`${bpmFifthSmall} 400w, ${bpmFifthMedium} 868w, ${bpmFifthLarge} 1380w`}
                        alt={projectData[content].alt + 'fifth'}
                        className="detail-image"
                    />
                    <Seperator />

                    <img
                        src={bpmSixthSmall}
                        srcSet={`${bpmSixthSmall} 400w, ${bpmSixthMedium} 868w, ${bpmSixthLarge} 1380w`}
                        alt={projectData[content].alt + 'sixth'}
                        className="detail-image"
                    />
                    <Seperator />
                </div>}

                {content === 'cc' &&
                    <div className="detail-images-container">
                        <img
                            src={ccSchematicSmall}
                            srcSet={`${ccSchematicSmall} 400w, ${ccSchematicMedium} 868w, ${ccSchematicLarge} 1380w`}
                            alt={projectData[content].alt + ' schematic'}
                            className="detail-image"
                        />
                        <Seperator />

                        <img
                            src={ccFirstSmall}
                            srcSet={`${ccFirstSmall} 400w, ${ccFirstMedium} 868w, ${ccFirstLarge} 1380w`}
                            alt={projectData[content].alt + ' first'}
                            className="detail-image"
                        />
                        <Seperator />

                        <img
                            src={ccSecondSmall}
                            srcSet={`${ccSecondSmall} 400w, ${ccSecondMedium} 868w, ${ccSecondLarge} 1380w`}
                            alt={projectData[content].alt + ' second'}
                            className="detail-image"
                        />
                        <Seperator />

                        <img
                            src={ccThirdSmall}
                            srcSet={`${ccThirdSmall} 400w, ${ccThirdMedium} 868w, ${ccThirdLarge} 1380w`}
                            alt={projectData[content].alt + ' third'}
                            className="detail-image"
                        />
                        <Seperator />

                        <img
                            src={ccForthSmall}
                            srcSet={`${ccForthSmall} 400w, ${ccForthMedium} 868w, ${ccForthLarge} 1380w`}
                            alt={projectData[content].alt + ' forth'}
                            className="detail-image"
                        />
                        <Seperator />

                        <img
                            src={ccFifthSmall}
                            srcSet={`${ccFifthSmall} 400w, ${ccFifthMedium} 868w, ${ccFifthLarge} 1380w`}
                            alt={projectData[content].alt + ' fifth'}
                            className="detail-image"
                        />
                        <Seperator />
                    </div>
                }

                {content === 'oe' &&
                    <div className="detail-images-container">
                        <img
                            src={openbookSmall}
                            srcSet={`${openbookSmall} 400w, ${openbookMedium} 868w, ${openbookLarge} 1380w`}
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
                            srcSet={`${portSmall} 400w, ${portMedium} 868w, ${portLarge} 1380w`}
                            alt={projectData[content].alt + ' port'}
                            className="detail-image"
                        />
                        <Seperator />
                    </div>
                }

            <div className="tech-container">
                <h1 className="tech-title">Technologies Used</h1>
                {projectData[content].tech.map((technology, index) => (
                    <div className="tech-div" key={`${index}techBox`}>
                        <p>{technology}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default Detail;
