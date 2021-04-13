import React from 'react';
import MyPicture from '../Hamza Faham.jpg';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const AboutMe = () =>
{
    return(
        <>
            <div className="container about_me">
                <div className="about_me_info">
                    <div className="my_image">
                    <img src={MyPicture}/>
                    </div>
                    <div className="my_intro">
                        <p>
                            <h2>Hamza Faham Yousafzai</h2>
                            <b>Full Stack Web Developer</b>
                            <p>Hay! I'm Hamza Faham Yousafzai student of BS Software engineering. From last one and half year I am working as a fullstack web developer. </p>
                            <Button variant="contained" color="secondary" className="mr-1 ">Hire Me</Button>
                            <Button variant="contained" className="bg-success text-light ">Download Cv</Button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutMe;