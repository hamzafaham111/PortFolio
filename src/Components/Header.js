import React from 'react';
import Typed from 'react-typed';
export const Header = () => {
    return (
        <>
            <div className="header_wraper">
                <div className="main_info">
                    <h1>Web Development and Website promotions</h1>
                    <Typed
                    className="typed-text"
                    strings={["web design", "website development", "Mobile Application Development", "SQL Database", "Git Github", "Javascript", "Bootstrap", "HTML/CSS", "SASS" ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    />
                    <a href="http://localhost:3000/" className="btn-main-offer">Contact</a>
                </div>
            </div>
        </>
    )
}
export default Header;