
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append("user_name", form.current.user_name.value);
      formData.append("user_email", form.current.user_email.value);
      formData.append("message", form.current.message.value);
  
      const fileInput = document.getElementById("attachment");
      const file = fileInput.files[0];
      if (file) {
        formData.append("attachment", file);
      }
  
      emailjs
      .sendForm(
        "service_hga4bd2",
        "template_16idn3g",
        form.current,
        "GZhJIRYoTWdlht3pL"
      )
        .then(
          (result) => {
            console.log(result.text);
            alert("your message send");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    const handleUploadClick = () => {
      document.getElementById("attachment").click();
    };
  
    return (
        <div className="container">
          <div style={{margin: ''}} className="text-center mt-5 mb-0">
            <h1 id="contact-header">Contact Us</h1>
          </div>
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
            <form className="contact-form bg-white p-4 shadow" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name" className="label-c">Name:</label>
                <input
                  className="form-control"
                  id="name"
                  name="user_name"
                  type="text"
                  placeholder="Name.."
                  style={{ maxWidth: '300px' }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="label-c">Email:</label>
                <input
                  className="form-control"
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder="Email.."
                  style={{ maxWidth: '300px' }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="label-c">Message:</label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  cols={5}
                  rows={5}
                  placeholder="Your message.."
                  style={{ maxWidth: '300px' }}
                ></textarea>
              </div>
              <div className="form-group">
              <label htmlFor="attachment">Attachment:</label>
                <input
                  className="btn btn-primary custom-upload-button form-group text-center"
                  type="file"
                  name="attachment"
                  id="attachment"
                  style={{ display: 'block', margin: '5px'}}
                  onClick={handleUploadClick}
                />
              </div>
              <div className="form-group text-center">
                <input
                  id="send-btn"
                  className="btn btn-primary"
                  type="submit"
                  value="Send"
                />
              </div>
            </form>
          </div>
        </div>
      );
      
      
    }