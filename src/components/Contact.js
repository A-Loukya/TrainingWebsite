import "../css/Contact.css";
import arrow from "../Images/arrow.svg";
const Contact = () => {
  return (
    // contact page
    <div className="main main_contact" id="contact">
      <div className="contact">
        <h2>Make Your Next Career Move!</h2>
        <form>
          <div className="input">
        <input
            
            id="email"
            type="email"
            placeholder="john@doe.com"
          />

          <button
            class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Subscribe
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
