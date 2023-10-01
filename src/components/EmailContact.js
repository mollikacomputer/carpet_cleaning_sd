"use client";
import React, { useRef } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
// for email js
import emailjs from "@emailjs/browser";

const EmailContact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6cbaf0b",
        "template_39szbht",
        form.current,
        "QZ-FwUQStvQDi1wdO"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Get Free Estimate</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            className="input input-bordered w-full"
            
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className="input input-bordered w-full"
            
          />
          <label>Message</label>
          <textarea
            name="message"
            className="textarea textarea-bordered textarea-md w-full "
            
          />

          <div className="card-actions justify-start">
            <button type="submit" value="Send" className="btn w-full">
              Sent SMS
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailContact;
