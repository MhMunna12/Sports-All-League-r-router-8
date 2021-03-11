import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = (props) => {
    const {strFacebook, strTwitter, strYoutube} = props.league;
    return (
        <div>
            <div className="icon">
            <a href= {`https://${strTwitter}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-4x social-icon text-primary" icon={faTwitter} /></a>
            <a href= {`https://${strFacebook}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-4x social-icon text-primary" icon={faFacebook} /></a>
            <a href= {`https://${strYoutube}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  className="fa-4x social-icon text-danger" icon={faYoutube} /></a>
        </div>
        </div>
    );
};

export default Footer;