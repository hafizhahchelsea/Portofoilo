import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm mb-4">&copy;{new Date().getFullYear()} Hafizhah Chelsea Cahyani, All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer;