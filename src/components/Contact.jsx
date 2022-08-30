import React from "react";

export default function Contact(){
    return(
        <div className="contact-content font1 max-width-1 m-auto">
        <div className="max-width-1 m-auto mx-1">
            <h2>Fell Free To Contact Us</h2>
            <div className="contact-form">
                <div className="form-box flex-d-column">
                    <label className="my-10"  htmlFor="text">Name:</label>
                    <input className="px-10" type="text" placeholder="Enter your name"/>
                </div>
                <div className="form-box flex-d-column">
                    <label className="my-10"  htmlFor="number">Mobile NO.:</label>
                    <input className="px-10" type="text" placeholder="Enter your Phone Number"/>
                </div>
                <div className="form-box flex-d-column">
                    <label className="my-10"  htmlFor="Email">Email:</label>
                    <input className="px-10" type="email" placeholder="Enter your Email"/>
                </div>
                <div className="form-box flex-d-column">
                    <label className="my-10"  htmlFor="message">Message:</label>
                    <textarea className="px-10" placeholder="Enter Your Message" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="form-box  text-align-r">
                    <button className="btn ">Submit</button>
                </div>
            </div>
        </div>
    </div>
    )
}