import React from 'react';
import WebIcon from '@material-ui/icons/Web';
import SettingsCellIcon from '@material-ui/icons/SettingsCell';
import BrushIcon from '@material-ui/icons/Brush';
const Services = () =>
{
    return(
        <>
            <div className="services">
                <div className="services_intro">
                    <h1>My Services</h1>
                    <span>______ <span style={{color: '#F50057', fontWeight: "bold"}}>What I provide </span>______</span>
                </div>
                <div className="services_body">
            <div className="services_blocks">
                <WebIcon className="icons"/>
                <h5>Web Development</h5>
                <p>I am a fullstack web developer and I know all the essential moderan technologies that you needed</p>
            </div>
            <div className="services_blocks">
                <SettingsCellIcon className="icons"/>
                <h5>Mobile Application Development</h5>
                <p>Although I am working mostly on webb Development but I hav professional team for mobile app lication development </p>
            </div>
            <div className="services_blocks">
                <BrushIcon className="icons"/>
                <h5>Graphic designing</h5>
                <p>I have strong grip on graphic designing specally logo designing and web designing through photoshop and other adobi technologies</p>
            </div>
                </div>
            </div>
        </>
    )
}
export default Services;