import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contacts.css";

export const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ymb0zin",
        "template_mlfxyxf",
        form.current,
        "WQ1EiyuosIfZS_a54"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="r">
      <div className="row">
        <div className="re">
          <h1>Contact Us</h1>
        </div>
        <div
          className="col-lg-6 order-2 order-lg-1"
          style={{ padding: 90, paddingLeft: 200 }}
        ></div>
        <div className="col-lg-6 order-1 order-lg-2" style={{ padding: 50 }}>
          <div className="contact-form-container rounded-lg shadow-md p-3 ">
            <h1>Send message</h1>

            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control  "
                  type="text"
                  name="user_name"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control form-control-sm"
                  type="email"
                  name="user_email"
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-control form-control-sm"
                  name="message"
                />
              </div>
              <div className="col-12 pt-3">
                <input className="btn btn-primary" type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
