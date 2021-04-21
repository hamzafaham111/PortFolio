import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
const Footer = () =>
{
    return(
        <>
            <div className="container-fluide footer_container">
            <footer className="footer">
                <div>
                    <p><b>Content</b></p>
                    <p>Home</p>
                    <p>About Me</p>
                    <p>Skills</p>
                    <p>Services</p>
                </div>
                <div>
                <p><b>Contact</b></p>
                     <p><PhoneIcon/> 0987656735</p>
                    <p><AlternateEmailIcon/> Hamzafaham111@gmail.com</p>
                    <p><LocationOnIcon/> Lahore cantt chatral line punjab</p>
                    </div>
            </footer>
            </div>
        </>
    )
}
export default Footer;