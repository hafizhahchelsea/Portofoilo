import React from "react";

const Contact = () => {
    return(
       <section id="contact" className="py-20 bg-grey-100">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4x1 font-bold mb-8 text-gray-800">Contact Me</h2>
            <p className="text-x1 mb-4 text-gray-600">
                Feel free to leave me a massage
            </p>
            <a href="mailto:hafizhahchelseacahyani@gmail.com" className="bg-rose-700 hover:bg-rose-500 text-white font-bold py-2 rounded-lg shadow-md transition duration-300">
                Send Mail
            </a>
        </div>
       </section> 
    )
}

export default Contact;