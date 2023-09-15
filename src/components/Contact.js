import "../css/Contact.css";
import arrow from "../Images/arrow.svg";
const Contact = () => {
    return ( 
        // contact page
        <div className="main main_contact" id="contact">
            <div className="contact">
            <h2>JOIN US NOW!</h2>
            <form>
            <input type="e-mail" placeholder="Enter your email address" className="input"/>
            <button type="submit"><img src={arrow}/></button>
            </form>
            </div>
        </div>
     );
}
 
export default Contact;