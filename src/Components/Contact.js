import React from "react";
import emailjs from "emailjs-com";

const Contact = ({ data }) => {
  if (data) {
    var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var contactEmail = data.email;
    var contactMessage = data.contactmessage;
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_v16ajmi",

        e.target,
        "user_7ZQgzGca2oteS5RRColwT"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for contacting me. I will contact you back soon");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={sendEmail}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="ring-2 ring-gray-200 p-2 m-2 rounded-md focus:outline-none focus:ring-blue-500"
                  name="name"
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  className="ring-2 ring-gray-200 p-2 m-2 rounded-md focus:outline-none focus:ring-blue-500"
                  name="email"
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input type="text" name="subject" />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea cols="30" rows="8" name="message"></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-500 m-2 w-60 h-12 rounded-lg mt-6 ml-auto"
              >
                Send Message
              </button>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {contactName}
              <br />
              {contactEmail}
              <br />
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
