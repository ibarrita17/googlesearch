import React from "react";

export const Footer = () => {
    return (
      <footer className="fixed inset-x-0 bottom-0 bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
          <p className="text-sm">
              &copy; {new Date().getFullYear()} Javier Ibarra | All rights reserved.
          </p>
      </div>
    </footer>

    );
    }
export default Footer;