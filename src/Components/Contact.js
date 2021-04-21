import React from 'react';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


const Contact = () =>
{
    return(
        
        <div className="contact">
        <form className="contact_me">
            <div className="right-side">
            <div>
            <h4 style={{fontFamily:"revert"}}>Get in Tuch</h4>
            </div>
           <div className="contact_me_form_elements">
               <input type="text" placeholder="Name"/>
           </div>
           <div className="contact_me_form_elements">
               <input type="text" placeholder="Email"/>
           </div>
           <div className="contact_me_form_elements">
               <textarea type="text" placeholder="Messege"/>
           </div>
           <div className="contact_me_form_elements">
           <Button>Messege <SendIcon/></Button>
           </div>
           <div className="icons" style={{textAlign:"center"}}>
               <a href="#"><FacebookIcon style={{fontSize:"40px", color:"#3367D6" }}/></a>
               <a href="#"><InstagramIcon style={{fontSize:"40px", color:"#C32F5C" }}/></a>
           </div>
           <div>
           </div>
            </div>
            <div className="left-side">
                    <p>You can contact me if you need any service that is given</p>
            </div>
        
        </form>
        </div>
    )
}
export default Contact;