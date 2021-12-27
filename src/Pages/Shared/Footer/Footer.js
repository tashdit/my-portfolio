import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <>
        <footer>
            <div className="container">
            <div className="row">
                <div className="col-sm-12">
                <div className="copyright-box">
                    <p className="copyright">&copy; Copyright <strong>Mollah Masuk Helal</strong>. All Rights Reserved</p>
                    <div className="credits">
                    Designed by <a href="#">Mollah Masuk Helal</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </footer>  
        </>
    );
};

export default Footer;